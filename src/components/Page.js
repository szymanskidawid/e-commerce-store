import Header from './header-section/Header';
import Footer from './Footer';

const Page = ({ children, basket, totalPrice }) => (
  <>
    <Header basketItemsAmount={Object.keys(basket).length} basketTotalPrice={totalPrice()} />
    {children}
    <Footer />
  </>
);

export default Page;
