import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Container from "./Container";
import { ShopProvider } from "./Context/ShopContext";
import { ProductType } from "./types/types";

const products: ProductType[] = [
  {
    title: "Product 1",
    image: "https://picsum.photos/400/400?random=1",
    description:
      "This is Product 1, featuring a meticulously designed item that blends both form and function to elevate your everyday. Expertly crafted from the finest materials, its elegance is matched only by its durability and utility, making it an indispensable addition to your collection.",
    price: 20,
  },
  {
    title: "Product 2",
    image: "https://picsum.photos/400/400?random=2",
    description:
      "Discover the unmatched quality and timeless design of Product 2. With each detail carefully considered and constructed, this product is not only a testament to superb craftsmanship but also a functional piece that addresses the modern needs of our customers, promising both style and reliability.",
    price: 25,
  },
  {
    title: "Product 3",
    image: "https://picsum.photos/400/400?random=3",
    description:
      "Introducing Product 3, the epitome of innovation and elegance. Designed for those who seek both aesthetics and functionality, it combines cutting-edge technology with refined design principles to create a product that not only meets the expectations of discerning users but also redefines them.",
    price: 30,
  },
];

function App() {
  return (
    <>
      <ShopProvider>
        <Header />
        <Container>
          {products.map((product) => {
            return (
              <ProductCard
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            );
          })}
        </Container>
      </ShopProvider>
    </>
  );
}

export default App;
