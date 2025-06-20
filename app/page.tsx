import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Ethan
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/70 mx-auto rounded-full"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Welcome to my digital space where ideas come to life
            </p>

            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="/projects">
                View My Projects
              </Link>
            </Button>
          </div>

          {/* About Section */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
                About Me
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                I am a product builder fascinated in the intersection of{" "}
                <span className="text-primary font-medium">data</span>,{" "}
                <span className="text-primary font-medium">technology</span>,{" "}
                <span className="text-primary font-medium">psychology</span> and{" "}
                <span className="text-primary font-medium">education</span>.
              </p>
              
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📊</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">Data</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">💻</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">Technology</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">Psychology</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">Education</p>
                </div>
              </div>
            </div>
          </div>

          {/* Optional: Add some breathing room at the bottom */}
          <div className="h-16"></div>
        </div>
      </div>
    </div>
  )
}
