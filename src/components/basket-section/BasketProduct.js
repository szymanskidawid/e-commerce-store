import RemoveButton from "../buttons/RemoveButton";

const BasketProduct = () => {
  return (
    <div className='basket-product-container'>
      <div className='basket-product-picture'>
        <img src="https://picsum.photos/150/40" />
      </div>
      <div className='basket-product-info'>
        <div className="basket-product-name">
          Product Name
        </div>
        <div className="basket-product-quantity">
          1
        </div>
        <div className="basket-product-price">
          5.55zł
        </div>
      </div>
      <div className='basket-product-remove-container'>
        <RemoveButton />
      </div>
    </div>
  );
}

export default BasketProduct;
