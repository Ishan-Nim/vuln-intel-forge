
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import VulnerabilityFlowChart from '@/components/VulnerabilityFlowChart';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="py-12">
      {/* Updated Hero Section */}
      <section className="bg-background py-20 rounded-lg mb-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-primary">
            AI Precision. Human Insight. Safer Code.
          </h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto text-muted-foreground">
            Meet <span className="text-primary font-semibold">Mr.Vulnr0</span> — Your AI-Powered Vulnerability Assistant
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-muted-foreground">
            Mr.Vulnr0 helps developers, bug bounty hunters, and security teams remediate vulnerabilities faster, smarter, 
            and more securely. It combines cutting-edge AI with real-world security data to explain, search, and patch code 
            threats — right in your workflow.
          </p>
          <div className="space-x-4">
            <Link to="/mrvulnr0">
              <Button size="lg" className="px-6">Try Mr.Vulnr0 Now</Button>
            </Link>
            <Link to="/vulndb">
              <Button variant="outline" size="lg" className="px-6">Explore Vulnerability Database</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Flow Chart Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-primary">How Mr.Vulnr0 Works</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Visualizing the vulnerability management process from detection to alert
          </p>
        </div>
        <VulnerabilityFlowChart />
      </section>

      {/* Mr.Vulnr0 In Action Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-primary">See Mr.Vulnr0 In Action</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Experience how easily our AI assistant identifies, explains, and fixes vulnerabilities in your code
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Cards - Replace with actual data */}
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Real-time Scanning</h3>
            <p className="text-muted-foreground">Detect vulnerabilities as they emerge.</p>
          </div>
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-muted-foreground">Intelligent analysis for accurate results.</p>
          </div>
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Automated Reporting</h3>
            <p className="text-muted-foreground">Comprehensive reports at your fingertips.</p>
          </div>
        </div>
      </section>
      
      {/* Real-Time Vulnerability Intelligence */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-primary">Real-Time Vulnerability Intelligence</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Stay ahead of threats with up-to-the-minute vulnerability data
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Cards - Replace with actual data */}
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Emerging Threats</h3>
            <p className="text-muted-foreground">Discover the latest vulnerabilities as they're disclosed.</p>
          </div>
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Severity Analysis</h3>
            <p className="text-muted-foreground">Understand the potential impact of each vulnerability.</p>
          </div>
          <div className="bg-card rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
            <p className="text-muted-foreground">See which vulnerabilities are trending worldwide.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
