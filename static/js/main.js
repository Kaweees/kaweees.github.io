document.addEventListener('DOMContentLoaded', ready, false);

const THEME_PREF_STORAGE_KEY = "theme-preference";
const THEME_TO_ICON_CLASS = {
  'dark': 'feather-moon',
  'light':'feather-sun'
};
let toggleIcon = '';
let darkThemeCss = '';

const HEADING_TO_TOC_CLASS = {
  'H1': 'level-1',
  'H2': 'level-2',
  'H3': 'level-3',
  'H4': 'level-4'
}

function ready() {
  feather.replace({ 'stroke-width': 1, width: 26, height: 26 });
  setThemeByUserPref();

  if (document.querySelector('main#content > .container') !== null &&
    document.querySelector('main#content > .container').classList.contains('post')) {
    if (document.getElementById('TableOfContents') !== null) {
      fixTocItemsIndent();
      addSmoothScroll();
      createScrollSpy();
    } else {
      document.querySelector('main#content > .container.post').style.display = "block";
    }
  }

  // Elements to inject
  const svgsToInject = document.querySelectorAll('img.svg-inject');
  // Do the injection
  SVGInjector(svgsToInject);

  document.getElementById('hamburger-menu-toggle').addEventListener('click', () => {
    this.innerHTML = feather.icons['menu'].toSvg();
    document.getElementById('navbar').classList.toggle('navbar-mobile');
  })
}

function fixTocItemsIndent() {
  document.querySelectorAll('#TableOfContents a').forEach($tocItem => {
    const itemId = $tocItem.getAttribute("href").substring(1)
    $tocItem.classList.add(HEADING_TO_TOC_CLASS[document.getElementById(itemId).tagName]);
  });
}

function addSmoothScroll() {
  document.querySelectorAll('#toc a').forEach($anchor => {
    $anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById(this.getAttribute('href').substring(1)).scrollIntoView({
        behavior: 'smooth',
        block: 'start' //scroll to top of the target element
      });
    });
  });
}

function createScrollSpy() {
  var elements = document.querySelectorAll('#toc a');
  document.addEventListener('scroll', function () {
    elements.forEach(function (element) {
      const boundingRect = document.getElementById(element.getAttribute('href').substring(1)).getBoundingClientRect();
      if (boundingRect.top <= 55 && boundingRect.bottom >= 0) {
        elements.forEach(function (elem) {
          elem.classList.remove('active');
        });
        element.classList.add('active');
      }
    });
  });
}

function setThemeByUserPref() {
  darkThemeCss = document.getElementById("dark-theme");
  const savedTheme = localStorage.getItem(THEME_PREF_STORAGE_KEY) || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark': 'light');
  const darkThemeToggles = document.querySelectorAll('.dark-theme-toggle');
  setTheme(savedTheme, darkThemeToggles);
  darkThemeToggles.forEach(el => el.addEventListener('click', (event) => {
    toggleIcon = event.currentTarget.querySelector("a svg.feather");
    if (toggleIcon.classList[1] === THEME_TO_ICON_CLASS.dark) {
      setTheme('light', [event.currentTarget]);
    } else if (toggleIcon.classList[1] === THEME_TO_ICON_CLASS.light) {
      setTheme('dark', [event.currentTarget]);
    }
  }));
}

function setTheme(themeToSet, targets) {
  localStorage.setItem(THEME_PREF_STORAGE_KEY, themeToSet);
  darkThemeCss.disabled = themeToSet === 'light';
  targets.forEach((target) => {
    target.querySelector('a').innerHTML = feather.icons[THEME_TO_ICON_CLASS[themeToSet].split('-')[1]].toSvg();
  });
}