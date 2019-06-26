const refs = {
  themeButton: document.querySelector('button[data-action="theme-switch"]'),
  body: document.querySelector('body'),
  icon: document.querySelector('.toolbar__icon'),
};

const userTheme = localStorage.getItem('theme');

if (userTheme === 'theme-dark') {
  refs.icon.textContent = 'wb_sunny';
  refs.body.classList.add(userTheme);
} else {
  refs.body.classList.add('theme-light');
}

refs.themeButton.addEventListener('click', handleThemeButton);

function handleThemeButton(e) {
  if (refs.body.classList.contains('theme-light')) {
    refs.body.classList.remove('theme-light');
    refs.body.classList.add('theme-dark');
    refs.icon.textContent = 'wb_sunny';
    localStorage.setItem('theme', 'theme-dark');
  } else {
    refs.body.classList.remove('theme-dark');
    refs.body.classList.add('theme-light');
    refs.icon.textContent = 'brightness_3';
    localStorage.setItem('theme', 'theme-light');
  }
}
