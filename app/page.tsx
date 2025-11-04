import { HierarchyFlowchart } from "./components/landing/hierarchy-flowchart";
import { Hero } from "./components/landing/hero";
import { Features } from "./components/landing/features";
import { HowItWorks } from "./components/landing/how-it-works";
import { CallToAction } from "./components/landing/call-to-action";
import { Navbar } from "./components/landing/navbar";
import { Footer } from "./components/landing/footer";
export default function Home() {
  return <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <Navbar />
      <Hero />
      <HierarchyFlowchart />
      <Features/>
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>


}


