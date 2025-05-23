import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function LoadingProducts() {
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
    {Array.from({ length: 6 }).map((_, index) => (
      <Card key={index} className="w-[350px] border-accent border-2">
        <CardHeader>
          <CardContent className="grid-cols-2 gap-2.5 flex items-center justify-center">
            <div className="flex items-center justify-center h-[150px]">
            <Skeleton className="h-32 w-32 flex items-center justify-center object-contain max-h-[150px]" />
             </div>
          </CardContent>
          <CardTitle className="font-bold text-sm h-16">
            <Skeleton className="h-4 w-full" />
          </CardTitle>
          <p className="font-bold text-2xl">
            <Skeleton className="h-8 w-[200px]" />
          </p>
        </CardHeader>
        <CardFooter className="flex flex-col items-center justify-end flex-wrap">
          <Skeleton className="h-8 w-[200px]" />
        </CardFooter>
      </Card>
    ))}
  </div>
  );
}
