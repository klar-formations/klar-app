"use client";

import { useEffect } from "react";

const GROW_SELECTOR = "a, button, .course-card, .why-card, .mod-row, input, textarea";

export default function CustomCursor() {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      return;
    }

    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    const handleMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.classList.add("active");
    };
    const handleLeave = () => cursor.classList.remove("active");
    const handleOver = (e: MouseEvent) => {
      const target = e.target as Element;
      cursor.classList.toggle("grow", !!target.closest?.(GROW_SELECTOR));
    };

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseover", handleOver);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseover", handleOver);
      cursor.remove();
    };
  }, []);

  return null;
}
