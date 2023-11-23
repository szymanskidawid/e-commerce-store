import { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <footer className={`footer-container footer-${darkMode ? 'dark' : 'light'}-theme`}>
      Copyright &#169; 2023 Dawid Szymański
    </footer>
  );
};

export default Footer;
