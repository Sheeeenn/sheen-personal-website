const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var isDark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", isDark);
  } catch (e) {}
})();
`;

export function ThemeScript() {
  // Runs before hydration so the correct theme class is set before first paint.
  return <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />;
}
