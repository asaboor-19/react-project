import { useState, useEffect } from "react";
import { PRODUCTS } from "../data";
import ProductCard from "../components/ProductCard";

function ProductList({ onLike }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(PRODUCTS);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h2 className="message">Loading products...</h2>;
  }

  return (
    <>
      <div className="page-heading">
        <h1>Our Products</h1>
        <p>Find your favourite products</p>
      </div>

      <input
        className="search-input"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onLike={onLike}
            />
          ))
        ) : (
          <p className="message">No products found</p>
        )}
      </div>
    </>
  );
}

export default ProductList;