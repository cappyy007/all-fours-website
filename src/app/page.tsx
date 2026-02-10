import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Play, Trophy, BookOpen, Users, TrendingUp, Globe, CheckCircle2, Radio } from "lucide-react";
import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo width={150} height={50} className="flex-shrink-0" />
            <nav className="flex items-center gap-6">
              <Link href="/schedule" className="text-sm font-medium hover:text-primary transition-colors">
                Schedule
              </Link>
              <Link href="/score-app" className="text-sm font-medium hover:text-primary transition-colors">
                Score App
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Logo width={300} height={300} className="mb-8" />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            International All Fours Live
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
            Your premier destination for all things All Fours - live streams, tutorials, tournaments, and a thriving community of players worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8">
              Watch Live
            </Button>
            <Link href="/schedule">
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Schedule
              </Button>
            </Link>
            <Link href="/score-app">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Score App
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Experience All Fours like never before with our comprehensive media coverage
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Play className="w-12 h-12 mb-4" />
                <CardTitle>Live Streams</CardTitle>
                <CardDescription>
                  Watch live All Fours matches with expert commentary and real-time analysis
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Trophy className="w-12 h-12 mb-4" />
                <CardTitle>Tournaments</CardTitle>
                <CardDescription>
                  Coverage of major tournaments and competitive events from around the world
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="w-12 h-12 mb-4" />
                <CardTitle>Tutorials</CardTitle>
                <CardDescription>
                  Learn strategies, techniques, and tips from seasoned All Fours players
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-12 h-12 mb-4" />
                <CardTitle>Community</CardTitle>
                <CardDescription>
                  Join a vibrant community of All Fours enthusiasts and share your passion
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="w-12 h-12 mb-4" />
                <CardTitle>Strategy Guides</CardTitle>
                <CardDescription>
                  Deep dives into advanced strategies and gameplay analysis
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Radio className="w-12 h-12 mb-4" />
                <CardTitle>Podcasts</CardTitle>
                <CardDescription>
                  Listen to discussions, interviews, and All Fours talk shows
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Content
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Diverse content to satisfy every All Fours enthusiast
          </p>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <CardTitle>Live Tournament Coverage</CardTitle>
                    <CardDescription className="mt-2">
                      Real-time streaming of competitive matches with professional commentary
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <CardTitle>Player Interviews</CardTitle>
                    <CardDescription className="mt-2">
                      In-depth conversations with top players and legends of the game
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <CardTitle>Educational Series</CardTitle>
                    <CardDescription className="mt-2">
                      Step-by-step tutorials for beginners to advanced players
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <CardTitle>Strategy Breakdowns</CardTitle>
                    <CardDescription className="mt-2">
                      Analysis of key plays and strategic decisions from recent matches
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <CardTitle>Community Events</CardTitle>
                    <CardDescription className="mt-2">
                      Participate in online tournaments, challenges, and community gatherings
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why Choose International All Fours Live?
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            The ultimate All Fours experience for players and fans worldwide
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Expert Commentary</h3>
                  <p className="text-muted-foreground">
                    Professional insight and analysis from experienced All Fours players
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">High-Quality Production</h3>
                  <p className="text-muted-foreground">
                    Crystal clear video and audio for an immersive viewing experience
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Global Community</h3>
                  <p className="text-muted-foreground">
                    Connect with All Fours enthusiasts from around the world
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Regular Content</h3>
                  <p className="text-muted-foreground">
                    Fresh content daily with live streams, videos, and articles
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Interactive Experience</h3>
                  <p className="text-muted-foreground">
                    Engage with content through live chat, polls, and community features
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Free Access</h3>
                  <p className="text-muted-foreground">
                    Most content is free to access, bringing All Fours to everyone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the All Fours Revolution
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with thousands of All Fours players and fans from around the world
          </p>
          <Button size="lg" className="text-lg px-12 py-6">
            Get Started Now
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Free to join • No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            <Logo width={120} height={40} />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/schedule" className="hover:text-foreground transition-colors">
              Schedule
            </Link>
            <span>•</span>
            <Link href="/score-app" className="hover:text-foreground transition-colors">
              Score App
            </Link>
            <span>•</span>
            <p>&copy; 2024 International All Fours Live. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
