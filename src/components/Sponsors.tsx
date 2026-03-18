import React, { useEffect, useRef } from "react";

const Sponsors = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const sponsors = [
    { src: "/sponsors/s2.png", style: "w-56" },
    { src: "/sponsors/s1.png", style: "w-64" },
    { src: "/sponsors/s3.png", style: "w-72" }, // biggest
    // { src: "/sponsors/s4.png", style: "w-60" },
  ];

  useEffect(() => {
    let position = 0;
    const speed = 0.9;

    const animate = () => {
      const track = trackRef.current;
      if (!track) return;

      position -= speed;

      const width = track.scrollWidth / 2;

      if (Math.abs(position) >= width) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section id="sponsors" className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-white text-4xl text-center mb-16">
          Associate <span className="text-cyan-400">Partners</span>
        </h2>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          {/* Fade edges */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10"/>

          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/80 via-black/30 to-transparent z-10"/>

          {/* Moving Track */}
          <div ref={trackRef} className="flex w-max items-center px-20">
            {[...sponsors, ...sponsors].map((item, index) => (
              <div
                key={index}
                className="mx-16 flex items-center justify-center 
                w-64 h-40 overflow-visible" // fixed layout, but allow overflow
              >
                <img
                  src={item.src}
                  alt="sponsor"
                  className={`${item.style} object-contain 
                  transition-all duration-300 
                  hover:scale-[1.2]`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
