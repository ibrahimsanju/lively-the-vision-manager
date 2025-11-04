import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
          <p className="text-sm font-medium text-accent">Transform Your Goals Into Reality</p>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Your Vision. Your Path. Your Success.
        </h1>

        <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
          Lively unifies all your tasks into one powerful framework. Start with your yearly vision, break it into
          monthly milestones, then weekly wins. Finally, tackle daily tasks with purpose.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
