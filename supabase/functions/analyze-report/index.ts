
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AnalysisResult {
  totalVulnerabilities: number;
  criticalCount: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
  fixPriority: string;
  summary: string;
  vulnerabilities: Array<{
    name: string;
    severity: string;
    description: string;
    recommendation: string;
  }>;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse the JSON request body
    const { reportContent } = await req.json();
    
    if (!reportContent) {
      throw new Error("No report content provided");
    }
    
    console.log("Received report content, length:", reportContent.length);
    
    // Call OpenAI API to analyze the report
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: `You are a security report analyzer. Extract and analyze vulnerabilities from the provided markdown report.
            Respond with a JSON object containing: 
            - totalVulnerabilities: number
            - criticalCount: number
            - highCount: number
            - mediumCount: number
            - lowCount: number
            - fixPriority: string (name of the vulnerability that should be fixed first)
            - summary: string (brief overview of findings)
            - vulnerabilities: array of objects with properties:
              - name: string
              - severity: string (critical, high, medium, low)
              - description: string (short)
              - recommendation: string (brief fix suggestion)`
          },
          { role: 'user', content: reportContent }
        ],
        response_format: { type: "json_object" }
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenAI API error:", errorData);
      throw new Error(`OpenAI API error: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const analysisResult = JSON.parse(data.choices[0].message.content);
    
    return new Response(JSON.stringify({ 
      success: true,
      analysis: analysisResult
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in analyze-report function:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
