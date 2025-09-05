import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Code2, Download } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Zeroshot</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#models"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Models
              </a>
              <a
                href="#docs"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Docs (Coming Soon)
              </a>
              <a
                href="#community"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Community(Coming Soon)
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search models...Coming Soon" className="pl-10 w-64 bg-input border-border" />
            </div>
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
