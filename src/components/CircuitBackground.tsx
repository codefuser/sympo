"use client";
import React, { useEffect, useRef } from "react";

export default function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const lines: Line[] = [];
    const maxLines = 40; // Number of simultaneous circuit branches

    class Line {
      x: number;
      y: number;
      speedX: number;
      speedY: number;
      history: { x: number; y: number }[];
      maxLength: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // ECE related logic: Lines move mostly in 90 or 45 degree angles
        const angles = [0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2, Math.PI / 4];
        const angle = angles[Math.floor(Math.random() * angles.length)];
        this.speedX = Math.cos(angle) * 2;
        this.speedY = Math.sin(angle) * 2;
        this.history = [{ x: this.x, y: this.y }];
        this.maxLength = Math.random() * 150 + 50;
        this.color = `hsl(195, 100%, 50%)`; // Neon Blue
      }

      draw() {
        ctx!.beginPath();
        ctx!.strokeStyle = this.color;
        ctx!.lineWidth = 1.5;
        ctx!.lineCap = "round";
        ctx!.shadowBlur = 8;
        ctx!.shadowColor = "#00d2ff";
        
        ctx!.moveTo(this.history[0].x, this.history[0].y);
        for (let i = 1; i < this.history.length; i++) {
          ctx!.lineTo(this.history[i].x, this.history[i].y);
        }
        ctx!.stroke();

        // Draw a "node" (dot) at the start
        ctx!.beginPath();
        ctx!.arc(this.history[0].x, this.history[0].y, 2, 0, Math.PI * 2);
        ctx!.fillStyle = "#fff";
        ctx!.fill();
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.history.push({ x: this.x, y: this.y });

        if (this.history.length > 50 || Math.random() > 0.98) {
            // Randomly change direction to look like a circuit
            const angles = [0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2];
            const angle = angles[Math.floor(Math.random() * angles.length)];
            this.speedX = Math.cos(angle) * 2;
            this.speedY = Math.sin(angle) * 2;
        }

        if (this.history.length > this.maxLength) {
          this.history.shift();
        }

        // Reset if off-screen
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.x = Math.random() * width;
          this.y = Math.random() * height;
          this.history = [{ x: this.x, y: this.y }];
        }
      }
    }

    for (let i = 0; i < maxLines; i++) {
      lines.push(new Line());
    }

    function animate() {
      ctx!.fillStyle = "rgba(0, 8, 20, 0.1)"; // Trails effect
      ctx!.fillRect(0, 0, width, height);
      lines.forEach((line) => {
        line.update();
        line.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-[#000814]" />;
}