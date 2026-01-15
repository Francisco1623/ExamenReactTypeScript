import type { CartItem, Product } from "../types";

const API_URL = "http://localhost:3000";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products`)
  if(!response.ok){
    throw new Error("error al cargar los productos")
  }
  return response.json();
};

export const createOrder = async (order: CartItem[],total:number): Promise<void> => {
  // TODO: Implementar llamada a la API (POST /orders)
  const response = await fetch(`${API_URL}/orders`,{
    method:'POST',
    body:JSON.stringify({order,total}),
    headers:{
      'Content-type':'application/json'
    }
  })
  if(!response.ok){
    throw new Error("error al crear el pedido")

  }

};