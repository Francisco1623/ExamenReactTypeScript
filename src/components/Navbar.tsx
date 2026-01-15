import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import type { ReactNode } from "react";

interface NavrbarProps{
  children:ReactNode
}
  
export default function Navbar({children}:NavrbarProps) {
  // TODO: Obtener items del carrito para mostrar el contador real
  const {cart} = useCart();
  const cartCount = cart.length; 

  return (
    <>
    <nav>
      {/* TODO: Enlace a la página principal con el texto 'TechStore 🛒' */}
      <Link to={"/"}>TechStore</Link>
      <div>
        {/* Enlace al carrito con el texto 'Carrito <span>Aquí poner el número de productos en el carrito</span>'  */}
        <Link to={"/cart"}>{cartCount}</Link>
      </div>
    </nav>
    
          {children}

    </>
    
    
  );
}