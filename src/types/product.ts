// Product types for the e-commerce

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: "cartas-sueltas" | "cajas-selladas" | "accesorios";
  set: string;
  tag?: string;
  stock: number;
  created_at: string;
}
