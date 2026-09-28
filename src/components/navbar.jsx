import { useState, useEffect, useMemo } from "react";
import CardNav from "./reactbits/CardNav";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "-20% 0px -50% 0px",
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const items = useMemo(
    () => [
      {
        label: "Navigate",
        bgColor: "#3730a3",
        textColor: "#fff",
        links: [
          { label: "Home", href: "#home", ariaLabel: "Go to Home section" },
          { label: "About", href: "#about", ariaLabel: "Go to About section" },
        ],
      },
      {
        label: "Work",
        bgColor: "#4338ca",
        textColor: "#fff",
        links: [
          { label: "Projects", href: "#project", ariaLabel: "Go to Projects section" },
          { label: "Skills", href: "#skills", ariaLabel: "Go to Skills section" },
        ],
      },
      {
        label: "Connect",
        bgColor: "#312e81",
        textColor: "#fff",
        links: [
          { label: "Contact", href: "#contact", ariaLabel: "Go to Contact section" },
          { label: "Email me", href: "mailto:dhabitmuhammadfaqih@gmail.com", ariaLabel: "Send me an email" },
        ],
      },
    ],
    []
  );

  return (
    <CardNav
      brand={<><span className="text-indigo-400">D</span>habit</>}
      items={items}
      activeHref={`#${active}`}
      menuColor="#fff"
      ctaHref={`${import.meta.env.BASE_URL}cv/cv.pdf`}
      ctaLabel="Download CV"
    />
  );
}