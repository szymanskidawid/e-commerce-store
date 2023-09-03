import { useEffect, useState } from "react";
import CategoriesDropDown from "./CategoriesDropDown";
import ProductCard from "./ProductCard";

const ProductGrid = ({ darkMode }) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/products');

      const dataJSON = await response.json();

      setData(dataJSON);
    }

    fetchData();
  }, [])

  const [isFoodSelected, setIsFoodSelected] = useState(true);
  const [isKitchenSelected, setIsKitchenSelected] = useState(true);
  const [isElectronicsSelected, setIsElectronicsSelected] = useState(true);

  console.log("////");
  console.log({isFoodSelected});
  console.log({isKitchenSelected});
  console.log({isElectronicsSelected});
  console.log("////");

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
        {data === null ? <div>Loading...</div> :
          data.map(product => {



            return (
              <ProductCard 
                darkMode={darkMode}
                name={product.name}
                price={product.price} 
              />
            )
          })
        }
      </div>
    </main>
  );
}

export default ProductGrid;