import { useContext } from 'react';
import { DarkModeContext } from '../contexts/DarkModeContext';

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <footer className={darkMode ? 'footer-dark-theme' : 'footer-light-theme'}>
      <p>Copyright &#169; 2023 Dawid Szymański</p>
    </footer>
  );
};

export default Footer;
