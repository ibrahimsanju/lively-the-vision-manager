"use client"

import { Card, CardContent } from "@/components/ui/card"

export function HowItWorks() {
  const steps = [
    {
      title: "Vision",
      description: "Your yearly vision becomes the north star",
    },
    {
      title: "Main Goals",
      description: "2-3 goals supporting your vision",
    },
    {
      title: "Monthly Goals",
      description: "12 monthly milestones per main goal",
    },
    {
      title: "Weekly Goals",
      description: "Break monthly into weekly priorities",
    },
    {
      title: "Daily Tasks",
      description: "Each task supports a weekly goal",
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">How Lively Works</h2>
          <p className="text-muted-foreground">From vision to victory in 5 simple layers</p>
        </div>

        <div className="flex flex-col items-center gap-0 max-w-2xl mx-auto">
          {steps.map((step, idx) => (
            <div key={idx} className="w-full">
              {/* Step card */}
              <div className="flex items-center justify-center">
                <Card className="w-full border border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="py-4 px-6">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {idx < steps.length - 1 && (
                <div className="w-full flex justify-center py-2">
                  <svg width="40" height="50" viewBox="0 0 40 50" className="text-accent">
                    <path
                      d="M 20 5 Q 18 15, 20 30"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="5,3"
                      opacity="0.7"
                    />
                    <polygon points="20,40 16,32 24,32" fill="currentColor" opacity="0.7" />
                    {/* Handwritten curve effect */}
                    <path
                      d="M 20 5 Q 18 15, 20 30"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      opacity="0.2"
                      filter="blur(0.5px)"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent/10 rounded-lg p-6 max-w-2xl mx-auto border border-accent/20">
          <p className="text-center text-sm text-foreground">
            <span className="font-semibold">The key:</span> Every layer connects back to your vision. No task is just
            busywork—everything has purpose.
          </p>
        </div>
      </div>
    </section>
  )
}
