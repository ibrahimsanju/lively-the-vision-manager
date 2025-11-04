import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 p-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent">Ready to align your goals?</span>
          </div>

          <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
            Transform Your Vision Into Action Today
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Join thousands of goal-achievers who are building their future, one focused week at a time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Start Free Today <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              See Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}