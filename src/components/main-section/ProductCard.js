import MainButton from "../buttons/MainButton";

const ProductCard = ({ darkMode, name, price }) => {
  return (
    //Ternary operator to change between light and dark mode classes.
    <div className={`product-card-container ${darkMode 
      ? 'product-card-container-dark-theme' 
      : 'product-card-container-light-theme'}`}>
      <div className='product-card-name'>
        {name}
      </div>
      <div className='product-card-picture'>
        <img src="https://picsum.photos/300/125" />
      </div>
      <div className='product-card-bottom'>
        <div className='product-card-price'>
          {price}
        </div>
        <MainButton className={'product-section-add-button'}
        color={'success'} 
        text={'Add to Cart'} />
      </div>
    </div>
  );
}

export default ProductCard;