import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Leer del localStorage al inicio
    const savedMode = localStorage.getItem('darkMode');
    // Usar la preferencia del sistema si no hay nada guardado
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedMode ? JSON.parse(savedMode) : prefersDark;
  });

  useEffect(() => {
    // Guardar en localStorage cada vez que cambie el estado
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));

    // Aplicar la clase 'dark' al elemento raíz (html)
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return [isDarkMode, toggleDarkMode];
};