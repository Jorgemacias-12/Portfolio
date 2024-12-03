import { Switch } from "./Switch";
import { $theme } from "@/stores";

import { LightMode, DarkMode } from "@mui/icons-material";

export const ThemeSwitcher = () => {
  const onThemeChange = (state: boolean) => {
    $theme.set($theme.get() === "light" ? "dark" : "light");
  };

  return (
    <Switch
      defaultState={$theme.get() === "light"}
      icons={[<DarkMode fontSize="small" />, <LightMode fontSize="small" />]}
      title="Theme switcher light/dark"
      onClick={onThemeChange}
    />
  );
};
