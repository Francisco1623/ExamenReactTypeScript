// TODO: Define la interfaz Product basándote en db.json
export interface Product {
  id:string;
  name:string;
  price:number;
  image:string;
  stock:number;
}

// TODO: Define la interfaz CartItem (Extiende de Product e incluye quantity)
export interface CartItem extends Product {
  quantity:number;
} 