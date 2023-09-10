import { useState } from 'react';
import CategoriesDropDown from './CategoriesDropDown';
import ProductCard from './ProductCard';

const ProductGrid = ({ darkMode, data, basket, addToBasket }) => {
  const [isFoodSelected, setIsFoodSelected] = useState(true);
  const [isKitchenSelected, setIsKitchenSelected] = useState(true);
  const [isElectronicsSelected, setIsElectronicsSelected] = useState(true);

  return (
    <main>
      <div className="product-grid-categories">
        <CategoriesDropDown
          isFoodSelected={isFoodSelected}
          isKitchenSelected={isKitchenSelected}
          isElectronicsSelected={isElectronicsSelected}
          setIsFoodSelected={setIsFoodSelected}
          setIsKitchenSelected={setIsKitchenSelected}
          setIsElectronicsSelected={setIsElectronicsSelected}
        />
      </div>
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
                stock={product.stock}
                isInBasket={product.id in basket}
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
