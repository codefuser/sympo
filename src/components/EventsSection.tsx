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
//     desc: "testing your IQ level and increase your technical knowledge",
//     prize: "Selvanandhini",
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

// Events டேட்டாவில் rules மற்றும் coordinator விவரங்களை சேர்த்துள்ளேன்
const events = [
  {
    icon: Bot,
    name: "Paper Presentation",
    category: "Technical",
    desc: "Showcase innovative ideas by presenting a technical paper to judges and audience.",
    coordinator: {
      name: "Mr. S. Ramar Kalangiam",
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
    desc: "Testing your IQ level and increase your technical knowledge.",
    coordinator: {
      name: "Ms. Selvanandhini",
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
    desc: "Connect the technical puzzles to increase our logical thinking.",
    coordinator: {
      name: "Ms. Pushpa Jaucline",
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
    name: "Dum challanger",
    category: "Non-Technical",
    desc: "A fun game where participants act out words without speaking while teammates guess the correct answer.",
    coordinator: {
      name: "Event Coordinator", // தேவைப்பட்டால் பெயரை மாற்றிக் கொள்ளுங்கள்
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
      name: "Event Coordinator", // தேவைப்பட்டால் பெயரை மாற்றிக் கொள்ளுங்கள்
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
  Technical: "text-primary border-primary/30 bg-primary/5",
  "Non-Technical": "text-muted-foreground border-border bg-muted/10",
};

// ஒவ்வொரு கார்டுக்கும் தனி Component (Hover & Click State க்காக)
function EventCard({ event }: { event: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Hover செய்தாலோ அல்லது Button-ஐ click செய்தாலோ Rules காட்டப்படும்
  const showRules = isHovered || isClicked;

  return (
    <div
      className="w-full sm:w-[calc(50%-1.125rem)] lg:w-[calc(33.333%-1.5rem)] card-glow rounded-xl p-5 flex flex-col gap-5 group transition-all duration-300 hover:scale-105 min-h-[260px] relative bg-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsClicked(false);
      }}
    >
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <event.icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex flex-col items-end gap-2">
          <span
            className={`text-xs px-2 py-0.5 rounded-full border font-display font-semibold ${categoryColor[event.category]}`}
          >
            {event.category}
          </span>
          {/* Rules Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsClicked(!isClicked);
            }}
            className="text-[10px] px-2 py-1 rounded border border-primary/50 text-primary hover:bg-primary/10 transition-colors cursor-pointer z-10"
          >
            {showRules ? "Close Rules" : "Rules"}
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <h3 className="font-display text-sm font-bold text-foreground mb-2">
          {event.name}
        </h3>

        {showRules ? (
          // Rules மட்டும் காட்டும் பகுதி
          <div className="text-xs text-muted-foreground space-y-2 animate-in fade-in duration-300">
            <p className="font-semibold text-primary">Rules & Guidelines:</p>
            <ul className="list-disc pl-4 space-y-1">
              {event.rules.map((rule: string, idx: number) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>
        ) : (
          // சாதாரண கார்டு விவரங்கள்
          <div className="flex flex-col flex-1 animate-in fade-in duration-300">
            <p className="text-xs text-muted-foreground leading-relaxed">
              {event.desc}
            </p>
            <div className="flex items-end justify-between mt-auto pt-4 border-t border-border/50">
              <span className="text-xs text-muted-foreground">
                {event.team}
              </span>
              {event.coordinator && (
                <div className="flex flex-col items-end text-right">
                  <span className="font-display text-xs gradient-text font-semibold">
                    {event.coordinator.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground mt-0.5">
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

        {/* Flex wrap மூலம் கடைசி வரிசை தானாகவே நடுவில் (center) வந்துவிடும் */}
        <div className="flex flex-wrap justify-center gap-9">
          {events.map((event) => (
            <EventCard key={event.name} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}