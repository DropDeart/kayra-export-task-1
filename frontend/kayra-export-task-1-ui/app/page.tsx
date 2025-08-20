"use client";

import { useState, useEffect } from "react";
import { Product } from "./models/Product";
import { getProducts, createProduct } from "./services/productService";
import ProductModal from "./products/ProductModal";
import ProductTable from "./products/ProductTable";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    const data = await getProducts("");
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = () => {
    setEditingProduct(null);
    setModalOpen(true);
  };

  const handleSave = async (productData: Omit<Product, "id">) => {
    await createProduct(productData);
    setModalOpen(false);
    fetchProducts();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Ürünler</h1>
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Ürün Ekle
        </button>
      </div>

      <ProductTable products={products} />

      {modalOpen && (
        <ProductModal
          product={editingProduct}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}