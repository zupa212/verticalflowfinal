
import React from 'react';
import { Check, X, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Cost",
      verticalflow: { value: "$", status: "positive", icon: "check" },
      fulltime: { value: "$$$$ (High Overhead)", status: "negative", icon: "x" },
      agencies: { value: "$$", status: "negative", icon: "x" }
    },
    {
      feature: "Senior-Level Designer",
      verticalflow: { value: "Guaranteed", status: "positive", icon: "check" },
      fulltime: { value: "Hopefully", status: "negative", icon: "x" },
      agencies: { value: "Maybe", status: "negative", icon: "x" }
    },
    {
      feature: "Turnaround Time",
      verticalflow: { value: "48 hours for most projects", status: "positive", icon: "check" },
      fulltime: { value: "Can take weeks due to other tasks", status: "negative", icon: "x" },
      agencies: { value: "Weeks, depending on workload", status: "negative", icon: "x" }
    },
    {
      feature: "Start Time",
      verticalflow: { value: "Today itself", status: "positive", icon: "check" },
      fulltime: { value: "Weeks to onboard and train", status: "negative", icon: "x" },
      agencies: { value: "Days to set up agreements", status: "negative", icon: "x" }
    },
    {
      feature: "Unlimited Revisions",
      verticalflow: { value: "Yes, we keep working until it's perfect", status: "positive", icon: "check" },
      fulltime: { value: "Limited, with extra time constraints", status: "negative", icon: "x" },
      agencies: { value: "Limited revisions per project", status: "negative", icon: "x" }
    },
    {
      feature: "Client Portal",
      verticalflow: { value: "Yes, track progress easily", status: "positive", icon: "check" },
      fulltime: { value: "Internal systems may vary, often less accessible", status: "negative", icon: "x" },
      agencies: { value: "No consistent system", status: "negative", icon: "x" }
    },
    {
      feature: "Scalability",
      verticalflow: { value: "Scale up or down with ease.", status: "positive", icon: "check" },
      fulltime: { value: "Possible", status: "positive", icon: "check" },
      agencies: { value: "Limited by freelancer's capacity", status: "negative", icon: "x" }
    },
    {
      feature: "Flexibility",
      verticalflow: { value: "Pause or adjust your subscription anytime", status: "positive", icon: "check" },
      fulltime: { value: "Locked into salaries and benefits", status: "negative", icon: "x" },
      agencies: { value: "Inflexible, project-based", status: "negative", icon: "x" }
    }
  ];

  const renderIcon = (icon: string, status: string) => {
    if (icon === "check") {
      return <Check className="w-5 h-5 text-success" />;
    } else {
      return <X className="w-5 h-5 text-destructive" />;
    }
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why choose us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out what VerticalFlow offers Vs employees and other agencies. It's quite a lot!
          </p>
        </div>

        {/* Comparison Table */}
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-4 p-6 border-b bg-muted/20">
              <div className="font-semibold text-muted-foreground"></div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-brand" />
                  <span className="font-bold text-lg text-brand">VerticalFlow</span>
                </div>
              </div>
              <div className="text-center">
                <span className="font-semibold text-foreground">Full-time Designer</span>
              </div>
              <div className="text-center">
                <span className="font-semibold text-foreground">Other agencies</span>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-4 gap-4 p-6 border-b last:border-b-0 ${
                  index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
                }`}
              >
                <div className="font-medium text-foreground flex items-center">
                  {row.feature}
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  {renderIcon(row.verticalflow.icon, row.verticalflow.status)}
                  <span className={`text-sm ${
                    row.verticalflow.status === 'positive' ? 'text-success' : 'text-destructive'
                  }`}>
                    {row.verticalflow.value}
                  </span>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  {renderIcon(row.fulltime.icon, row.fulltime.status)}
                  <span className={`text-sm ${
                    row.fulltime.status === 'positive' ? 'text-success' : 'text-destructive'
                  }`}>
                    {row.fulltime.value}
                  </span>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  {renderIcon(row.agencies.icon, row.agencies.status)}
                  <span className={`text-sm ${
                    row.agencies.status === 'positive' ? 'text-success' : 'text-destructive'
                  }`}>
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
            And here comes the <span className="text-brand font-bold">Sauce...</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
