"use client";

import { useGetCategoriesQuery } from "@/redux/service/categoryApi";

export default function CategoryPage() {
  const { data, isError, isLoading } = useGetCategoriesQuery();
  console.log("category" +data)

  return (
    <div>
      <h1>Test</h1>

      {data?.map((d) => (
    
        <h1>{d.name}</h1>
      ))}
    </div>
  );
}
