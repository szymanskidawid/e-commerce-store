import { useState } from 'react';
import CategoriesDropDown from './CategoriesDropDown';
import ProductCard from './ProductCard';
import { useContext } from 'react';
import { BasketContext } from '../../contexts/BasketContext';
import { DataContext } from '../../contexts/DataContext';

const ProductGrid = ({ addToBasket }) => {
  const { basket } = useContext(BasketContext);
  const { data } = useContext(DataContext);

  const [dropDownItems, setDropDownItems] = useState({
    food: true,
    kitchen: true,
    electronics: true,
  });

  return (
    <main>
      <div className="product-grid-categories">
        <CategoriesDropDown dropDownItems={dropDownItems} setDropDownItems={setDropDownItems} />
      </div>
      <div className="product-grid-container">
        {data === null ? (
          <div>Loading...</div>
        ) : (
          data
            .filter((product) => {
              if (
                (product.category === 'Food' && dropDownItems.food) ||
                (product.category === 'Kitchen' && dropDownItems.kitchen) ||
                (product.category === 'Electronics' && dropDownItems.electronics)
              ) {
                return true;
              }
              return false;
            })
            .map((product) => (
              <ProductCard
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
