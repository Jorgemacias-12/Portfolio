export function isDarkThemePreferred(): boolean {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function isLightThemePreferred(): boolean {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
}
