import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product, CartItem } from "../types";

interface CartContextType {
  // TODO: Define el tipo del contexto
  cart:CartItem[];
  total:number;
  addToCart(product:Product):Promise<void>;
  removeFromCart(id:string):Promise<void>;
  
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = async(product: Product):Promise<void> => {
    // TODO: Implementar lógica
    try{
      // 1. Verificar si el producto ya está en el carrito
    const productFind = cart.find(c=>c.id===product.id);
    // 2. Si está, incrementar quantity
    if(productFind){
      productFind.quantity++;
    }else{
      const productCartFind:CartItem ={
        id:product.id,
        name:product.name,
        image:product.image,
        price:product.price,
        stock:product.stock,
        quantity:1
      

      }

      setCart((prev)=>[...prev,productCartFind])
    }
    // 3. Si no está, añadirlo con quantity: 1
    
    console.log("Añadir al carrito:", product);

    }catch(error){
      throw new Error("Error en añadir al carrito");
    }
    
  };

  const removeFromCart = async(id: string):Promise<void> => {
    // TODO: Implementar lógica para eliminar producto
    try{
      const cartUpdate = cart.filter(c=>c.id!==id);
      setCart(cartUpdate);
    }catch(error){
      throw new Error("Error al eliminar producto del carrito")
    }
    

  };

  // TODO: Calcular el total real

  const total = cart.reduce((acum,iter)=>acum+=iter.price*iter.quantity,0);

  return (
    // TODO: Proveer el contexto con los valores necesarios
    <CartContext.Provider value={{cart,addToCart,removeFromCart,total}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};