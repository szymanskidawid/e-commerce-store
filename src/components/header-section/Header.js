import Logo from "./Logo";
import NavButton from "./NavButton";
import CheckoutButton from "./CheckoutButton";
import LightDarkButton from "./LightDarkButton";

// Header component containing logo and buttons.

const Header = ({toggleCheckout}) => {
  return (
    <div>
      <header className='header-container'>
        <Logo />
        <nav className='nav-container'>
          <NavButton text='Products' />
          <CheckoutButton onClick={toggleCheckout}/>
          <LightDarkButton />
        </nav>
      </header>
    </div>
  );
}

export default Header;
