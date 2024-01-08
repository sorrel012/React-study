import { useCallback, useState } from 'react';
import ThemeContext from './ThemeContext';
import MainContent from './MainContent';

function Theme(props) {
  const [theme, setTheme] = useState('light');
  const [btnContent, setBtnContent] = useState('다크모드로');

  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark');
      setBtnContent('라이트 모드로');
    } else if (theme === 'dark') {
      setTheme('light');
      setBtnContent('다크 모드로');
    }
  }, [theme, btnContent]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContent btnContent={btnContent} />
    </ThemeContext.Provider>
  );
}

export default Theme;
