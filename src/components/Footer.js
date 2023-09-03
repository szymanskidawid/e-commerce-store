const Footer = ({ darkMode }) => (
  <footer className={darkMode ? 'footer-dark-theme' : 'footer-light-theme'}>
    <p>Copyright &#169; 2023 Dawid Szymański</p>
  </footer>
);

export default Footer;
