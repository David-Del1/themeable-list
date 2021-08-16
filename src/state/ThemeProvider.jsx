import React, { useContext, useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');


  const toggleTheme = () => {
    const page = document.getElementById('root');
    if(theme === 'light') {
      setTheme('dark');
      page.style.backgroundColor = 'black';
      page.style.color = 'white';
    }
    else {

      setTheme('light');
      page.style.backgroundColor = 'white';
      page.style.color = 'black';
    }
    
    return theme;
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );

};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);

  return theme;
};


export const useToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return toggleTheme;
};
