import { useEffect } from 'react'
import { useShopContext } from '../Context/ShopContext';
import ProductCard from './ProductCard';

const ProductList = () => {
  const {dispatch, state: {products}} = useShopContext();

  useEffect(() => {
    const fetchObjects = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/objects');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 

        dispatch({ type: "set_products_list", payload: data });
      } catch (error) {
        console.error("Failed to fetch objects:", error);
        // Handle the error state appropriately here, e.g., set an error message in your state
      }
    };
    fetchObjects();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <>
    {products?.map((product) => {
      return (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          image={product.image}
          price={product.price}
        />
      );
    })}
  </>
  )
}

export default ProductList