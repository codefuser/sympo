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

const ChipCircuitBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width: number;
    let height: number;
    let dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      // High-DPI screens fix
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    class CircuitLine {
      x: number = 0;
      y: number = 0;
      path: { x: number; y: number }[] = [];
      timer: number = 0;
      maxLen: number;
      speed: number;
      initialDir: "UP" | "DOWN" | "LEFT" | "RIGHT" = "UP";

      constructor() {
        this.maxLen = Math.random() * 20 + 10;
        this.speed = Math.random() * 1.5 + 1;
        this.reset();
      }

      reset() {
        const textElement = document.getElementById("sparktron-title");
        if (textElement) {
          const rect = textElement.getBoundingClientRect();
          const side = Math.floor(Math.random() * 4);
          
          // Start from title edges
          switch (side) {
            case 0: this.x = rect.left + Math.random() * rect.width; this.y = rect.top; this.initialDir = "UP"; break;
            case 1: this.x = rect.left + Math.random() * rect.width; this.y = rect.bottom; this.initialDir = "DOWN"; break;
            case 2: this.x = rect.left; this.y = rect.top + Math.random() * rect.height; this.initialDir = "LEFT"; break;
            case 3: this.x = rect.right; this.y = rect.top + Math.random() * rect.height; this.initialDir = "RIGHT"; break;
          }
        } else {
          this.x = width / 2;
          this.y = height / 2;
        }

        this.path = [{ x: this.x, y: this.y }];
        this.timer = 0;
      }

      draw() {
        if (this.path.length < 2) return;
        ctx!.beginPath();
        ctx!.strokeStyle = "rgba(0, 242, 255, 0.6)";
        ctx!.lineWidth = 1;
        ctx!.shadowBlur = 8;
        ctx!.shadowColor = "#00f2ff";

        ctx!.moveTo(this.path[0].x, this.path[0].y);
        for (let i = 1; i < this.path.length; i++) {
          ctx!.lineTo(this.path[i].x, this.path[i].y);
        }
        ctx!.stroke();

        const last = this.path[this.path.length - 1];
        ctx!.beginPath();
        ctx!.arc(last.x, last.y, 1.5, 0, Math.PI * 2);
        ctx!.fillStyle = "#fff";
        ctx!.fill();
        ctx!.shadowBlur = 0;
      }

      update() {
        this.timer++;
        const last = this.path[this.path.length - 1];
        let nextX = last.x;
        let nextY = last.y;

        if (this.timer < 15) {
          if (this.initialDir === "UP") nextY -= this.speed;
          if (this.initialDir === "DOWN") nextY += this.speed;
          if (this.initialDir === "LEFT") nextX -= this.speed;
          if (this.initialDir === "RIGHT") nextX += this.speed;
        } else if (this.timer % 25 === 0) {
          if (Math.random() > 0.5) nextX += (Math.random() > 0.5 ? 40 : -40);
          else nextY += (Math.random() > 0.5 ? 40 : -40);
        } else {
          nextX += (last.x > width / 2 ? this.speed : -this.speed);
          nextY += (last.y > height / 2 ? this.speed : -this.speed);
        }

        this.path.push({ x: nextX, y: nextY });
        if (this.path.length > this.maxLen) this.path.shift();

        if (nextX < -50 || nextX > width + 50 || nextY < -50 || nextY > height + 50) {
          this.reset();
        }
      }
    }

    setCanvasSize();
    // Fewer lines on mobile for performance and clarity
    const lineCount = width < 768 ? 40 : 85;
    let lines = Array.from({ length: lineCount }, () => new CircuitLine());

    const animate = () => {
      ctx!.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx!.fillRect(0, 0, width, height);

      lines.forEach((l) => {
        l.update();
        l.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
      lines.forEach((l) => l.reset());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-black" />;
};

export default function HeroSection({ onRegister }: { onRegister?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
      <ChipCircuitBackground />

      <div className="relative z-10 text-center px-4 w-full max-w-5xl flex flex-col items-center">
        {/* Header Section */}
        <div className="mb-6 md:mb-10 space-y-3">
          <h2 className="text-white text-xl sm:text-3xl md:text-5xl font-black tracking-tight uppercase leading-tight">
            Thamirabharani Engineering College
          </h2>
          <p className="text-cyan-400 text-[10px] md:text-sm tracking-[0.3em] font-mono">
            AUTONOMOUS INSTITUTION
          </p>
        </div>

        <p className="text-gray-400 text-[10px] md:text-xs tracking-[0.2em] mb-4 md:mb-6 uppercase">
          Organized by the Department of ECE
        </p>

        {/* Symposium Label */}
        <div className="bg-white/5 border border-white/10 px-4 md:px-8 py-2 rounded-sm mb-10 md:mb-12">
          <p className="text-cyan-400 text-[8px] md:text-sm tracking-[0.3em] md:tracking-[0.5em] font-bold">
            NATIONAL LEVEL TECHNICAL SYMPOSIUM
          </p>
        </div>

        {/* Main Title */}
        <div id="sparktron-title" className="relative mb-12 md:mb-16 px-2">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white italic tracking-tighter leading-none">
            SPARKTRON<span className="text-cyan-500 drop-shadow-[0_0_15px_rgba(0,242,255,0.7)]">'26</span>
          </h1>
          <div className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 w-full justify-center items-center">
          <button
            onClick={onRegister}
            className="w-full sm:w-auto group relative px-10 md:px-14 py-3 md:py-4 bg-cyan-500 rounded-sm transition-all duration-300 active:scale-95"
          >
            <span className="relative z-10 text-black font-black tracking-widest text-[10px] md:text-xs">
              REGISTER NOW
            </span>
          </button>

          <a
            href="#events"
            className="w-full sm:w-auto px-10 md:px-14 py-3 md:py-4 border-2 border-cyan-500 text-cyan-500 font-bold tracking-widest text-[10px] md:text-xs hover:bg-cyan-500/10 transition-all rounded-sm text-center"
          >
            VIEW EVENTS
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-20 flex gap-8 md:gap-16 items-center">
          <div className="text-center">
            <p className="text-white text-3xl md:text-5xl font-black italic">05</p>
            <p className="text-gray-500 text-[8px] md:text-[10px] tracking-widest uppercase mt-1">Events</p>
          </div>
          <div className="h-12 md:h-16 w-[1px] bg-gray-800" />
          <div className="text-center">
            <p className="text-white text-3xl md:text-5xl font-black italic">₹10K+</p>
            <p className="text-gray-500 text-[8px] md:text-[10px] tracking-widest uppercase mt-1">Prizes</p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />
    </section>
  );
}