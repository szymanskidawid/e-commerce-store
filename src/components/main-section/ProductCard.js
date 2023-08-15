import ProductButton from "./ProductButton";

// Container with product information and button that adds to the basket.

const ProductCard = () => {
  return (
    <div className='product-card-container'>
      <div className='product-card-name'>
        Product Name
      </div>
      <div className='product-card-picture'>
        <img src="https://picsum.photos/300/125" />
      </div>
      <div className='product-card-bottom'>
        <div className='product-card-price'>
          5,50zł
        </div>
        <ProductButton text='Add to Cart' />
      </div>
    </div>
  );
}

export default ProductCard;