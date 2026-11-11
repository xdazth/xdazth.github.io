(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const icon = button.querySelector('.theme-icon');
  const label = button.querySelector('.theme-label');

  let savedTheme = null;
  try { savedTheme = localStorage.getItem('tokhir-theme'); } catch (_) {}
  const initialTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function setTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    icon.textContent = dark ? '☀' : '☾';
    label.textContent = dark ? 'Light mode' : 'Dark mode';
    button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
    document.querySelector('meta[name="theme-color"]').content = dark ? '#0d1525' : '#f5f8ff';
  }

  setTheme(initialTheme);
  button.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    try { localStorage.setItem('tokhir-theme', nextTheme); } catch (_) {}
  });
})();
