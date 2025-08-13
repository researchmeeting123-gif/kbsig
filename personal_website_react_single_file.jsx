import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe, FileText, ArrowRight, Sun, Moon, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Personal Website – Single-file React component
 *
 * How to customize:
 * 1) Update the PROFILE, LINKS, PROJECTS, and POSTS objects below.
 * 2) Replace placeholder images/links with your own.
 * 3) Optional: Hook the Contact button to your email service or form handler.
 */

const PROFILE = {
  name: "Your Name",
  tagline: "Builder • Educator • Researcher",
  headline:
    "I design and build learning tools that make studying feel effortless—and actually stick.",
  location: "Taipei / Toronto",
  bio: `I'm an engineer and founder passionate about edtech, AI-assisted study, and human‑centered design.
  I currently work on Nebulearn—an AI‑native spaced repetition platform—and teach/mentor on learning science topics.`,
  avatar: undefined as string | undefined, // add a /public path or URL if you have one
};

const LINKS = {
  github: "https://github.com/yourname",
  linkedin: "https://www.linkedin.com/in/yourname/",
  email: "mailto:you@example.com",
  website: "https://yourdomain.com",
  resume: "#", // link to your PDF resume
};

const PROJECTS: Array<{
  title: string;
  blurb: string;
  stack: string[];
  href: string;
}> = [
  {
    title: "Nebulearn",
    blurb:
      "AI‑native flashcards with Leitner/FSRS scheduling, smart question generation, and analytics.",
    stack: ["React", "Node", "MongoDB", "AWS"],
    href: "#",
  },
  {
    title: "KB Insights",
    blurb:
      "Qualitative analysis toolkit for positive psychology courses with coding, ENA views, and exports.",
    stack: ["Python", "Pandas", "Streamlit"],
    href: "#",
  },
  {
    title: "Study Chrome Extension",
    blurb:
      "One‑click capture to flashcards from the web with clean parsing and auto‑backlinks.",
    stack: ["TypeScript", "Manifest V3"],
    href: "#",
  },
];

const POSTS: Array<{
  title: string;
  date: string;
  excerpt: string;
  href: string;
}> = [
  {
    title: "407 Days Shipping an AI Study App",
    date: "Aug 2025",
    excerpt:
      "What it really takes to ship thoughtfully in a world obsessed with weekend MVPs.",
    href: "#",
  },
  {
    title: "Leitner, SM‑2, FSRS: A Practical Comparison",
    date: "Jul 2025",
    excerpt:
      "How we chose a session‑based Leitner flow and where algorithmic scheduling truly matters.",
    href: "#",
  },
  {
    title: "Designing Feedback Loops for Learning",
    date: "Jun 2025",
    excerpt:
      "From analytics to reflection prompts—closing the loop between effort and mastery.",
    href: "#",
  },
];

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24 py-16 md:py-24">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">{title}</h2>
      {children}
    </div>
  </section>
);

