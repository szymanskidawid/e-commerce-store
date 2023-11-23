import { useState } from 'react';
import CategoriesDropDown from './CategoriesDropDown';
import ProductCard from './ProductCard';
import { useContext } from 'react';
import { BasketContext } from '../../contexts/BasketContext';
import { DataContext } from '../../contexts/DataContext';
import MainButton from '../buttons/MainButton';

const ProductGrid = () => {
  const { basket, setBasket } = useContext(BasketContext);
  const { allProducts, setAllProducts } = useContext(DataContext);

  const [dropDownItems, setDropDownItems] = useState({
    clothes: true,
    drink: true,
    electronics: true,
    food: true,
    kitchen: true,
  });

  const addToBasket = (product) => {
    const newBasket = { ...basket };

    setBasket({ ...newBasket, [product._id]: newBasket[product._id] >= 1 ? newBasket[product._id] + 1 : 1 });
  };

  const restockProducts = async () => {
    let newData = [];

    try {
      setAllProducts(null);

      const newDataRes = await fetch(`https://e-commerce-store-backend.onrender.com/restock`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      newData = await newDataRes.json();
    } finally {
      setAllProducts(newData);
    }
  };

  return (
    <main className="product-section-container">
      <div className="product-grid-top-buttons">
        <div className="product-grid-categories">
          <CategoriesDropDown dropDownItems={dropDownItems} setDropDownItems={setDropDownItems} />
        </div>
        <MainButton
          className={'products-section-restock-button'}
          color={'secondary'}
          text={'Restock All Products'}
          onClick={restockProducts}
        />
      </div>
      <section className="product-grid-container">
        {allProducts === null ? (
          <div>Loading...</div>
        ) : (
          allProducts
            .filter((product) => {
              return (
                (product.category === 'Clothes' && dropDownItems.clothes) ||
                (product.category === 'Drink' && dropDownItems.drink) ||
                (product.category === 'Electronics' && dropDownItems.electronics) ||
                (product.category === 'Food' && dropDownItems.food) ||
                (product.category === 'Kitchen' && dropDownItems.kitchen)
              );
            })
            .map((product) => (
              <ProductCard
                key={product._id}
                name={product.name}
                price={product.price}
                stock={product.stock}
                isInBasket={product._id in basket}
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
