import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, MessageSquare, Star, Users } from "lucide-react"

const models = [
  {
    name: "cpp-expert",
    title: "C++ Expert",
    description: "Specialized in modern C++ development, STL, and performance optimization",
    size: "7B",
    downloads: "400K",
    rating: 4.8,
    tags: ["C++", "STL", "Performance"],
    color: "bg-blue-500",
  },
  {
    name: "kdb-master",
    title: "KDB+ Master",
    description: "Expert in KDB+ database queries, K constructs, and time-series awareness",
    size: "13B",
    downloads: "3K",
    rating: 4.9,
    tags: ["KDB+", "Q Language", "Time Series"],
    color: "bg-green-500",
  },
  {
    name: "mojo-nvidia",
    title: "Mojo for NVIDIA GPU",
    description: "Optimized for NVIDIA GPU programming with CUDA-interface integration awareness",
    size: "7B",
    downloads: "200K",
    rating: 4.7,
    tags: ["Mojo", "NVIDIA", "CUDA"],
    color: "bg-emerald-500",
  },
  {
    name: "shader-wizard",
    title: "C++ Shader Wizard",
    description: "Specialized in GLSL, HLSL, and graphics programming with C++",
    size: "7B",
    downloads: "5K",
    rating: 4.6,
    tags: ["Shaders", "GLSL", "Graphics"],
    color: "bg-purple-500",
  },
  {
    name: "mojo-amd",
    title: "Mojo for AMD GPU",
    description: "Optimized for AMD GPU programming and ROCm ecosystem",
    size: "7B",
    downloads: "150K",
    rating: 4.5,
    tags: ["Mojo", "AMD", "ROCm"],
    color: "bg-red-500",
  },
  {
    name: "product-engineer",
    title: "Product Engineer",
    description: "Model with special context trained for product-aware engineering practices",
    size: "13B",
    downloads: "500K",
    rating: 4.9,
    tags: ["Full Stack", "Product", "Engineering"],
    color: "bg-orange-500",
  },
  {
    name: "q-expert",
    title: "Q Expert",
    description: "Specialized in Q interface for KDB+ databases",
    size: "7B",
    downloads: "20K",
    rating: 4.4,
    tags: ["Q", "KDB", "Time Series"],
    color: "bg-cyan-500",
  },
]

export function ModelGrid() {
  return (
    <section id="models" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Domain-Specific Models</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of specialized code-generating models, each trained on domain-specific datasets
            for optimal performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {models.map((model) => (
            <Card key={model.name} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${model.color}`}></div>
                    <div>
                      <CardTitle className="text-lg text-card-foreground">{model.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {model.size}
                        </Badge>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Star className="h-3 w-3 fill-current text-yellow-500" />
                          <span>{model.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm text-muted-foreground mt-2">{model.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {model.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{model.downloads} downloads</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    <Download className="h-4 w-4 mr-1" />
                    Pull
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-border bg-transparent">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
