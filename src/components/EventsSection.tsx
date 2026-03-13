import {
  Code2,
  Cpu,
  Bot,
  Lightbulb,
  FileText,
  HelpCircle,
  Zap,
  Users,
} from "lucide-react";

const events = [
  // {
  //   icon: Code2,
  //   name: "Hackathon",
  //   category: "Technical",
  //   desc: "24-hour coding marathon to build innovative solutions for real-world problems.",
  //   prize: "₹10,000",
  //   team: "2–4 members",
  // },
  // {
  //   icon: Cpu,
  //   name: "Circuit Debugging",
  //   category: "Technical",
  //   desc: "Identify and fix faults in complex electronic circuits within the given time limit.",
  //   prize: "₹5,000",
  //   team: "Individual / Pair",
  // },
  {
    icon: Bot,
    name: "Paper Presentation",
    category: "Technical",
    desc: "Showcase innovative ideas by presenting a technical paper to judges and audience.",
    prize: "₹2,000",
    team: "2–3 members",
  },
  // {
  //   icon: FileText,
  //   name: "Paper Presentation",
  //   category: "Academic",
  //   desc: "Present your research on topics in ECE to a panel of expert judges.",
  //   prize: "₹6,000",
  //   team: "1–2 members",
  // },
  {
    icon: Lightbulb,
    name: "Mind Blitz",
    category: "Technical",
    desc: "testing your IQ level and increase your technical knowledge",
    prize: "₹2,000",
    team: "1 member",
  },
  // {
  //   icon: HelpCircle,
  //   name: "Tech Quiz",
  //   category: "Academic",
  //   desc: "Test your knowledge in electronics, communication, and general engineering concepts.",
  //   prize: "₹4,000",
  //   team: "2 members",
  // },
  {
    icon: Zap,
    name: "Tech Connection",
    category: "Technical",
    desc: "connect the technical puzzles to increase our logical thinking ",
    prize: "₹2,000",
    team: "1 member",
  },
  {
    icon: Users,
    name: "Dum challanger",
    category: "Non-Technical",
    desc: "A fun game where participants act out words without speaking while teammates guess the correct answer.",
    team: "2 members",
  },
  {
    icon: Users,
    name: "Anagram",
    category: "Non-Technical",
    desc: "Participants rearrange scrambled letters to form meaningful words within a given time.",
    team: "1 members",
  },
];

const categoryColor: Record<string, string> = {
  Technical: "text-primary border-primary/30 bg-primary/5",
  // Academic: "text-accent border-accent/30 bg-accent/5",
  "Non-Technical": "text-muted-foreground border-border bg-muted/10",
};

export default function EventsSection() {
  return (
    <section id="events" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-xs text-primary tracking-[0.4em] uppercase mb-3">
            What's Happening
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Events</span> & Competitions
          </h2>
          <div className="section-divider w-24 mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
          {events.map((event) => (
            <div
              key={event.name}
              className="card-glow rounded-xl p-5 flex flex-col gap-5 group "
            >
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <event.icon className="w-5 h-5 text-primary" />
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border font-display font-semibold ${categoryColor[event.category]}`}
                >
                  {event.category}
                </span>
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-foreground mb-1">
                  {event.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {event.desc}
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
                <span className="text-xs text-muted-foreground">
                  {event.team}
                </span>
                <span className="font-display text-sm font-bold gradient-text">
                  {event.prize}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
