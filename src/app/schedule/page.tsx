"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Play, Calendar, Clock, Filter, ChevronDown } from "lucide-react";
import { Logo } from "@/components/logo";

interface StreamEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  duration: string;
  category: string;
  status: "upcoming" | "live" | "completed";
  thumbnail?: string;
}

const mockEvents: StreamEvent[] = [
  {
    id: "1",
    title: "Caribbean Championship Finals",
    description: "Watch the exciting finals of the Caribbean All Fours Championship with expert commentary and analysis.",
    date: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
    duration: "3 hours",
    category: "Tournament",
    status: "upcoming",
  },
  {
    id: "2",
    title: "Beginner's Guide to All Fours",
    description: "Learn the basics of All Fours in this comprehensive tutorial perfect for newcomers.",
    date: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
    duration: "1 hour",
    category: "Tutorial",
    status: "upcoming",
  },
  {
    id: "3",
    title: "Pro Strategy Session",
    description: "Join top players as they break down advanced strategies and gameplay techniques.",
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    duration: "2 hours",
    category: "Strategy",
    status: "upcoming",
  },
  {
    id: "4",
    title: "Weekly Tournament Highlights",
    description: "Recap of the week's best matches and standout performances.",
    date: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
    duration: "1.5 hours",
    category: "Highlights",
    status: "upcoming",
  },
  {
    id: "5",
    title: "Community Game Night",
    description: "Join our community for casual games and fun interactions with fellow All Fours enthusiasts.",
    date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    duration: "2 hours",
    category: "Community",
    status: "upcoming",
  },
  {
    id: "6",
    title: "International Cup Qualifiers",
    description: "Watch teams compete for spots in the prestigious International All Fours Cup.",
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    duration: "4 hours",
    category: "Tournament",
    status: "upcoming",
  },
];

const categories = ["All", "Tournament", "Tutorial", "Strategy", "Highlights", "Community"];

export default function SchedulePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateCountdowns = () => {
      const now = new Date();
      const newTimeLeft: { [key: string]: string } = {};

      mockEvents.forEach((event) => {
        if (event.status === "upcoming") {
          const diff = event.date.getTime() - now.getTime();
          if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            if (days > 0) {
              newTimeLeft[event.id] = `${days}d ${hours}h ${minutes}m`;
            } else if (hours > 0) {
              newTimeLeft[event.id] = `${hours}h ${minutes}m ${seconds}s`;
            } else {
              newTimeLeft[event.id] = `${minutes}m ${seconds}s`;
            }
          } else {
            newTimeLeft[event.id] = "Starting soon!";
          }
        }
      });

      setTimeLeft(newTimeLeft);
    };

    updateCountdowns();
    const interval = setInterval(updateCountdowns, 1000);

    return () => clearInterval(interval);
  }, []);

  const filteredEvents =
    selectedCategory === "All"
      ? mockEvents
      : mockEvents.filter((event) => event.category === selectedCategory);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Logo width={150} height={50} className="flex-shrink-0" />
            </Link>
            <nav className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/schedule" className="text-sm font-medium text-primary">
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
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Live Stream Schedule
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Stay updated with upcoming live streams, tournaments, and events
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Filter className="w-5 h-5 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                        {event.category}
                      </span>
                      {event.status === "live" && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-destructive text-destructive-foreground animate-pulse">
                          LIVE
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{event.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">
                        {event.date.toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">
                        {event.date.toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    {event.status === "upcoming" && timeLeft[event.id] && (
                      <div className="bg-accent/50 rounded-lg p-4">
                        <p className="text-sm font-medium mb-1">Starts in:</p>
                        <p className="text-2xl font-bold text-primary">{timeLeft[event.id]}</p>
                      </div>
                    )}

                    <Button className="w-full" size="lg">
                      <Play className="w-4 h-4 mr-2" />
                      {event.status === "live" ? "Watch Now" : "Set Reminder"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No events found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            <Logo width={120} height={40} />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>•</span>
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
