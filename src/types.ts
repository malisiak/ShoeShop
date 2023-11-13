export interface Shoe {
  id: number;
  brand: String;
  sizes: number[];
  price: number;
  sale: boolean;
  imageUrl: string;
}

export interface BasketProducts {
  shoe: Shoe;
  orderDetails: OrderDetails[];
}

interface OrderDetails {
  size: number;
  quantity: number;
}
