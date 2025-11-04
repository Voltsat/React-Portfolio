import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // ✅ Cek ulang setelah render agar window sudah tersedia
    const checkIfTouch = () => {
      const isTouchDevice =
        typeof window !== "undefined" &&
        ("ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0);

      if (isTouchDevice || window.innerWidth < 1024) {
        setIsTouch(true);
        return true;
      }
      return false;
    };

    // Jika touchscreen, stop eksekusi
    if (checkIfTouch()) return;

    let mouseX = 0,
      mouseY = 0,
      ballX = 0,
      ballY = 0;
    let animationFrame;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      ballX += (mouseX - ballX) * 0.15; // makin kecil makin delay
      ballY += (mouseY - ballY) * 0.15;
      setPos({ x: ballX, y: ballY });
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    animationFrame = requestAnimationFrame(animate);

    const handleHover = (e) => {
      const tag = e.target.tagName;
      setHover(tag === "A" || tag === "BUTTON");
    };
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleHover);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // 🚫 Jika touchscreen → jangan render cursor
  if (isTouch) return null;

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-150 ease-out ${
        hover ? "scale-150 opacity-70" : "scale-100 opacity-100"
      }`}
      style={{
        transform: `translate3d(${pos.x - 20}px, ${pos.y - 20}px, 0)`,
      }}
    >
      <div className="w-8 h-8 rounded-full border-[2px] border-white/80 bg-white/5 backdrop-blur-[2px]" />
    </div>
  );
}
