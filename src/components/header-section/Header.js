import Logo from './Logo';
import MainButton from '../buttons/MainButton';
import CheckoutButton from '../buttons/CheckoutButton';
import LightDarkButton from '../buttons/LightDarkButton';

const Header = ({ toggleCheckout, colorMode, darkMode, basketItems, basketTotal }) => (
  <div>
    <header className={darkMode ? 'header-dark-theme' : 'header-light-theme'}>
      <Logo />
      <nav className="nav-container">
        <MainButton className={'nav-section-products-button'} text={'Products'} />
        <div className="nav-section-basket-components">
          <p className="nav-section-basket-total">{basketTotal} zł</p>
          <CheckoutButton onClick={toggleCheckout} basketItems={basketItems} />
        </div>
        <LightDarkButton onClick={colorMode} />
      </nav>
    </header>
  </div>
);

export default Header;
