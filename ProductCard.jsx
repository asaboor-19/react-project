import { Link } from "react-router-dom";

function ProductCard({ product, onLike }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>

      <p className="price">{product.price}</p>

      <p>{product.description}</p>

      <div className="card-buttons">
        <button onClick={onLike}>
          ❤️ Like
        </button>

        <Link
          className="details-btn"
          to={`/product/${product.id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;