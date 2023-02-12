"use client";

import { MdLightMode as LightIcon } from "react-icons/md";
import { BsFillMoonFill as DarkIcon } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <LightIcon
            className="transition duration-200 text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <DarkIcon
            className="transition duration-200 text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}
