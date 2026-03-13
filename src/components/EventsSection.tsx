// import {
//   Code2,
//   Cpu,
//   Bot,
//   Lightbulb,
//   FileText,
//   HelpCircle,
//   Zap,
//   Users,
// } from "lucide-react";

// const events = [
//   // {
//   //   icon: Code2,
//   //   name: "Hackathon",
//   //   category: "Technical",
//   //   desc: "24-hour coding marathon to build innovative solutions for real-world problems.",
//   //   prize: "₹10,000",
//   //   team: "2–4 members",
//   // },
//   // {
//   //   icon: Cpu,
//   //   name: "Circuit Debugging",
//   //   category: "Technical",
//   //   desc: "Identify and fix faults in complex electronic circuits within the given time limit.",
//   //   prize: "₹5,000",
//   //   team: "Individual / Pair",
//   // },
//   {
//     icon: Bot,
//     name: "Paper Presentation",
//     category: "Technical",
//     desc: "Showcase innovative ideas by presenting a technical paper to judges and audience.",
//     prize: "Ramar Kalangiam",
//     team: "2–3 members",
//   },
//   // {
//   //   icon: FileText,
//   //   name: "Paper Presentation",
//   //   category: "Academic",
//   //   desc: "Present your research on topics in ECE to a panel of expert judges.",
//   //   prize: "₹6,000",
//   //   team: "1–2 members",
//   // },
//   {
//     icon: Lightbulb,
//     name: "Mind Blitz",
//     category: "Technical",
//     desc: "Spark your intellect! Battle it out over microprocessors, networking, and digital logic in the ultimate ECE trivia challenge.",
//     prize: "Mrs.S.Selvanandhini",
//     team: "1 member only",
//   },
//   // {
//   //   icon: HelpCircle,
//   //   name: "Tech Quiz",
//   //   category: "Academic",
//   //   desc: "Test your knowledge in electronics, communication, and general engineering concepts.",
//   //   prize: "₹4,000",
//   //   team: "2 members",
//   // },
//   {
//     icon: Zap,
//     name: "Tech Connection",
//     category: "Technical",
//     desc: "connect the technical puzzles to increase our logical thinking ",
//     prize: "Pushpa Jaucline",
//     team: "1 member only",
//   },
//   {
//     icon: Users,
//     name: "Dum challanger",
//     category: "Non-Technical",
//     desc: "A fun game where participants act out words without speaking while teammates guess the correct answer.",
//     team: "2 members",
//   },
//   {
//     icon: Users,
//     name: "Anagram",
//     category: "Non-Technical",
//     desc: "Participants rearrange scrambled letters to form meaningful words within a given time.",
//     team: "1 member only",
//   },
// ];

// const categoryColor: Record<string, string> = {
//   Technical: "text-primary border-primary/30 bg-primary/5",
//   // Academic: "text-accent border-accent/30 bg-accent/5",
//   "Non-Technical": "text-muted-foreground border-border bg-muted/10",
// };

// export default function EventsSection() {
//   return (
//     <section id="events" className="py-24 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="font-display text-xs text-primary tracking-[0.4em] uppercase mb-3">
//             What's Happening
//           </p>
//           <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
//             <span className="gradient-text">Events</span> & Competitions
//           </h2>
//           <div className="section-divider w-24 mx-auto" />
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
//           {events.map((event) => (
//             <div
//               key={event.name}
//               className="card-glow rounded-xl p-5 flex flex-col gap-5 group "
//             >
//               <div className="flex items-start justify-between">
//                 <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                   <event.icon className="w-5 h-5 text-primary" />
//                 </div>
//                 <span
//                   className={`text-xs px-2 py-0.5 rounded-full border font-display font-semibold ${categoryColor[event.category]}`}
//                 >
//                   {event.category}
//                 </span>
//               </div>
//               <div>
//                 <h3 className="font-display text-sm font-bold text-foreground mb-1">
//                   {event.name}
//                 </h3>
//                 <p className="text-xs text-muted-foreground leading-relaxed">
//                   {event.desc}
//                 </p>
//               </div>
//               <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
//                 <span className="text-xs text-muted-foreground">
//                   {event.team}
//                 </span>
//                 <span className="font-display text-xs  gradient-text">
//                   {event.prize}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// -----------------------------------------------------------
"use client";

import React, { useState } from "react";
import { Bot, Lightbulb, Zap, Users } from "lucide-react";

