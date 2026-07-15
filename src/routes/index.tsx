import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Welcome — Get Started" },
      { name: "description", content: "A clean, fast starting point for your next idea." },
      { property: "og:title", content: "Welcome — Get Started" },
      { property: "og:description", content: "A clean, fast starting point for your next idea." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-secondary p-3">
          <Sparkles className="h-6 w-6 text-primary" aria-hidden="true" />
        </div>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Your next idea starts here
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          A simple, modern foundation to build on. No clutter, no noise — just a clean starting point ready for what you create next.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/">
              Get started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#features">Learn more</a>
          </Button>
        </div>
      </section>

      <section id="features" className="border-t bg-muted/50 px-4 py-20">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Zap className="h-5 w-5" aria-hidden="true" />}
            title="Fast by default"
            description="Built on a modern stack so your pages load quickly and feel snappy."
          />
          <FeatureCard
            icon={<Shield className="h-5 w-5" aria-hidden="true" />}
            title="Type-safe"
            description="Strong typing from end to end, so refactors are easier and bugs are fewer."
          />
          <FeatureCard
            icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
            title="Ready to style"
            description="A semantic design system means you can customize without fighting the framework."
          />
        </div>
      </section>

      <footer className="border-t px-4 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Your project name. Built with care.
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-colors hover:bg-accent">
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary/10 p-2 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
