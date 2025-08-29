import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Shield, Users, Lightbulb, GraduationCap } from "lucide-react";
import { BillContent } from "@/data/bill-content";

interface BillTabsProps {
  content: BillContent;
}

export default function BillTabs({ content }: BillTabsProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "climate":
        return <Building2 className="w-6 h-6 text-primary" />;
      case "security":
        return <Shield className="w-6 h-6 text-destructive" />;
      case "workforce":
        return <GraduationCap className="w-6 h-6 text-accent" />;
      case "innovation":
        return <Lightbulb className="w-6 h-6 text-primary" />;
      default:
        return <Building2 className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="glass-effect border-b border-border/50 shadow-lg sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6">
          <TabsList className="flex justify-center space-x-2 md:space-x-4 bg-transparent h-auto p-2">
            <TabsTrigger 
              value="overview" 
              className="px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 data-[state=active]:tab-trigger-active hover:bg-primary/10 border border-transparent data-[state=active]:border-primary/20"
              data-testid="tab-overview"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="climate" 
              className="px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 data-[state=active]:tab-trigger-active hover:bg-primary/10 border border-transparent data-[state=active]:border-primary/20"
              data-testid="tab-climate"
            >
              Climate Standards
            </TabsTrigger>
            <TabsTrigger 
              value="cybersecurity" 
              className="px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 data-[state=active]:tab-trigger-active hover:bg-destructive/10 border border-transparent data-[state=active]:border-destructive/20"
              data-testid="tab-cybersecurity"
            >
              Cybersecurity
            </TabsTrigger>
            <TabsTrigger 
              value="workforce" 
              className="px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 data-[state=active]:tab-trigger-active hover:bg-accent/10 border border-transparent data-[state=active]:border-accent/20"
              data-testid="tab-workforce"
            >
              Workforce
            </TabsTrigger>
            <TabsTrigger 
              value="funding" 
              className="px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 data-[state=active]:tab-trigger-active hover:bg-primary/10 border border-transparent data-[state=active]:border-primary/20"
              data-testid="tab-funding"
            >
              Funding
            </TabsTrigger>
          </TabsList>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <TabsContent value="overview" className="mt-0">
          <Card className="shadow-xl border border-border/50 backdrop-blur-sm bg-card/95">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8" data-testid="text-overview-title">
                Bill Overview & Purpose
              </h2>
              
              {/* Purpose Statement */}
              <div className="mb-8 p-8 bg-gradient-to-br from-secondary/60 to-secondary/40 rounded-xl border border-primary/20 shadow-md">
                <h3 className="text-xl font-semibold text-secondary-foreground mb-6" data-testid="text-legislative-purpose">
                  Legislative Purpose
                </h3>
                <div className="legal-text text-foreground space-y-4">
                  {content.overview.purpose.map((paragraph, index) => (
                    <p key={index} data-testid={`text-purpose-${index}`}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Key Provisions Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {content.overview.keyProvisions.map((provision, index) => (
                  <Card key={index} className="provision-card p-6 border border-primary/20 shadow-lg card-hover" data-testid={`card-provision-${index}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                        {getIcon(provision.icon)}
                      </div>
                      <h3 className="text-lg font-semibold text-primary" data-testid={`text-provision-title-${index}`}>
                        {provision.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-provision-description-${index}`}>
                      {provision.description}
                    </p>
                  </Card>
                ))}
              </div>

              {/* Funding Summary */}
              <div className="bg-gradient-to-br from-primary/8 via-secondary/8 to-destructive/8 rounded-xl p-8 border border-primary/20 shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-6" data-testid="text-funding-mechanism">
                  Funding Mechanism
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/60 p-6 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-foreground mb-3 text-lg" data-testid="text-revenue-source">
                      Revenue Source
                    </h4>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-revenue-description">
                      {content.overview.funding.source}
                    </p>
                  </div>
                  <div className="bg-white/60 p-6 rounded-lg border border-primary/10">
                    <h4 className="font-semibold text-foreground mb-3 text-lg" data-testid="text-dedicated-fund">
                      Dedicated Fund
                    </h4>
                    <p className="text-muted-foreground leading-relaxed" data-testid="text-fund-description">
                      {content.overview.funding.fund}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="climate" className="mt-0">
          <Card className="shadow-xl border border-border/50 backdrop-blur-sm bg-card/95">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8" data-testid="text-climate-title">
                {content.climate.title}
              </h2>
              
              <div className="space-y-8">
                {content.climate.sections.map((section, index) => (
                  <div key={index} className="section-border pl-8 py-4 bg-gradient-to-r from-primary/5 to-transparent rounded-r-lg" data-testid={`section-climate-${index}`}>
                    <h3 className="text-xl font-semibold text-primary mb-4" data-testid={`text-section-title-${index}`}>
                      <span className="section-number bg-primary/10 px-3 py-1 rounded-md mr-3">Section {section.number}</span>
                      {section.title}
                    </h3>
                    <div className="legal-text text-foreground bg-white/50 p-6 rounded-lg border border-primary/10" data-testid={`text-section-content-${index}`}>
                      <p>{section.content}</p>
                    </div>
                  </div>
                ))}

                {/* Implementation Timeline */}
                <div className="bg-gradient-to-br from-secondary/60 to-secondary/40 rounded-xl p-8 border border-primary/20 shadow-lg">
                  <h3 className="text-lg font-semibold text-secondary-foreground mb-6" data-testid="text-implementation-timeline">
                    Implementation Timeline
                  </h3>
                  <div className="space-y-4">
                    {content.climate.timeline.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4 bg-white/60 p-4 rounded-lg border border-primary/10" data-testid={`timeline-item-${index}`}>
                        <div className="w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full shadow-sm"></div>
                        <div>
                          <span className="font-semibold text-primary" data-testid={`text-timeline-month-${index}`}>
                            Month {item.month}:
                          </span>{" "}
                          <span className="text-foreground" data-testid={`text-timeline-milestone-${index}`}>{item.milestone}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cybersecurity" className="mt-0">
          <Card className="shadow-xl border border-border/50 backdrop-blur-sm bg-card/95">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif font-bold text-destructive mb-8" data-testid="text-cybersecurity-title">
                {content.cybersecurity.title}
              </h2>
              
              <div className="space-y-8">
                {content.cybersecurity.sections.map((section, index) => (
                  <div key={index} className="section-border pl-8 py-4 bg-gradient-to-r from-destructive/5 to-transparent rounded-r-lg border-l-destructive" data-testid={`section-cybersecurity-${index}`}>
                    <h3 className="text-xl font-semibold text-destructive mb-4" data-testid={`text-cyber-section-title-${index}`}>
                      <span className="section-number bg-destructive/10 px-3 py-1 rounded-md mr-3 text-destructive">Section {section.number}</span>
                      {section.title}
                    </h3>
                    <div className="legal-text text-foreground bg-white/50 p-6 rounded-lg border border-destructive/10" data-testid={`text-cyber-section-content-${index}`}>
                      <p>{section.content}</p>
                    </div>
                  </div>
                ))}

                {/* Grant Allocation */}
                <div className="bg-gradient-to-br from-destructive/8 to-destructive/4 rounded-xl p-8 border border-destructive/20 shadow-lg">
                  <h3 className="text-lg font-semibold text-destructive mb-6" data-testid="text-grant-allocation">
                    Grant Program Allocation ($500M Annual)
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center bg-white/60 p-6 rounded-lg border border-destructive/10 card-hover" data-testid="allocation-technology">
                      <div className="text-3xl font-bold text-destructive mb-2" data-testid="text-tech-percentage">
                        {content.cybersecurity.allocation.technology}%
                      </div>
                      <div className="text-sm font-medium text-foreground" data-testid="text-tech-label">
                        Technology Upgrades
                      </div>
                    </div>
                    <div className="text-center bg-white/60 p-6 rounded-lg border border-destructive/10 card-hover" data-testid="allocation-training">
                      <div className="text-3xl font-bold text-destructive mb-2" data-testid="text-training-percentage">
                        {content.cybersecurity.allocation.training}%
                      </div>
                      <div className="text-sm font-medium text-foreground" data-testid="text-training-label">
                        Training & Education
                      </div>
                    </div>
                    <div className="text-center bg-white/60 p-6 rounded-lg border border-destructive/10 card-hover" data-testid="allocation-response">
                      <div className="text-3xl font-bold text-destructive mb-2" data-testid="text-response-percentage">
                        {content.cybersecurity.allocation.response}%
                      </div>
                      <div className="text-sm font-medium text-foreground" data-testid="text-response-label">
                        Incident Response
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workforce" className="mt-0">
          <Card className="shadow-xl border border-border/50 backdrop-blur-sm bg-card/95">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif font-bold text-accent mb-8" data-testid="text-workforce-title">
                {content.workforce.title}
              </h2>
              
              <div className="space-y-8">
                {content.workforce.sections.map((section, index) => (
                  <div key={index} className="section-border pl-8 py-4 bg-gradient-to-r from-accent/5 to-transparent rounded-r-lg border-l-accent" data-testid={`section-workforce-${index}`}>
                    <h3 className="text-xl font-semibold text-accent mb-4" data-testid={`text-workforce-section-title-${index}`}>
                      <span className="section-number bg-accent/10 px-3 py-1 rounded-md mr-3 text-accent">Section {section.number}</span>
                      {section.title}
                    </h3>
                    <div className="legal-text text-foreground bg-white/50 p-6 rounded-lg border border-accent/10" data-testid={`text-workforce-section-content-${index}`}>
                      <p>{section.content}</p>
                    </div>
                  </div>
                ))}

                {/* Program Impact */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-accent/8 to-accent/4 rounded-xl p-8 border border-accent/20 shadow-lg card-hover" data-testid="card-training-outcomes">
                    <h3 className="text-lg font-semibold text-accent mb-6" data-testid="text-training-outcomes">
                      Expected Training Outcomes
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center bg-white/60 p-4 rounded-lg border border-accent/10" data-testid="outcome-workers">
                        <span className="font-medium">Skilled Workers Trained (5 years)</span>
                        <span className="font-bold text-accent text-lg" data-testid="text-workers-count">
                          {content.workforce.outcomes.training.workers}
                        </span>
                      </div>
                      <div className="flex justify-between items-center bg-white/60 p-4 rounded-lg border border-accent/10" data-testid="outcome-colleges">
                        <span className="font-medium">Community Colleges Participating</span>
                        <span className="font-bold text-accent text-lg" data-testid="text-colleges-count">
                          {content.workforce.outcomes.training.colleges}
                        </span>
                      </div>
                      <div className="flex justify-between items-center bg-white/60 p-4 rounded-lg border border-accent/10" data-testid="outcome-programs">
                        <span className="font-medium">Apprenticeship Programs</span>
                        <span className="font-bold text-accent text-lg" data-testid="text-programs-count">
                          {content.workforce.outcomes.training.programs}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-accent/8 to-accent/4 rounded-xl p-8 border border-accent/20 shadow-lg card-hover" data-testid="card-innovation-goals">
                    <h3 className="text-lg font-semibold text-accent mb-6" data-testid="text-innovation-goals">
                      Innovation Goals
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center bg-white/60 p-4 rounded-lg border border-accent/10" data-testid="goal-projects">
                        <span className="font-medium">Pilot Projects (3 years)</span>
                        <span className="font-bold text-accent text-lg" data-testid="text-projects-count">
                          {content.workforce.outcomes.innovation.projects}
                        </span>
                      </div>
                      <div className="flex justify-between items-center bg-white/60 p-4 rounded-lg border border-accent/10" data-testid="goal-partnerships">
                        <span className="font-medium">Technology Partnerships</span>
                        <span className="font-bold text-accent text-lg" data-testid="text-partnerships-count">
                          {content.workforce.outcomes.innovation.partnerships}
                        </span>
                      </div>
                      <div className="flex justify-between items-center bg-white/60 p-4 rounded-lg border border-accent/10" data-testid="goal-patents">
                        <span className="font-medium">Patents Expected</span>
                        <span className="font-bold text-accent text-lg" data-testid="text-patents-count">
                          {content.workforce.outcomes.innovation.patents}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="funding" className="mt-0">
          <Card className="shadow-xl border border-border/50 backdrop-blur-sm bg-card/95">
            <CardContent className="p-8">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8" data-testid="text-funding-title">
                {content.funding.title}
              </h2>
              
              <div className="space-y-8">
                {content.funding.sections.map((section, index) => (
                  <div key={index} className="section-border pl-8 py-4 bg-gradient-to-r from-primary/5 to-transparent rounded-r-lg" data-testid={`section-funding-${index}`}>
                    <h3 className="text-xl font-semibold text-primary mb-4" data-testid={`text-funding-section-title-${index}`}>
                      <span className="section-number bg-primary/10 px-3 py-1 rounded-md mr-3">Section {section.number}</span>
                      {section.title}
                    </h3>
                    <div className="legal-text text-foreground bg-white/50 p-6 rounded-lg border border-primary/10" data-testid={`text-funding-section-content-${index}`}>
                      <p>{section.content}</p>
                    </div>
                  </div>
                ))}

                {/* Fund Allocation */}
                <div className="bg-gradient-to-br from-primary/8 to-secondary/8 rounded-xl p-8 border border-primary/20 shadow-lg mb-8">
                  <h3 className="text-lg font-semibold text-primary mb-6" data-testid="text-fund-allocation">
                    Annual Fund Allocation ($2 Billion)
                  </h3>
                  <div className="space-y-4">
                    {content.funding.allocation.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-6 bg-white/60 rounded-lg border border-primary/10 shadow-sm card-hover" data-testid={`allocation-item-${index}`}>
                        <div className="flex items-center space-x-4">
                          <div className={`w-6 h-6 rounded-full shadow-sm ${
                            item.color === 'destructive' ? 'bg-destructive' :
                            item.color === 'accent' ? 'bg-accent' :
                            item.color === 'primary' ? 'bg-primary' :
                            item.color === 'muted' ? 'bg-muted' :
                            'bg-secondary'
                          }`}></div>
                          <span className="font-semibold text-lg" data-testid={`text-program-name-${index}`}>
                            {item.program}
                          </span>
                        </div>
                        <span className={`text-2xl font-bold ${
                          item.color === 'destructive' ? 'text-destructive' :
                          item.color === 'accent' ? 'text-accent' :
                          item.color === 'primary' ? 'text-primary' :
                          item.color === 'muted' ? 'text-muted-foreground' :
                          'text-foreground'
                        }`} data-testid={`text-amount-${index}`}>
                          ${typeof item.amount === 'string' ? item.amount : `${item.amount}M`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accountability Measures */}
                <div className="bg-gradient-to-br from-secondary/60 to-secondary/40 rounded-xl p-8 border border-primary/20 shadow-lg">
                  <h3 className="text-lg font-semibold text-secondary-foreground mb-6" data-testid="text-accountability-measures">
                    Accountability Measures
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/60 p-6 rounded-lg border border-primary/10">
                      <h4 className="font-semibold text-primary mb-4 text-lg" data-testid="text-reporting-requirements">
                        Reporting Requirements
                      </h4>
                      <ul className="text-sm text-foreground space-y-2 leading-relaxed">
                        {content.funding.accountability.reporting.map((item, index) => (
                          <li key={index} className="flex items-start gap-2" data-testid={`text-reporting-item-${index}`}>
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-white/60 p-6 rounded-lg border border-primary/10">
                      <h4 className="font-semibold text-primary mb-4 text-lg" data-testid="text-performance-metrics">
                        Performance Metrics
                      </h4>
                      <ul className="text-sm text-foreground space-y-2 leading-relaxed">
                        {content.funding.accountability.metrics.map((item, index) => (
                          <li key={index} className="flex items-start gap-2" data-testid={`text-metrics-item-${index}`}>
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  );
}
