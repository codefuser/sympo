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

const MatrixCircuitBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    class DataStream {
      x: number;
      y: number;
      history: { x: number; y: number }[];
      speed: number;
      maxLength: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.history = [{ x: this.x, y: this.y }];
        this.speed = Math.random() * 3 + 2;
        this.maxLength = Math.floor(Math.random() * 15 + 10);
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -20;
        this.history = [{ x: this.x, y: this.y }];
      }

      update() {
        // Randomly change direction but keep it vertical-ish (Circuit style)
        if (Math.random() > 0.95) {
          this.x += Math.random() > 0.5 ? 30 : -30;
        } else {
          this.y += this.speed;
        }

        this.history.push({ x: this.x, y: this.y });
        if (this.history.length > this.maxLength) {
          this.history.shift();
        }

        if (this.y > height) this.reset();
      }

      draw() {
        if (this.history.length < 2) return;

        ctx!.beginPath();
        ctx!.lineWidth = 1.5;
        // Gradient effect for the tail
        const gradient = ctx!.createLinearGradient(
          this.history[0].x, this.history[0].y,
          this.history[this.history.length - 1].x, this.history[this.history.length - 1].y
        );
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(1, "#00f2ff");
        
        ctx!.strokeStyle = gradient;
        ctx!.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 1; i < this.history.length; i++) {
          ctx!.lineTo(this.history[i].x, this.history[i].y);
        }
        ctx!.stroke();

        // Bright head dot
        const head = this.history[this.history.length - 1];
        ctx!.fillStyle = "#fff";
        ctx!.shadowBlur = 10;
        ctx!.shadowColor = "#00f2ff";
        ctx!.fillRect(head.x - 1, head.y - 1, 3, 3);
        ctx!.shadowBlur = 0;
      }
    }

    let streams = Array.from({ length: 60 }, () => new DataStream());

    const animate = () => {
      ctx!.fillStyle = "rgba(0, 0, 0, 0.2)"; // Trail effect
      ctx!.fillRect(0, 0, width, height);

      streams.forEach((s) => {
        s.update();
        s.draw();
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

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-black" />;
};

export default function HeroSection({ onRegister }: { onRegister?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black font-sans">
      <MatrixCircuitBackground />

      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        
        {/* Header Section */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-white text-3xl md:text-5xl font-black tracking-tight uppercase drop-shadow-lg">
            Thamirabharani Engineering College
          </h2>
          <p className="text-cyan-400 text-[10px] md:text-xs tracking-[0.5em] font-mono mt-2">
            AUTONOMOUS INSTITUTION
          </p>
        </div>

        <p className="text-gray-400 text-[10px] md:text-xs tracking-[0.3em] mb-4 uppercase">
          Organized by the Department of ECE
        </p>

        {/* SPARKTRON - Clean and Impactful */}
        <div className="relative mb-14 group">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black italic tracking-tighter text-white
                         drop-shadow-[0_0_20px_rgba(0,242,255,0.7)] selection:bg-cyan-500">
            SPARKTRON<span className="text-cyan-500">'26</span>
          </h1>
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-2" />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-sm sm:max-w-none justify-center">
          <button
            onClick={onRegister}
            className="px-12 py-4 bg-cyan-500 text-black font-black tracking-widest text-xs hover:scale-105 transition-transform"
          >
            REGISTER NOW
          </button>
          <a
            href="#events"
            className="px-12 py-4 border-2 border-cyan-500 text-cyan-400 font-black tracking-widest text-xs hover:bg-cyan-500/10 transition-colors text-center"
          >
            VIEW EVENTS
          </a>
        </div>

        {/* Stats Section */}
        <div className="mt-20 flex gap-12 md:gap-24 items-center border-t border-white/10 pt-10">
           <div className="text-center">
              <p className="text-white text-4xl md:text-5xl font-black italic">05</p>
              <p className="text-cyan-500/60 text-[10px] tracking-widest uppercase mt-1">Events</p>
           </div>
           <div className="h-12 w-[1px] bg-gray-800" />
           <div className="text-center">
              <p className="text-white text-4xl md:text-5xl font-black italic">₹10K+</p>
              <p className="text-cyan-500/60 text-[10px] tracking-widest uppercase mt-1">Prizes</p>
           </div>
        </div>
      </div>
      
      {/* Edge Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)]" />
    </section>
  );
}