import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollTop = document.documentElement.scrollTop;

      const progress = (scrollTop / totalHeight) * 100;

      setScroll(progress);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400
        shadow-[0_0_10px_#00f2ff,0_0_20px_#00f2ff,0_0_30px_#00f2ff]
        transition-transform duration-150 ease-out origin-left"
        style={{ transform: `scaleX(${scroll / 100})` }}
      />
    </div>
  );
}