import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";
// import { useCart } from "../context/CartContext";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    // TODO: Cargar productos al montar el componente
    const getProductsEffect = async () =>{
      const products = await getProducts();
      setProducts(products);
    }
    getProductsEffect();
  }, []);

  return (
    <div className="container">
      <h1>Nuestros Productos</h1>
      <div className="product-grid">
        {/* TODO: Mostramos un ProductCard por cada producto */}
        {products.map(pr=>(
          <ProductCard key={pr.id} product={pr} onAdd={addToCart} ></ProductCard>
        ))}
      </div>
    </div>
  );
}