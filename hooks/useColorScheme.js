// useColorScheme.js
import { useState, useEffect } from 'react';

export const useColorScheme = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setTheme(mediaQuery.matches ? 'dark' : 'light');

        const handler = (e) => setTheme(e.matches ? 'dark' : 'light');
        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return theme;
};
