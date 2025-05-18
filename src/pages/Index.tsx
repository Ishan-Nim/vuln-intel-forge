import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import VulnerabilityFlowChart from '@/components/VulnerabilityFlowChart';
import { Separator } from '@/components/ui/separator';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="bg-muted py-20 rounded-lg shadow-sm mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-primary mb-4">
            Meet Mr.Vulnr0 - Your AI Security Sidekick
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Automated Vulnerability Management, Real-Time Threat Intelligence
          </p>
          <div className="space-x-4">
            <Link to="/vulnerabilities">
              <Button size="lg">Explore Vulnerabilities</Button>
            </Link>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
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
            Witness real-time vulnerability detection and analysis
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
