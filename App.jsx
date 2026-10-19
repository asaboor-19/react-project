import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

function App() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <BrowserRouter>
      <Navbar likes={likes} />

      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<ProductList onLike={handleLike} />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetail />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
