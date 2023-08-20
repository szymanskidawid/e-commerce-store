import Logo from "./Logo";
import MainButton from "../buttons/MainButton";
import CheckoutButton from "../buttons/CheckoutButton";
import LightDarkButton from "../buttons/LightDarkButton";

// Header component containing logo and buttons.

const Header = ({ toggleCheckout, colorMode, darkMode }) => {
  return (
    <div>
      <header className={darkMode 
      ? 'header-dark-theme' 
      : 'header-light-theme'}>
        <Logo />
        <nav className='nav-container'>
          <MainButton className={"nav-section-products-button"}
          text={'Products'}/>
          <CheckoutButton onClick={toggleCheckout}/>
          <LightDarkButton onClick={colorMode}/>
        </nav>
      </header>
    </div>
  );
}

export default Header;
