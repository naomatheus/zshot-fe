import { Button } from "@/components/ui/button"
import { Download, MessageSquare, Code, Cpu } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative bg-card p-8 rounded-2xl border border-border">
              <div className="flex items-center justify-center space-x-4">
                <Code className="h-12 w-12 text-primary" />
                <Cpu className="h-12 w-12 text-secondary" />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Chat & build with
          <br />
          <span className="text-primary">domain-specific</span> models
        </h1>

        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Access specialized code-generating LLMs for C++, KDB, Mojo, shaders, and more. Download models locally or chat
          directly in your browser.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Download className="h-5 w-5 mr-2" />
            Pull Zeroshot Models
          </Button>
          <Button size="lg" variant="outline" className="border-border bg-transparent">
            <MessageSquare className="h-5 w-5 mr-2" />
            Try Chat Interface
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-4">Coming soon for macOS, Windows, and Linux</p>
      </div>
    </section>
  )
}
