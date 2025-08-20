"use client";

import { useForm } from "react-hook-form";
import { Product } from "../models/Product";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onSave: (data: Omit<Product, "id">) => void;
}

export default function ProductModal({ product, onClose, onSave }: ProductModalProps) {
  const { register, handleSubmit, reset } = useForm<Omit<Product, "id">>({
    defaultValues: product || { name: "", description: "", price: 0, stock: 0 },
  });

  const submitHandler = (data: Omit<Product, "id">) => {
    onSave(data);
    reset();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Ürün Ekle</h2>
        <input
          {...register("name")}
          placeholder="İsim"
          className="border p-2 w-full mb-2 rounded"
        />
        <input
          {...register("description")}
          placeholder="Açıklama"
          className="border p-2 w-full mb-2 rounded"
        />
        <input
          type="number"
          {...register("price", { valueAsNumber: true })}
          placeholder="Fiyat"
          className="border p-2 w-full mb-2 rounded"
        />
        <input
          type="number"
          {...register("stock", { valueAsNumber: true })}
          placeholder="Stok"
          className="border p-2 w-full mb-2 rounded"
        />
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={onClose}
            className="mr-2 px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            İptal
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}
