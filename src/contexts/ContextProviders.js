import { DarkModeContext } from './DarkModeContext';
import { BasketContext } from './BasketContext';
import { DataContext } from './DataContext';

const ContextProviders = ({ children, darkMode, setDarkMode, basket, setBasket, allProducts, setAllProducts }) => (
  <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
    <BasketContext.Provider value={{ basket, setBasket }}>
      <DataContext.Provider value={{ allProducts, setAllProducts }}>{children}</DataContext.Provider>
    </BasketContext.Provider>
  </DarkModeContext.Provider>
);

export default ContextProviders;
