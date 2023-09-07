import { useState } from 'react';
import CategoriesDropDown from './CategoriesDropDown';
import ProductCard from './ProductCard';

const ProductGrid = ({ darkMode, data, addToBasket }) => {
  const [isFoodSelected, setIsFoodSelected] = useState(true);
  const [isKitchenSelected, setIsKitchenSelected] = useState(true);
  const [isElectronicsSelected, setIsElectronicsSelected] = useState(true);

  return (
    <main>
      <CategoriesDropDown
        isFoodSelected={isFoodSelected}
        isKitchenSelected={isKitchenSelected}
        isElectronicsSelected={isElectronicsSelected}
        setIsFoodSelected={setIsFoodSelected}
        setIsKitchenSelected={setIsKitchenSelected}
        setIsElectronicsSelected={setIsElectronicsSelected}
      />
      <div className="product-grid-container">
        {data === null ? (
          <div>Loading...</div>
        ) : (
          data
            .filter((product) => {
              if (
                (product.category === 'Food' && isFoodSelected) ||
                (product.category === 'Kitchen' && isKitchenSelected) ||
                (product.category === 'Electronics' && isElectronicsSelected)
              ) {
                return true;
              }
              return false;
            })
            .map((product) => (
              <ProductCard
                darkMode={darkMode}
                key={product.id}
                name={product.name}
                price={product.price}
                addToBasket={() => {
                  addToBasket(product);
                }}
              />
            ))
        )}
      </div>
    </main>
  );
};

export default ProductGrid;
