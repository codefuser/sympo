// import heroBg from "@/assets/hero-bg.jpg";

// interface HeroSectionProps {
//   onRegister?: () => void;
// }

// export default function HeroSection({ onRegister }: HeroSectionProps) {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${heroBg})` }}
//       />
//       <div className="absolute inset-0 bg-background/30" />
//       {/* Grid overlay */}
//       <div
//         className="absolute inset-0 opacity-10"
//         style={{
//           backgroundImage:
//             "linear-gradient(hsl(195 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(195 100% 50% / 0.3) 1px, transparent 1px)",
//           backgroundSize: "60px 60px",
//         }}
//       />

//       <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
//         <p className="font-display text-xs tracking-[0.4em] text-primary mb-4 uppercase">
//           Department of Electronics & Communication Engineering
//         </p>
//         <h1 className="font-display text-5xl md:text-8xl font-black tracking-tight mb-2 glow-text text-primary">
//           SPARKTRON'26
//         </h1>
//         <p className="font-display text-xl md:text-3xl font-semibold gradient-text mb-2 tracking-widest">
//           2026
//         </p>
//         <p className="text-muted-foreground text-lg md:text-xl mb-3">
//           A National Level Technical Symposium — Thamirabharani Engineering College
//         </p>
//         <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-10">
//           <span className="flex items-center gap-2">
//             <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
//             March 24, 2026
//           </span>
//           <span className="flex items-center gap-2">
//             <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
//             Department of ECE
//           </span>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button
//             onClick={onRegister}
//             className="inline-flex items-center justify-center px-8 py-3 rounded font-display font-bold text-sm tracking-widest text-primary-foreground glow-primary transition-all hover:scale-105"
//             style={{ background: "var(--gradient-primary)" }}
//           >
//             REGISTER NOW
//           </button>
//           <a
//             href="#events"
//             className="inline-flex items-center justify-center px-8 py-3 rounded font-display font-bold text-sm tracking-widest text-primary border border-primary/50 hover:border-primary hover:bg-primary/10 transition-all"
//           >
//             VIEW EVENTS
//           </a>
//         </div>

//         <div className="mt-16 grid grid-cols-2 gap-8 max-w-md mx-auto">
//           {[
//             { value: "5", label: "Events" },
//             // { value: "100+", label: "Participants" },
//             { value: "₹10K+", label: "Cash Prize" },
//           ].map((stat) => (
//             <div key={stat.label} className="text-center">
//               <p className="font-display text-2xl font-black gradient-text">{stat.value}</p>
//               <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">{stat.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// ----------------------------------------------
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onRegister?: () => void;
}

export default function HeroSection({ onRegister }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000814]">
      
      {/* 1. Base Image Background (Darkened for better contrast) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 scale-110"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* 2. Deep Blue Overlay to blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000814]/60 to-[#000814]" />

      {/* 3. MOVING GRID ANIMATION (The Electronics Feel) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20 animate-grid"
          style={{
            backgroundImage: `
              linear-gradient(hsl(195 100% 50% / 0.3) 1px, transparent 1px), 
              linear-gradient(90deg, hsl(195 100% 50% / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            height: "200%", // Extra height for smooth infinite scroll
          }}
        />
      </div>

      {/* 4. MAIN CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="font-display text-xs tracking-[0.4em] text-cyan-400 mb-4 uppercase font-bold">
          Department of Electronics & Communication Engineering
        </p>
        
        <h1 className="font-display text-5xl md:text-8xl font-black tracking-tight mb-2 glow-text text-white">
          SPARKTRON'26
        </h1>
        
        <p className="font-display text-xl md:text-3xl font-semibold gradient-text mb-4 tracking-widest">
          2026
        </p>
        
        <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          A National Level Technical Symposium — <span className="text-white font-medium">Thamirabharani Engineering College</span>
        </p>

        <div className="flex items-center justify-center gap-6 text-sm text-gray-400 mb-10">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            March 24, 2026
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Department of ECE
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRegister}
            className="inline-flex items-center justify-center px-10 py-4 rounded-sm font-display font-bold text-sm tracking-widest text-white bg-cyan-600 shadow-[0_0_20px_rgba(8,145,178,0.5)] transition-all hover:scale-105 hover:bg-cyan-500"
          >
            REGISTER NOW
          </button>
          
          <a
            href="#events"
            className="inline-flex items-center justify-center px-10 py-4 rounded-sm font-display font-bold text-sm tracking-widest text-cyan-400 border border-cyan-400/50 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all"
          >
            VIEW EVENTS
          </a>
        </div>

        {/* STATS SECTION */}
        <div className="mt-20 grid grid-cols-2 gap-12 max-w-md mx-auto">
          {[
            { value: "5", label: "Events" },
            { value: "₹10K+", label: "Cash Prize" },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <p className="font-display text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </p>
              <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-2 font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Add a subtle vignette shadow on the edges */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]" />
    </section>
  );
}