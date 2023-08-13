import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import BasketGrid from "./components/BasketGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductGrid />
      <BasketGrid />
      <Footer />
    </div>
  );
}

export default App;
