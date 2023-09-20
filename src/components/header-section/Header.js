import Logo from './Logo';
import MainButton from '../buttons/MainButton';
import CheckoutButton from '../buttons/CheckoutButton';
import LightDarkButton from '../buttons/LightDarkButton';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/DarkModeContext';

const Header = ({ basketItemsAmount, basketTotalPrice }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <header className={`header-container ${darkMode ? 'header-dark-theme' : 'header-light-theme'}`}>
      <Logo />
      <nav className="nav-container">
        <div className="nav-products-button-container">
          <Link className="nav-section-link" to="/products">
            <MainButton className={'nav-section-products-button'} text={'Products'} />
          </Link>
        </div>
        <div className="nav-section-basket-components">
          <p className="nav-section-basket-total">{basketTotalPrice} zł</p>
          <Link className="nav-section-link" to="/basket">
            <CheckoutButton basketItemsAmount={basketItemsAmount} />
          </Link>
        </div>
        <div className="nav-theme-button-container">
          <LightDarkButton onClick={() => setDarkMode(!darkMode)} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
