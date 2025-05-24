import { Button } from "@/components/ui/button";
import { formatPrice } from "@/utils/formatPrice";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { ProductSkeleton } from "@/components/ProductSkeleton";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const {
    id: [id, title],
  } = await params;

  // fetch data
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      images: [product.image, ...previousImages],
    },
  };
}

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json();
}

function ProductContent({ productData }) {
  return (
    <>
      {/* Mobile Layout (Vertical Stack) */}
      <div className="flex flex-col md:hidden space-y-4">
        <h1 className="text-3xl font-bold text-center">{productData.title}</h1>
        <p className="text-lg text-gray-600">{productData.description}</p>
        <div className="flex justify-center rounded-lg p-4">
          <Image
            src={productData.image}
            alt={productData.title}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600">{productData.description}</p>
        </div>

        <div className="flex flex-col items-center space-y-2 mt-5">
          <p className="text-3xl font-bold text-green-600">
            {formatPrice(productData.price)}
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-xl px-8 py-6 w-full">
            <ShoppingCart className="size-6 mr-2" /> Comprar
          </Button>
          <Button asChild variant="outline" className="mt-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
            </Link>
          </Button>
        </div>
      </div>

      {/* Desktop Layout (Side by Side) */}
      <div className="hidden md:flex gap-8">
        {/* Left Side - Image */}
        <div className="w-1/2 flex justify-center rounded-lg p-4">
          <Image
            src={productData.image}
            alt={productData.title}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-1/2 flex flex-col space-y-4">
          <h1 className="text-3xl font-bold"> {productData.title}</h1>
          <p className="text-sm text-gray-600">{productData.category}</p>

          <div>
            <p className="text-lg text-gray-600">{productData.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-green-600">
              {formatPrice(productData.price)}
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-xl px-8 py-6">
              <ShoppingCart className="size-6 mr-2" /> Comprar
            </Button>
          </div>

          <div className="mt-auto">
            <Button asChild variant="outline" className="self-start">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default async function Page({ params, searchParams }) {
  const {
    id: [id],
  } = await params;

  const productData = await getProduct(id);

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <Suspense fallback={<ProductSkeleton />}>
        <ProductContent productData={productData} />
      </Suspense>
    </div>
  );
}
