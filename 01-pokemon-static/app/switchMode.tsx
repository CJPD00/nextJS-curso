"use client";
import { Switch } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
const SwitchMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Switch
        color="default"
        isSelected={theme === "dark"}
        onValueChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      ></Switch>
    </div>
  );
};

export default SwitchMode;
