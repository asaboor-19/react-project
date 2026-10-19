import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { PRODUCTS } from "../data";

function ProductDetail() {
  const { id } = useParams();

  const product = PRODUCTS.find((item) => item.id === id);

  useEffect(() => {
    if (product) {
      document.title = `Product: ${product.name}`;
    }

    return () => {
      document.title = "My Store";
    };
  }, [id, product]);

  if (!product) {
    return (
      <div className="detail-page">
        <h2>Product not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <h1>{product.name}</h1>

      <h2 className="price">{product.price}</h2>

      <p>{product.description}</p>

      <Link to="/" className="details-btn">
        Back to Home
      </Link>
    </div>
  );
}

export default ProductDetail;