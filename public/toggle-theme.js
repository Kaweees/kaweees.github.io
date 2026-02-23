const primaryColorScheme = ''; // "light" | "dark"

function getPreferTheme() {
  // get theme data from local storage (user's explicit choice)
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) return currentTheme;

  // return primary color scheme if it is set (site default)
  if (primaryColorScheme) return primaryColorScheme;

  // return user device's prefer color scheme (system fallback)
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Use existing theme value from inline script if available, otherwise detect
let themeValue = window.theme?.themeValue ?? getPreferTheme();

function setPreference() {
  localStorage.setItem('theme', themeValue);
  reflectPreference();
}

function reflectPreference() {
  document.firstElementChild?.setAttribute('data-theme', themeValue);

  document.querySelector('#theme-btn')?.setAttribute('aria-label', themeValue);

  // Get a reference to the body element
  const body = document.body;

  // Check if the body element exists before using getComputedStyle
  if (body) {
    // Get the computed styles for the body element
    const computedStyles = window.getComputedStyle(body);

    // Get the background color property
    const bgColor = computedStyles.backgroundColor;

    // Set the background color in <meta theme-color ... />
    document.querySelector("meta[name='theme-color']")?.setAttribute('content', bgColor);
  }
}

// Update the global theme API
if (window.theme) {
  window.theme.setPreference = setPreference;
  window.theme.reflectPreference = reflectPreference;
} else {
  window.theme = {
    themeValue,
    setPreference,
    reflectPreference,
    getTheme: () => themeValue,
    setTheme: (val) => {
      themeValue = val;
    },
  };
}

// Ensure theme is reflected (in case body wasn't ready when inline script ran)
reflectPreference();

function setThemeFeature() {
  // set on load so screen readers can get the latest value on the button
  reflectPreference();

  // now this script can find and listen for clicks on the control
  document.querySelector('#theme-btn')?.addEventListener('click', () => {
    themeValue = themeValue === 'light' ? 'dark' : 'light';
    window.theme?.setTheme(themeValue);
    setPreference();
  });
}

// astro:page-load fires on initial load AND after view transition navigations
// Use it to attach the click handler (DOM is ready at this point)
document.addEventListener('astro:page-load', setThemeFeature);

// astro:after-swap fires during SPA navigations BEFORE the new page is visible
// Use it to reflect theme on the new document to prevent flash of wrong theme
document.addEventListener('astro:after-swap', reflectPreference);

// Set theme-color value before page transition
// to avoid navigation bar color flickering in Android dark mode
document.addEventListener('astro:before-swap', (event) => {
  const bgColor = document.querySelector("meta[name='theme-color']")?.getAttribute('content');

  if (bgColor) {
    event.newDocument.querySelector("meta[name='theme-color']")?.setAttribute('content', bgColor);
  }

  // Apply theme to the new document before swap to prevent flash
  event.newDocument.firstElementChild?.setAttribute('data-theme', themeValue);
});

// sync with system changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches: isDark }) => {
    themeValue = isDark ? 'dark' : 'light';
    window.theme?.setTheme(themeValue);
    setPreference();
  });