function ThemeToggle() {
  const [dark, setDark] = React.useState(true);
  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return (
    <Button onClick={() => setDark((d) => !d)} variant="ghost" size="icon" className="rounded-2xl">
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
}

export default function PersonalSite() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-zinc-950/60 border-b border-zinc-200/40 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">{PROFILE.name}</a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a className="hover:opacity-80" href="#about">About</a>
            <a className="hover:opacity-80" href="#projects">Projects</a>
            <a className="hover:opacity-80" href="#writing">Writing</a>
            <a className="hover:opacity-80" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={LINKS.resume} className="hidden md:block">
              <Button className="rounded-2xl">Resume</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-20 dark:opacity-30 shadow-2xl"
               style={{ background:
                 "radial-gradient(circle at 30% 30%, rgba(99,102,241,.3), transparent 40%), radial-gradient(circle at 70% 40%, rgba(168,85,247,.25), transparent 40%)" }} />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-[1.2fr_.8fr] gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 text-xs rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 mb-6">
                <Globe className="h-3.5 w-3.5" />
                <span className="text-zinc-600 dark:text-zinc-300">{PROFILE.tagline}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                {PROFILE.name}
              </h1>
              <p className="text-zinc-600 dark:text-zinc-300 mt-4 text-lg md:text-xl max-w-2xl">
                {PROFILE.headline}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <Badge variant="secondary" className="rounded-xl"><MapPin className="h-3.5 w-3.5 mr-1" /> {PROFILE.location}</Badge>
                <a href={LINKS.github} className="inline-flex items-center gap-2 text-sm hover:opacity-80"><Github className="h-4 w-4" /> GitHub</a>
                <a href={LINKS.linkedin} className="inline-flex items-center gap-2 text-sm hover:opacity-80"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                <a href={LINKS.email} className="inline-flex items-center gap-2 text-sm hover:opacity-80"><Mail className="h-4 w-4" /> Email</a>
              </div>
              <div className="flex gap-3 mt-8">
                <a href="#projects"><Button className="rounded-2xl">See Projects <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
                <a href={LINKS.resume}><Button variant="outline" className="rounded-2xl">Download CV <FileText className="ml-2 h-4 w-4" /></Button></a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
              <div className="aspect-square rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-xl">
                {/* Avatar / Placeholder */}
                {PROFILE.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={PROFILE.avatar} alt="Avatar" className="h-full w-full object-cover" />
                ) : (
                  <svg viewBox="0 0 400 400" className="h-full w-full">
                    <defs>
                      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#6366f1"/>
                        <stop offset="100%" stopColor="#a855f7"/>
                      </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#g)" />
                    <g fill="rgba(255,255,255,0.85)">
                      <circle cx="200" cy="150" r="70" />
                      <rect x="90" y="240" width="220" height="110" rx="55" />
                    </g>
                  </svg>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Section id="about" title="About">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 rounded-3xl">
            <CardHeader>
              <CardTitle>Hi, I'm {PROFILE.name}.</CardTitle>
              <CardDescription>{PROFILE.tagline}</CardDescription>
            </CardHeader>
            <CardContent className="leading-relaxed text-zinc-700 dark:text-zinc-300 whitespace-pre-line">
              {PROFILE.bio}
            </CardContent>
          </Card>
          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>Focus</CardTitle>
              <CardDescription>Things I care about</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {[
                "Spaced repetition",
                "Learning science",
                "Qualitative analysis",
                "Human‑centered design",
                "Agentic AI",
                "Open education",
              ].map((k) => (
                <Badge key={k} variant="secondary" className="rounded-xl">{k}</Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title} className="rounded-3xl hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
                <CardDescription>{p.blurb}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map((s) => (
                    <Badge key={s} variant="outline" className="rounded-xl">{s}</Badge>
                  ))}
                </div>
                <a href={p.href} className="inline-flex items-center text-sm hover:opacity-80">
                  View project <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="writing" title="Writing">
        <div className="grid md:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <Card key={post.title} className="rounded-3xl">
              <CardHeader>
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">{post.excerpt}</p>
                <a href={post.href} className="inline-flex items-center text-sm hover:opacity-80">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <Card className="rounded-3xl">
          <CardContent className="md:flex items-center justify-between p-6 gap-6">
            <div>
              <h3 className="text-xl font-medium">Let's build something meaningful.</h3>
              <p className="text-zinc-700 dark:text-zinc-300 mt-1">Consulting, collaborations, or speaking—I'm open to interesting projects.</p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <a href={LINKS.email}><Button className="rounded-2xl"><Mail className="mr-2 h-4 w-4"/>Email me</Button></a>
              <a href={LINKS.linkedin}><Button variant="outline" className="rounded-2xl"><Linkedin className="mr-2 h-4 w-4"/>Connect</Button></a>
            </div>
          </CardContent>
        </Card>
      </Section>

      <footer className="py-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-3">
            <a href={LINKS.github} className="hover:opacity-80 inline-flex items-center gap-1"><Github className="h-4 w-4"/>GitHub</a>
            <a href={LINKS.linkedin} className="hover:opacity-80 inline-flex items-center gap-1"><Linkedin className="h-4 w-4"/>LinkedIn</a>
            <a href={LINKS.website} className="hover:opacity-80 inline-flex items-center gap-1"><Globe className="h-4 w-4"/>Website</a>
          </div>
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
