"use client";
import { ProductCard } from "@/components/product-card";
import { useGetProductsQuery } from "@/redux/service/productApi";


export default function productPage() {
  const { data: products = [], isError, isLoading } = useGetProductsQuery();

  console.log(isLoading);
  console.log(isError);
  console.log(products);

  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
}
