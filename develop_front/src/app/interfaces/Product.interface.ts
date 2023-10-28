export interface Product {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  price: number;
  stock: number;
  image: string;
  type:string;
  enable: boolean;
  quantity: undefined | number,
  productId: undefined| number
}


