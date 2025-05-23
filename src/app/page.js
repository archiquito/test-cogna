import { ProductList } from "@/components/ProductList";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  // Get unique categories
  const categories = [...new Set(data.map((product) => product.category))];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[1200px] mx-auto">
        <ProductList initialData={data} categories={categories} />
      </div>
    </div>
  );
}
