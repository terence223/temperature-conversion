import React from 'react';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import ReactDOM from 'react-dom/client';
import { Theme } from 'typescript/Theme';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

const themes = {
  [Theme.LIGHT]: `${process.env.PUBLIC_URL}/light-theme.css`,
  [Theme.DARK]: `${process.env.PUBLIC_URL}/dark-theme.css`,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const defaultTheme = localStorage.getItem('theme') || Theme.LIGHT;

root.render(
  <React.StrictMode>
    <ThemeSwitcherProvider themeMap={themes} defaultTheme={defaultTheme}>
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
