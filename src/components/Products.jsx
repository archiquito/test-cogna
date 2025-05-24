import React from "react";

import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/utils/formatPrice";
import { replaceWhiteSpaceToUnderscore } from "@/utils/replaceWhiteSpaceToUnderscore";
import { ShoppingCart } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export function Products({ data }) {
  return (
    <div
      data-testid="products-grid"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {data?.map((item) => (
        <article key={item.id} className="w-[350px] border-accent border-2">
          <Card>
            <CardHeader>
              <CardContent className="grid-cols-2 gap-2.5 flex items-center justify-center">
                <div className="flex items-center justify-center h-[150px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    quality={75}
                    width={150}
                    height={150}
                    className="flex items-center justify-center object-contain max-h-[150px]"
                  />
                </div>
              </CardContent>
              <CardTitle className="font-bold text-sm h-16">
                {item.title}
              </CardTitle>
              <p className="font-bold text-2xl">{formatPrice(item.price)}</p>
            </CardHeader>
            <CardFooter className="flex flex-col items-center justify-end flex-wrap">
              <Button
                asChild
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                <Link
                  href={`/product/${item.id}/${replaceWhiteSpaceToUnderscore(
                    item.title
                  )}`}
                >
                  <ShoppingCart /> Ver Produto
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </article>
      ))}
    </div>
  );
}
