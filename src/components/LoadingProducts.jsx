import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from './ui/card';

export default function LoadingProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3].map((index) => (
        <Card
          key={index}
          className="w-[350px] border-accent border-2 animate-pulse"
        >
          <CardHeader>
            <CardContent className="grid-cols-2 gap-2.5 flex items-center justify-center">
              <div className="flex items-center justify-center h-[150px] w-[150px] bg-gray-200 rounded-md" />
            </CardContent>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
            <div className="h-6 bg-gray-200 rounded w-1/2" />
          </CardHeader>
          <CardFooter className="flex flex-col items-center justify-end flex-wrap">
            <div className="w-full h-10 bg-gray-200 rounded" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
