import { useState } from 'react';
import CategoriesDropDown from './CategoriesDropDown';
import ProductCard from './ProductCard';
import { useContext } from 'react';
import { BasketContext } from '../../contexts/BasketContext';
import { DataContext } from '../../contexts/DataContext';

const ProductGrid = () => {
  const { basket, setBasket } = useContext(BasketContext);
  const { data } = useContext(DataContext);

  const [dropDownItems, setDropDownItems] = useState({
    food: true,
    kitchen: true,
    electronics: true,
  });

  const addToBasket = (product) => {
    const newBasket = { ...basket };

    if (newBasket[product.id] >= 1) {
      setBasket({ ...newBasket, [product.id]: newBasket[product.id] + 1 });
    } else {
      setBasket({ ...newBasket, [product.id]: 1 });
    }
  };

  return (
    <main className="product-section-container">
      <div className="product-grid-categories">
        <CategoriesDropDown dropDownItems={dropDownItems} setDropDownItems={setDropDownItems} />
      </div>
      <section className="product-grid-container">
        {data === null ? (
          <div>Loading...</div>
        ) : (
          data
            .filter((product) => {
              return (
                (product.category === 'Food' && dropDownItems.food) ||
                (product.category === 'Kitchen' && dropDownItems.kitchen) ||
                (product.category === 'Electronics' && dropDownItems.electronics)
              );
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
      </section>
    </main>
  );
};

export default ProductGrid;
