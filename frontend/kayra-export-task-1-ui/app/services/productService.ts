import { Product } from "../models/Product";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getProducts(searchText: string): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/api/Product`);
  
  if (!response.ok) {
    throw new Error("Ürünler alınamadı");
  }

  const data: Product[] = await response.json();
  return data;
}

export async function createProduct(product: Omit<Product, "id">): Promise<Product> {
  const response = await fetch(`${BASE_URL}/api/Product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Ürün eklenirken bir hata oluştu");
  }

  const createdProduct: Product = await response.json();
  return createdProduct;
}