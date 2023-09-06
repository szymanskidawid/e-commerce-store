import { useEffect, useState } from 'react';
import CategoriesDropDown from './CategoriesDropDown';
import ProductCard from './ProductCard';

const ProductGrid = ({ darkMode, addToBasket }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/products');

      const dataJSON = await response.json();

      setData(dataJSON);
    };

    fetchData();
  }, []);

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
