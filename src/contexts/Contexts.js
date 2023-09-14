import { DarkModeContext } from './contexts/DarkModeContext';
import { BasketContext } from './contexts/BasketContext';
import { DataContext } from './contexts/DataContext';

const Contexts = ({ children, darkMode, setDarkMode, basket, setBasket, data, setData }) => (
  <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
    <BasketContext.Provider value={{ basket, setBasket }}>
      <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>
    </BasketContext.Provider>
  </DarkModeContext.Provider>
);

export default Contexts;
