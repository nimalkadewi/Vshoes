interface OrderItem {
  itemId?: string;
  quantity?: number;
}

interface OrderCustomer {
  first_name?: string;
  last_name?: string;
  username?: string;
  email?: string;
  password?: string;
  address?: string;
  phone_number?: number;
  role?: string;
  _id?: string;
}

export interface Order {
  _id?: string;
  items?: Array<OrderItem>;
  userId?: string;
  price?: number;
  customer: Array<OrderCustomer>;
}
