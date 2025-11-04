import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, BarChart3, Focus, Network } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Focus,
      title: "Vision-Driven Design",
      description: "Your yearly vision stays front and center, ensuring every task contributes to your ultimate goal.",
      color: "text-primary",
    },
    {
      icon: Network,
      title: "Hierarchical Structure",
      description: "From yearly vision to daily tasks—every layer builds upon the last, creating perfect alignment.",
      color: "text-secondary",
    },
    {
      icon: BarChart3,
      title: "Monthly Progress Tracking",
      description: "12 monthly milestones help you pace your journey and celebrate wins throughout the year.",
      color: "text-accent",
    },
    {
      icon: Zap,
      title: "Weekly Organization",
      description: "Consolidated weekly view shows all your goals across main objectives in one dashboard.",
      color: "text-chart-3",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Lively?</h2>
          <p className="text-lg text-muted-foreground">
            A planning system designed for those who want purpose in every action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <Card key={idx} className="border border-border/50 hover:border-border transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-muted">
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
