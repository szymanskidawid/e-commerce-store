import Logo from "./Logo";
import MainButton from "../buttons/MainButton";
import CheckoutButton from "../buttons/CheckoutButton";
import LightDarkButton from "../buttons/LightDarkButton";

// Header component containing logo and buttons.

const Header = ({toggleCheckout}) => {
  return (
    <div>
      <header className='header-container'>
        <Logo />
        <nav className='nav-container'>
          <MainButton className={"nav-section-products-button"}
          text={'Products'}/>
          <CheckoutButton onClick={toggleCheckout}/>
          <LightDarkButton />
        </nav>
      </header>
    </div>
  );
}

export default Header;
