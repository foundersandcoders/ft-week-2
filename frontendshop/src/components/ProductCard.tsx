import { useShopContext } from "../Context/ShopContext";

type ProductCardProps = {
  title: string;
  image: string;
  description: string;
  price: number;
  id: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  id,
}) => {
  const {
    dispatch,
    state: { products },
  } = useShopContext();

  const clickHandler = () => {
    const selectedProduct = products?.find((product) => product.id === id);
    if (!selectedProduct) return;
    dispatch({ type: "add_to_cart", payload: selectedProduct });
  };
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-description">
        <h2>{title}e</h2>
        <p>{description}</p>
        <div className="card-details">
          <small>Price: €{price}.00</small>
          <button onClick={clickHandler} className="base-button button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
