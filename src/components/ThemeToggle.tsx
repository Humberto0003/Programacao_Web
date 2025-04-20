'use client';

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="px-4 py-2 border rounded transition"
    >
      {darkMode ? "☀️ Tema Claro" : "🌙 Tema Escuro"}
    </button>
  );
}
