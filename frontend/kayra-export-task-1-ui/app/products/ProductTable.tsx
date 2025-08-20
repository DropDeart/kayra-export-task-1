"use client";

import { Product } from "../models/Product";

interface ProductTableProps {
  products: Product[];
}

 function currencyFormat(num : number) {
   return '₺' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

export default function ProductTable({ products }: ProductTableProps) {
  return (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 border">İsim</th>
          <th className="px-4 py-2 border">Açıklama</th>
          <th className="px-4 py-2 border">Fiyat</th>
          <th className="px-4 py-2 border">Stok</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id} className="text-center">
            <td className="px-4 py-2 border">{p.name}</td>
            <td className="px-4 py-2 border">{p.description}</td>
            <td className="px-4 py-2 border">{currencyFormat(p.price)}</td>
            <td className="px-4 py-2 border">{p.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}