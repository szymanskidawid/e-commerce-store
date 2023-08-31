import CategoriesDropDown from "./CategoriesDropDown";
import ProductCard from "./ProductCard";

// Container displaying items available to purchase.

const ProductGrid = ({ darkMode }) => {
  return (
    <main>
      <CategoriesDropDown />
      <div className="product-grid-container">
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
        <ProductCard darkMode={darkMode} />
      </div>
    </main>
  );
}

export default ProductGrid;
