import LoadingProducts from "@/components/LoadingProducts";
import { Products } from "@/components/Products";
import { Suspense } from "react";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] mx-auto">
        <Suspense fallback={<LoadingProducts />}>
          <Products data={data} />
        </Suspense>
      </div>
    </div>
  );
}
