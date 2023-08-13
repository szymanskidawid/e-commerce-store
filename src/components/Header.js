import NavButton from "./NavButton";
import CheckoutButton from "./CheckoutButton";

const Header = () => {
  return (
    <div>
      <header className="header-container">
        Header
        <nav className="nav-container">
          <NavButton text="Products"/>
          <NavButton text="Products" />
          <CheckoutButton text="Checkout"/>
        </nav>
      </header>
    </div>
  );
}

export default Header;
