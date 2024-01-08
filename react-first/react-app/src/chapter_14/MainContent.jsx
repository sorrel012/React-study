import { useContext } from 'react';
import themeContext from './ThemeContext';

function MainContent(props) {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        padding: '1.5rem',
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
      }}
    >
      <p>테마 변경</p>
      <button onClick={toggleTheme}>{props.btnContent}</button>
    </div>
  );
}

export default MainContent;
