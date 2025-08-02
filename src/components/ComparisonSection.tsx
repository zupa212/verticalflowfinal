
import React from 'react';
import { Check, X, Star, Zap, Clock, Users, Shield, BarChart, Settings, Layers, Workflow } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Cost",
      icon: "BarChart",
      verticalflow: { value: "$", status: "positive", icon: "check" },
      fulltime: { value: "$$$$ (High Overhead)", status: "negative", icon: "x" },
      agencies: { value: "$$", status: "negative", icon: "x" }
    },
    {
      feature: "Senior-Level Designer",
      icon: "Users",
      verticalflow: { value: "Guaranteed", status: "positive", icon: "check" },
      fulltime: { value: "Hopefully", status: "negative", icon: "x" },
      agencies: { value: "Maybe", status: "negative", icon: "x" }
    },
    {
      feature: "Turnaround Time",
      icon: "Clock",
      verticalflow: { value: "48 hours for most projects", status: "positive", icon: "check" },
      fulltime: { value: "Can take weeks due to other tasks", status: "negative", icon: "x" },
      agencies: { value: "Weeks, depending on workload", status: "negative", icon: "x" }
    },
    {
      feature: "Start Time",
      icon: "Zap",
      verticalflow: { value: "Today itself", status: "positive", icon: "check" },
      fulltime: { value: "Weeks to onboard and train", status: "negative", icon: "x" },
      agencies: { value: "Days to set up agreements", status: "negative", icon: "x" }
    },
    {
      feature: "Unlimited Revisions",
      icon: "Workflow",
      verticalflow: { value: "Yes, we keep working until it's perfect", status: "positive", icon: "check" },
      fulltime: { value: "Limited, with extra time constraints", status: "negative", icon: "x" },
      agencies: { value: "Limited revisions per project", status: "negative", icon: "x" }
    },
    {
      feature: "Client Portal",
      icon: "Shield",
      verticalflow: { value: "Yes, track progress easily", status: "positive", icon: "check" },
      fulltime: { value: "Internal systems may vary, often less accessible", status: "negative", icon: "x" },
      agencies: { value: "No consistent system", status: "negative", icon: "x" }
    },
    {
      feature: "Scalability",
      icon: "Layers",
      verticalflow: { value: "Scale up or down with ease.", status: "positive", icon: "check" },
      fulltime: { value: "Possible", status: "positive", icon: "check" },
      agencies: { value: "Limited by freelancer's capacity", status: "negative", icon: "x" }
    },
    {
      feature: "Flexibility",
      icon: "Settings",
      verticalflow: { value: "Pause or adjust your subscription anytime", status: "positive", icon: "check" },
      fulltime: { value: "Locked into salaries and benefits", status: "negative", icon: "x" },
      agencies: { value: "Inflexible, project-based", status: "negative", icon: "x" }
    }
  ];

  const renderIcon = (icon: string, status: string) => {
    if (icon === "check") {
      return <Check className="w-5 h-5 text-emerald-500" />;
    } else {
      return <X className="w-5 h-5 text-rose-500" />;
    }
  };

  const renderFeatureIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      BarChart: <BarChart className="w-5 h-5" />,
      Users: <Users className="w-5 h-5" />,
      Clock: <Clock className="w-5 h-5" />,
      Zap: <Zap className="w-5 h-5" />,
      Workflow: <Workflow className="w-5 h-5" />,
      Shield: <Shield className="w-5 h-5" />,
      Layers: <Layers className="w-5 h-5" />,
      Settings: <Settings className="w-5 h-5" />
    };
    return iconMap[iconName] || <Star className="w-5 h-5" />;
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-brand/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-brand bg-clip-text text-transparent">
            Why choose us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out what VerticalFlow offers Vs employees and other agencies. It's quite a lot!
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="overflow-hidden shadow-2xl border-2 border-primary/20 bg-card/80 backdrop-blur-xl">
          <CardContent className="p-0">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 border-b border-primary/20 bg-gradient-to-r from-primary/10 via-brand/5 to-primary/10">
              <div className="font-semibold text-muted-foreground"></div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2 p-3 bg-gradient-to-br from-primary to-brand rounded-2xl shadow-lg">
                  <Star className="w-6 h-6 text-white" />
                  <span className="font-bold text-lg text-white">VerticalFlow</span>
                </div>
              </div>
              <div className="text-center">
                <div className="p-3 bg-muted/50 rounded-2xl border border-border">
                  <span className="font-semibold text-foreground">Full-time Designer</span>
                </div>
              </div>
              <div className="text-center">
                <div className="p-3 bg-muted/50 rounded-2xl border border-border">
                  <span className="font-semibold text-foreground">Other agencies</span>
                </div>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-4 gap-4 p-6 border-b last:border-b-0 border-primary/10 transition-all duration-300 hover:bg-primary/5 ${
                  index % 2 === 0 ? 'bg-background/50' : 'bg-muted/10'
                }`}
              >
                <div className="font-medium text-foreground flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-brand/20 rounded-xl flex items-center justify-center text-primary">
                    {renderFeatureIcon(row.icon)}
                  </div>
                  {row.feature}
                </div>
                
                <div className="flex items-center justify-center gap-3 p-3 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200/50 dark:border-emerald-800/50">
                  <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center">
                    {renderIcon(row.verticalflow.icon, row.verticalflow.status)}
                  </div>
                  <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                    {row.verticalflow.value}
                  </span>
                </div>
                
                <div className="flex items-center justify-center gap-3 p-3 bg-rose-50/50 dark:bg-rose-950/20 rounded-xl border border-rose-200/50 dark:border-rose-800/50">
                  <div className="w-8 h-8 bg-rose-100 dark:bg-rose-900/50 rounded-full flex items-center justify-center">
                    {renderIcon(row.fulltime.icon, row.fulltime.status)}
                  </div>
                  <span className="text-sm font-medium text-rose-700 dark:text-rose-300">
                    {row.fulltime.value}
                  </span>
                </div>
                
                <div className="flex items-center justify-center gap-3 p-3 bg-rose-50/50 dark:bg-rose-950/20 rounded-xl border border-rose-200/50 dark:border-rose-800/50">
                  <div className="w-8 h-8 bg-rose-100 dark:bg-rose-900/50 rounded-full flex items-center justify-center">
                    {renderIcon(row.agencies.icon, row.agencies.status)}
                  </div>
                  <span className="text-sm font-medium text-rose-700 dark:text-rose-300">
                    {row.agencies.value}
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-xl font-semibold text-foreground mb-2">
            And here comes the <span className="bg-gradient-to-r from-primary to-brand bg-clip-text text-transparent font-bold">Sauce...</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
