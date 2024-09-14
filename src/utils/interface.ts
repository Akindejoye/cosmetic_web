export interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
  category?: string[];
  sale?: boolean | undefined;
}