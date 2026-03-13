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
"use client";
import React, { useEffect, useRef } from "react";

// --- Background Animation Component ---
const CircuitBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    class Trace {
      x: number;
      y: number;
      dx: number;
      dy: number;
      length: number;
      currentLength: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Circuit style: only 90-degree movements
        const directions = [[2, 0], [-2, 0], [0, 2], [0, -2]];
        const dir = directions[Math.floor(Math.random() * directions.length)];
        this.dx = dir[0];
        this.dy = dir[1];
        this.length = Math.random() * 100 + 50;
        this.currentLength = 0;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 210, 255, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00d2ff";
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.dx * (this.currentLength / 2), this.y + this.dy * (this.currentLength / 2));
        ctx.stroke();

        // Start node (Small square like a chip pin)
        ctx.fillStyle = "#00d2ff";
        ctx.fillRect(this.x - 1.5, this.y - 1.5, 3, 3);
      }

      update() {
        this.currentLength++;
        if (this.currentLength > this.length) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.currentLength = 0;
          const directions = [[2, 0], [-2, 0], [0, 2], [0, -2]];
          const dir = directions[Math.floor(Math.random() * directions.length)];
          this.dx = dir[0];
          this.dy = dir[1];
        }
      }
    }

    const traces = Array.from({ length: 50 }, () => new Trace());

    const animate = () => {
      ctx.fillStyle = "rgba(0, 8, 20, 0.15)"; // Trail effect
      ctx.fillRect(0, 0, width, height);

      traces.forEach((t) => {
        t.update();
        t.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

// --- Main Hero Section ---
interface HeroSectionProps {
  onRegister?: () => void;
}

export default function HeroSection({ onRegister }: HeroSectionProps) {
  return (
    <section id="home" className="hero-container relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Code-based Electronic Background */}
      <CircuitBackground />

      {/* Grid Overlay for depth */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#00d2ff 1px, transparent 1px), linear-gradient(90deg, #00d2ff 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="font-display text-xs tracking-[0.4em] text-cyan-400 mb-6 uppercase font-bold">
          Department of Electronics & Communication Engineering
        </p>
        
        <h1 className="font-display text-5xl md:text-8xl font-black tracking-tight mb-2 glow-text text-white">
          SPARKTRON'26
        </h1>
        
        <p className="font-display text-xl md:text-3xl font-semibold gradient-text mb-6 tracking-widest">
          2026
        </p>
        
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
          A National Level Technical Symposium <br />
          <span className="text-white font-semibold">Thamirabharani Engineering College</span>
        </p>

        <div className="flex items-center justify-center gap-8 text-sm text-gray-400 mb-12">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_10px_#00d2ff]" />
            March 24, 2026
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_#2563eb]" />
            Department of ECE
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={onRegister}
            className="group relative px-10 py-4 bg-cyan-600 text-white font-bold tracking-widest text-sm transition-all hover:scale-105"
          >
            <span className="relative z-10">REGISTER NOW</span>
            <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-20 group-hover:opacity-50 transition-opacity" />
          </button>
          
          <a
            href="#events"
            className="px-10 py-4 border border-cyan-500/50 text-cyan-400 font-bold tracking-widest text-sm hover:bg-cyan-500/10 transition-all"
          >
            VIEW EVENTS
          </a>
        </div>

        {/* STATS */}
        <div className="mt-24 grid grid-cols-2 gap-16 max-w-sm mx-auto border-t border-white/10 pt-8">
          <div className="text-center">
            <p className="text-3xl font-black text-white glow-text">5</p>
            <p className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">Events</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-black text-white glow-text">₹10K+</p>
            <p className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">Cash Prize</p>
          </div>
        </div>
      </div>

      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000814] to-transparent" />
    </section>
  );
}