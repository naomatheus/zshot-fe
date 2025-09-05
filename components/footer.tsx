export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">Zeroshot</h3>
            <p className="text-sm text-muted-foreground">
              Domain-specific code generation models for professional developers.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-3">Models</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  C++ Expert
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  KDB+ Master
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Mojo GPU
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Shader Wizard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Docs (Coming Soon)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-3">Community(Coming Soon)</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  <a href="mailto:mattk@zeroshot.dev">Contact Us</a>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2025 Zeroshot. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
