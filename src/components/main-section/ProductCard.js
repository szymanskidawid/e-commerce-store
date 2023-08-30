import MainButton from "../buttons/MainButton";

// Container with product information and button that adds to the basket.

const ProductCard = ({ darkMode }) => {
  return (
    //Tertiary operator to change between light and dark mode classes.
    <div className={darkMode 
    ? 'product-card-container product-card-container-dark-theme' 
    : 'product-card-container product-card-container-light-theme'}>
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
        <MainButton className={'product-section-add-button'}
        color={'success'} 
        text={'Add to Cart'} />
      </div>
    </div>
  );
}

export default ProductCard;
