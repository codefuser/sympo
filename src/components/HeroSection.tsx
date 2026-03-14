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
    const dpr = window.devicePixelRatio || 1;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
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
        this.speed = Math.random() * 4 + 1;
        this.reset();
      }

      reset() {
        const textElement = document.getElementById("sparktron-title");

        if (textElement) {
          const rect = textElement.getBoundingClientRect();
          const side = Math.floor(Math.random() * 4);
const offset = 10; // spark text outline-kku velila start aagum

switch (side) {
  case 0: // top
    this.x = rect.left + Math.random() * rect.width;
    this.y = rect.top - offset;
    this.initialDir = "UP";
    break;

  case 1: // bottom
    this.x = rect.left + Math.random() * rect.width;
    this.y = rect.bottom + offset;
    this.initialDir = "DOWN";
    break;

  case 2: // left
    this.x = rect.left - offset;
    this.y = rect.top + Math.random() * rect.height;
    this.initialDir = "LEFT";
    break;

  case 3: // right
    this.x = rect.right + offset;
    this.y = rect.top + Math.random() * rect.height;
    this.initialDir = "RIGHT";
    break;
}
        } else {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
        }

        this.path = [{ x: this.x, y: this.y }];
        this.timer = 0;
      }

      update() {
        this.timer++;
        const last = this.path[this.path.length - 1];

        let nextX = last.x;
        let nextY = last.y;

        if (this.timer < 12) {
          if (this.initialDir === "UP") nextY -= this.speed;
          if (this.initialDir === "DOWN") nextY += this.speed;
          if (this.initialDir === "LEFT") nextX -= this.speed;
          if (this.initialDir === "RIGHT") nextX += this.speed;
        } else if (this.timer % 15 === 0) {
          if (Math.random() > 0.5) nextX += Math.random() > 0.5 ? 40 : -40;
          else nextY += Math.random() > 0.5 ? 40 : -40;
        } else {
          nextX += last.x > width / 2 ? this.speed : -this.speed;
          nextY += last.y > height / 2 ? this.speed : -this.speed;
        }

        this.path.push({ x: nextX, y: nextY });

        if (this.path.length > this.maxLen) {
          this.path.shift();
        }

        if (nextX < 0 || nextX > width || nextY < 0 || nextY > height) {
          this.reset();
        }
      }

      draw() {
        if (this.path.length < 2) return;

        ctx.beginPath();
        ctx.strokeStyle = "rgba(0,242,255,0.6)";
        ctx.lineWidth = 1.2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#00f2ff";

        ctx.moveTo(this.path[0].x, this.path[0].y);

        for (let i = 1; i < this.path.length; i++) {
          ctx.lineTo(this.path[i].x, this.path[i].y);
        }

        ctx.stroke();

        const last = this.path[this.path.length - 1];

        ctx.beginPath();
        ctx.arc(last.x, last.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
    }

    setCanvasSize();

    let lines = Array.from(
      { length: window.innerWidth < 768 ? 30 : 60 },
      () => new CircuitLine(),
    );

    const animate = () => {
      // PURE BLACK BACKGROUND
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      lines.forEach((l) => {
        l.update();
        l.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", () => {
      setCanvasSize();
      lines.forEach((l) => l.reset());
    });
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-black" />;
};

export default function HeroSection({
  onRegister,
}: {
  onRegister?: () => void;
}) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-10"
    >
      <ChipCircuitBackground />

      <div className="relative z-10 text-center px-4 w-full max-w-6xl flex flex-col items-center">
        {/* College Header */}
        <div className="mb-6 md:mb-10">
          <h2 className="text-white text-[clamp(1rem,6vw,3rem)] font-black tracking-tight uppercase leading-tight">
            Thamirabharani Engineering College
          </h2>

          <p className="text-cyan-400 text-[clamp(0.6rem,2vw,0.9rem)] tracking-[0.3em] font-mono mt-2">
            [AN AUTONOMOUS INSTITUTION]
          </p>
        </div>

        <div className="mb-4 uppercase text-center">
          <p className="text-gray-400 text-[10px] md:text-xs tracking-[0.25em]">
            Organized by
          </p>
          <p className="text-cyan-400 text-sm md:text-lg font-bold tracking-[0.3em] mt-1">
            Department of
            <span className="text-[1.8em] text-white ml-2 animate-pulse ece-glow drop-shadow-[0_0_12px_rgba(0,242,255,0.9)]">
              ECE
            </span>
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 px-4 md:px-8 py-2 rounded-sm mb-10">
          <p className="text-cyan-400 text-[9px] md:text-sm tracking-[0.3em] font-bold">
            NATIONAL LEVEL TECHNICAL SYMPOSIUM
          </p>
        </div>

        {/* SPARKTRON TITLE */}
        <div id="sparktron-title" className="relative mb-6 md:mb-16">
          <h1 className="text-[clamp(2.2rem,10vw,7rem)] font-black text-white italic tracking-tighter leading-none">
            SPARKTRON
            <span className="text-cyan-500 drop-shadow-[0_0_20px_rgba(0,242,255,0.8)]">
              '26
            </span>
          </h1>

          <div className="absolute -bottom-2 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 w-full max-w-md justify-center">
          <button
            onClick={onRegister}
            className="w-full sm:w-auto px-10 py-4 bg-cyan-500 text-black font-black tracking-widest text-xs rounded-sm hover:scale-105 transition-transform"
          >
            REGISTER NOW
          </button>

          <a
            href="#events"
            className="px-10 py-4 border-2 border-cyan-500 text-cyan-500 font-bold tracking-widest text-xs rounded-sm hover:bg-cyan-500/10 transition-all text-center"
          >
            VIEW EVENTS
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex gap-10 md:gap-20 items-center justify-center">
          <div className="text-center">
            <p className="text-white text-3xl md:text-5xl font-black italic">
              05
            </p>
            <p className="text-gray-500 text-[10px] tracking-widest uppercase mt-1">
              Events
            </p>
          </div>

          <div className="h-12 w-[1px] bg-gray-800" />

          <div className="text-center">
            <p className="text-white text-3xl md:text-5xl font-black italic">
              ₹17K+
            </p>
            <p className="text-gray-500 text-[10px] tracking-widest uppercase mt-1">
              Prizes
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />
    </section>
  );
}
