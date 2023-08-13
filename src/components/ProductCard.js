import ProductButton from "./ProductButton";

const ProductCard = () => {
  return (
    <div className='product-card-container'>
      <div className='product-card-name'>
        Product Name
      </div>
      <div className='product-card-picture'>
        Picture
      </div>
      <div className='product-card-bottom'>
        <div className='product-card-price'>
          Price
        </div>
        <ProductButton text='Add to Cart' />
      </div>
    </div>
  );
}

export default ProductCard;
