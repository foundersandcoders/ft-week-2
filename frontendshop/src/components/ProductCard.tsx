type ProductCardProps = {
  title: string;
  image: string;
  description: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-description">
        <h2>{title}e</h2>
        <p>{description}</p>
        <div className="card-details">
          <small>Price: €{price}.00</small>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
