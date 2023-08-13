import Logo from "./Logo";
import NavButton from "./NavButton";
import CheckoutButton from "./CheckoutButton";

const Header = () => {
  return (
    <div>
      <header className='header-container'>
        <Logo />
        <nav className='nav-container'>
          <NavButton text='Products' />
          <CheckoutButton />
        </nav>
      </header>
    </div>
  );
}

export default Header;
