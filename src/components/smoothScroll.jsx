import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    let scroll = 0;
    let current = 0;
    const ease = 0.9;

    const update = () => {
      current += (scroll - current) * ease;
      window.scrollTo(0, current);
      requestAnimationFrame(update);
    };

    const onScroll = () => {
      scroll = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);
    update();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}