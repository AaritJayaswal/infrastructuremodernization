import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Building, FileText, DollarSign } from "lucide-react";
import BillTabs from "@/components/bill-tabs";
import { BillContent } from "@/data/bill-content";

export default function Home() {
  const { data: bills, isLoading } = useQuery({
    queryKey: ["/api/bills"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="p-6">
                  <div className="h-6 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const bill = bills?.[0];
  if (!bill) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Card className="p-8 text-center">
            <CardContent>
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-foreground mb-2" data-testid="text-no-bills">
                No Bills Available
              </h1>
              <p className="text-muted-foreground" data-testid="text-no-bills-description">
                There are currently no bills to display.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const billContent = bill.content as BillContent;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-40 right-40 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-12 md:py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight" data-testid="text-main-title">
              {billContent.overview.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-4xl mx-auto leading-relaxed" data-testid="text-subtitle">
              {billContent.overview.subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-white/80">
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm" data-testid="info-status">
                <FileText className="w-5 h-5" />
                <span className="font-medium">Proposed Legislation</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm" data-testid="info-funding">
                <DollarSign className="w-5 h-5" />
                <span className="font-medium">$2B Annual Funding</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <BillTabs content={billContent} />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-muted/80 to-muted/60 border-t border-border/50 py-12 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-border/30 shadow-md">
            <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-footer-disclaimer">
              This is a legislative proposal for discussion and review. 
              For official congressional status, please consult{" "}
              <a href="https://www.congress.gov" className="text-primary hover:underline font-medium transition-colors" data-testid="link-congress">
                Congress.gov
              </a>
            </p>
            <p className="text-muted-foreground text-xs mt-3 font-medium" data-testid="text-footer-title">
              National Resilient Infrastructure Act of 2025 - Proposed Legislation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
