export interface Item {
  _id: string;
  name?: string;
  description?: string;
  price?: number;
  quantity: number;
  gender: "women" | "men" | "kids";
  type: "shoe" | "slippers";
  filePath: string;
}
