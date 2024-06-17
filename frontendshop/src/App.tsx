import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Container from "./Container";
import { ShopProvider } from "./Context/ShopContext";

function App() {
  return (
    <>
      <ShopProvider>
        <Header />
        <Container>
          <ProductList />
        </Container>
      </ShopProvider>
    </>
  );
}

export default App;