const events = [
  {
    icon: Bot,
    name: "Paper Presentation",
    category: "Technical",
    desc: "Showcase innovative ideas by presenting a technical paper to judges and audience.",
    coordinator: {
      name: "Mr. R. Ramar Kalangiam",
      designation: "A/P of ECE",
    },
    team: "2–3 members",
    rules: [
      "Maximum 3 members per team.",
      "Presentation should be in standard IEEE format.",
      "7 minutes for presentation and 3 minutes for Q&A.",
    ],
  },
  {
    icon: Lightbulb,
    name: "Mind Blitz",
    category: "Technical",
    desc: "Spark your intellect! Battle it out over microprocessors, networking, and digital logic in the ultimate ECE trivia challenge.",
    coordinator: {
      name: "Ms. S. Selvanandhini",
      designation: "A/P of ECE",
    },
    team: "1 member only",
    rules: [
      "Individual participation only.",
      "Mobile phones are strictly prohibited.",
      "Decisions of the judges will be final.",
    ],
  },
  {
    icon: Zap,
    name: "Tech Connection",
    category: "Technical",
    desc: "Decode the visual clues! Connect the images to guess the correct technical terms and showcase your lateral thinking",
    coordinator: {
      name: "Ms. J. Pushpa Jaucline",
      designation: "A/P of ECE",
    },
    team: "1 member only",
    rules: [
      "Individual event.",
      "Complete the puzzle within the given time limit.",
      "Points awarded based on speed and accuracy.",
    ],
  },
  {
    icon: Users,
    name: "Dumb challanger",
    category: "Non-Technical",
    desc: "A fun game where participants act out words without speaking while teammates guess the correct answer.",
    coordinator: {
      name: "Mr. A. Harivelayutham",
      designation: "A/P of ECE",
    },
    team: "2 members",
    rules: [
      "Strictly no speaking or lip-syncing while acting.",
      "Time limit per word is 60 seconds.",
      "Direct pointing to objects is not allowed.",
    ],
  },
  {
    icon: Users,
    name: "Anagram",
    category: "Non-Technical",
    desc: "Participants rearrange scrambled letters to form meaningful words within a given time.",
    coordinator: {
      name: "Ms. V. P. Veera Sivagami Pandi",
      designation: "A/P of ECE",
    },
    team: "1 member only",
    rules: [
      "Words must be found in standard English dictionaries.",
      "Proper nouns are not accepted.",
      "Highest score wins in case of a tie.",
    ],
  },
];

const categoryColor: Record<string, string> = {
  Technical: "text-primary border-primary/30 bg-primary/10",
  "Non-Technical": "text-muted-foreground border-white/20 bg-white/5",
};

function EventCard({ event }: { event: any }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      // Hover செய்யும் போது வெளியே Glowing Effect வர hover:shadow-[0_0_25px_#00e5ff66] சேர்க்கப்பட்டுள்ளது
      className="w-full sm:w-[calc(50%-1.125rem)] lg:w-[calc(33.333%-1.5rem)] rounded-xl p-5 flex flex-col gap-5 group transition-all duration-300 hover:scale-105 hover:-translate-y-1 min-h-[260px] relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_#00e5ff55] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex items-start justify-between relative z-10">
        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors shadow-inner">
          <event.icon className="w-5 h-5 text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
        </div>
        <div className="flex flex-col items-end gap-2">
          <span
            className={`text-xs px-2 py-0.5 rounded-full border font-display font-semibold backdrop-blur-sm ${categoryColor[event.category]}`}
          >
            {event.category}
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col relative z-10">
        <h3 className="font-display text-sm font-bold text-foreground mb-2 drop-shadow-md">
          {event.name}
        </h3>

        {isClicked ? (
          // Rules காட்டும் பகுதி
          <div className="flex flex-col flex-1 animate-in fade-in zoom-in-95 duration-300">
            <div className="text-xs text-muted-foreground space-y-2 flex-1">
              <p className="font-semibold text-primary">Rules & Guidelines:</p>
              <ul className="list-disc pl-4 space-y-1">
                {event.rules.map((rule: string, idx: number) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>
            
            {/* Rules-ஐ மூட பட்டன் */}
            <div className="flex items-end justify-between mt-auto pt-4 border-t border-white/10">
              <div className="flex flex-col items-start gap-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsClicked(false);
                  }}
                  className="text-[11px] font-bold text-red-400 hover:text-red-300 transition-colors p-0 outline-none"
                >
                  Close Rules ✕
                </button>
                <span className="text-xs text-muted-foreground font-medium">
                  {event.team}
                </span>
              </div>
            </div>
          </div>
        ) : (
          // சாதாரண கார்டு விவரங்கள்
          <div className="flex flex-col flex-1 animate-in fade-in zoom-in-95 duration-300">
            <p className="text-xs text-muted-foreground leading-relaxed">
              {event.desc}
            </p>
            <div className="flex items-end justify-between mt-auto pt-4 border-t border-white/10">
              
              {/* Rules பட்டன் Members-க்கு மேலே (Outline இல்லாமல்) */}
              <div className="flex flex-col items-start gap-1">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsClicked(true);
                  }}
                  className="text-[11px] font-bold text-primary hover:opacity-80 transition-opacity p-0 outline-none flex items-center gap-1 cursor-pointer"
                >
                  Rules <span className="text-[9px]">▶</span>
                </button>
                <span className="text-xs text-muted-foreground font-medium">
                  {event.team}
                </span>
              </div>

              {event.coordinator && (
                <div className="flex flex-col items-end text-right">
                  <span className="font-display text-xs gradient-text font-semibold">
                    {event.coordinator.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground/80 mt-0.5">
                    {event.coordinator.designation}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function EventsSection() {
  return (
    <section id="events" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="font-display text-xs text-primary tracking-[0.4em] uppercase mb-3 drop-shadow-sm">
            What's Happening
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-md">
            <span className="gradient-text">Events</span> & Competitions
          </h2>
          <div className="section-divider w-24 mx-auto opacity-50" />
        </div>

        <div className="flex flex-wrap justify-center gap-9">
          {events.map((event) => (
            <EventCard key={event.name} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}