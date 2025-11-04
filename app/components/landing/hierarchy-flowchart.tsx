"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Eye, Target, Calendar, ListTodo, CheckCircle2, ArrowDown } from "lucide-react"

export function HierarchyFlowchart() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">How Lively Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A hierarchical system that connects your dreams to daily actions, keeping your why always in focus.
          </p>
        </div>

        {/* Flowchart */}
        <div className="flex flex-col items-center gap-6">
          {/* Vision */}
          <div className="w-full max-w-sm">
            <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-3">
                  <Eye className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-bold text-lg">Yearly Vision</h3>
                    <p className="text-sm text-muted-foreground">Where do you want to be?</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />

          {/* Main Goals */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border border-secondary/30 hover:border-secondary/60 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center gap-3">
                      <Target className="w-5 h-5 text-secondary" />
                      <div>
                        <h4 className="font-semibold">Main Goal {i}</h4>
                        <p className="text-xs text-muted-foreground">Aligned with vision</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-3">Up to 3 recommended (flexible)</p>
          </div>

          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />

          {/* Monthly Goals */}
          <div className="w-full">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="font-semibold">12 Monthly Goals</span>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-accent/10 border border-accent/30 text-center text-sm font-medium text-foreground hover:bg-accent/20 transition-colors"
                  >
                    M{i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />

          {/* Weekly Goals */}
          <div className="w-full">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <ListTodo className="w-5 h-5 text-chart-3" />
                <span className="font-semibold">Weekly Goals per Month</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-chart-3/10 border border-chart-3/30 text-center text-sm font-medium text-foreground hover:bg-chart-3/20 transition-colors"
                  >
                    Week {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />

          {/* Daily Tasks */}
          <div className="w-full max-w-sm">
            <Card className="border-2 border-chart-5 bg-gradient-to-br from-chart-5/5 to-transparent">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded hover:bg-muted transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-chart-5" />
                      <span className="text-sm text-foreground">Daily Task {i}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
