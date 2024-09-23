"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./ThemeToggle.module.scss";
import DesktopComputer from "../images/DesktopComputer";
import DarkMode from "../images/DarkMode";
import LightMode from "../images/LightMode";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <ul className={`themeMode ${styles.themeOptions}`}>
      <li
        onClick={() => setTheme("system")}
        className={theme === "system" ? styles.active : ""}
      >
        <DesktopComputer />
      </li>
      <li
        onClick={() => setTheme("light")}
        className={theme === "light" ? styles.active : ""}
      >
        <LightMode />
      </li>
      <li
        onClick={() => setTheme("dark")}
        className={theme === "dark" ? styles.active : ""}
      >
        <DarkMode />
      </li>
    </ul>
  );
}
