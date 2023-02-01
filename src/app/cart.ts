interface CartItem {
  _id: string;
  name: string;
  description: string;
  price: string;
  quantity: string;
  gender: string;
  type: string;
  filePath: string;
}

export interface Cart {
  _id: string;
  itemId: string;
  item_details: Array<CartItem>;
}
