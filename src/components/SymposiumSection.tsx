// import { Zap, Trophy, Globe, Target } from "lucide-react";

// export default function SymposiumSection() {
//   return (
//     <section id="symposium" className="py-24 px-4 relative overflow-hidden">
//       {/* Background accent */}
//       <div className="absolute top-0 left-0 right-0 h-px section-divider" />
//       <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <p className="font-display text-xs text-primary tracking-[0.4em] uppercase mb-3">
//             The Event
//           </p>
//           <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
//             About <span className="gradient-text">SPARKTRON'26</span>
//           </h2>
//           <div className="section-divider w-24 mx-auto" />
//         </div>

//         <div className="grid md:grid-cols-1 gap-12 items-center mb-16">
//           <div>
//             <p className="text-muted-foreground leading-relaxed  mb-6">
//               {/* text-lg */}
//               SPARKTRON’26 is a National Level Technical Symposium organized by
//               the Department of Electronics and Communication Engineering,
//               Thamirabharani Engineering College. The event brings together
//               students from various colleges to explore emerging technologies,
//               share innovative ideas, and demonstrate their technical knowledge
//               in the field of electronics and communication engineering.
//             </p>
//             <p className="text-muted-foreground leading-relaxed mb-6">
//               The symposium features exciting competitions such as Paper
//               Presentation, Mind Blitz, and Technical Connection, along with
//               engaging non-technical events like Dumb Challenger and Anagram.
//               SPARKTRON’26 provides a platform for students to enhance their
//               technical skills, encourage innovation, and connect with fellow
//               aspiring engineers from different institutions.
//             </p>
//             {/* <div className="flex flex-wrap gap-3">
//               {[
//                 "VLSI Design",
//                 "Embedded Systems",
//                 "IoT",
//                 "Robotics",
//                 "AI & ML",
//                 "RF Comm",
//               ].map((tag) => (
//                 <span
//                   key={tag}
//                   className="px-3 py-1 rounded-full text-xs font-display font-semibold text-primary border border-primary/30 bg-primary/5 tracking-wide"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div> */}
//           </div>

//           <div className="grid sd:grid-cols-2 grid-cols-4 gap-6">
//             {[
//               {
//                 icon: Zap,
//                 title: "Theme",
//                 desc: "Innovations Beyond Boundaries",
//               },
//               {
//                 icon: Trophy,
//                 title: "Prize Pool",
//                 desc: "₹50,000 in cash prizes",
//               },
//               {
//                 icon: Globe,
//                 title: "Participants",
//                 desc: "500+ from 50+ colleges",
//               },
//               { 
//                 icon: Target, title: "Edition",
//                  desc: "16th Annual Symposium" 
//               },
//             ].map((item) => (
//               <div key={item.title} className="card-glow rounded-xl p-5">
//                 <item.icon className="w-6 h-6 text-accent mb-3" />
//                 <p className="font-display text-sm font-bold text-foreground mb-1">
//                   {item.title}
//                 </p>
//                 <p className="text-xs text-muted-foreground leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Timeline */}
//         <div className="card-glow rounded-2xl p-8">
//           <h3 className="font-display text-xl font-bold text-center mb-8 gradient-text tracking-wide">
//             EVENT SCHEDULE — March 24, 2026
//           </h3>
//           <div className="grid md:grid-cols-2 gap-6">
//             {[
//               {
//                 time: "Morning Session",
//                 events: [
//                   "9:00 AM – Registration & Check-in",
//                   "9:30 AM – Inauguration Ceremony",
//                   "10:30 AM – Paper Presentation",
//                   "11:30 AM – Mind Blitz",
//                   "12:00 PM – Technical Connection",
//                 ],
//               },
//               {
//                 time: "Afternoon Session",
//                 events: [
//                   "1:00 PM – Lunch Time",
//                   "2:00 PM – Dum Challanger",
//                   "2:30 PM – Anagram",
//                   "3:00 PM – Prize Distribution",
//                   "4:00 PM – End Event",
//                 ],
//               },
//             ].map((session) => (
//               <div key={session.time}>
//                 <p className="font-display text-xs tracking-widest text-primary uppercase mb-4">
//                   {session.time}
//                 </p>
//                 <ul className="space-y-3">
//                   {session.events.map((ev) => (
//                     <li
//                       key={ev}
//                       className="flex items-start gap-3 text-sm text-muted-foreground"
//                     >
//                       <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
//                       {ev}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// ----------------------------------------------------------------------------------------------------------

import { Lightbulb, Milestone } from "lucide-react";

export default function SymposiumSection() {
  return (
    <section id="symposium" className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-display text-xs text-primary tracking-[0.4em] uppercase mb-3">
            The Event
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="gradient-text">SPARKTRON'26</span>
          </h2>
          <div className="section-divider w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-1 gap-12 items-center mb-16">
          <div>
            <p className="text-muted-foreground leading-relaxed  mb-6">
              SPARKTRON’26 is a National Level Technical Symposium organized by
              the Department of Electronics and Communication Engineering,
              Thamirabharani Engineering College. The event brings together
              students from various colleges to explore emerging technologies,
              share innovative ideas, and demonstrate their technical knowledge
              in the field of electronics and communication engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The symposium features exciting competitions such as Paper
              Presentation, Mind Blitz, and Technical Connection, along with
              engaging non-technical events like Dumb Challenger and Anagram.
              SPARKTRON’26 provides a platform for students to enhance their
              technical skills, encourage innovation, and connect with fellow
              aspiring engineers from different institutions.
            </p>
          </div>

          {/* Cards Centered - Changed to 2 columns and centered using max-w-xl and mx-auto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto w-full">
            {[
              {
                icon: Lightbulb,
                title: "Theme",
                desc: "Innovations Beyond Boundaries",
              },
              {
                icon: Milestone,
                title: "Edition",
                desc: "16th Annual Symposium",
              },
            ].map((item) => (
              <div key={item.title} className="card-glow rounded-xl p-5">
                <item.icon className="w-6 h-6 text-accent mb-3" />
                <p className="font-display text-sm font-bold text-foreground mb-1">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="card-glow rounded-2xl p-8">
          <h3 className="font-display text-xl font-bold text-center mb-8 gradient-text tracking-wide">
            EVENT SCHEDULE — March 24, 2026
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                time: "Morning Session",
                events: [
                  "9:00 AM – Registration & Check-in",
                  "9:30 AM – Inauguration Ceremony",
                  "10:30 AM – Paper Presentation",
                  "11:30 AM – Mind Blitz",
                  "12:00 PM – Technical Connection",
                ],
              },
              {
                time: "Afternoon Session",
                events: [
                  "1:00 PM – Lunch Time",
                  "2:00 PM – Dum Challanger",
                  "2:30 PM – Anagram",
                  "3:00 PM – Prize Distribution",
                ],
              },
            ].map((session) => (
              <div key={session.time}>
                <p className="font-display text-xs tracking-widest text-primary uppercase mb-4">
                  {session.time}
                </p>
                <ul className="space-y-3">
                  {session.events.map((ev) => (
                    <li
                      key={ev}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {ev}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}