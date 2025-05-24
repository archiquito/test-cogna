import { Skeleton } from './ui/skeleton';

export function ProductSkeleton() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Mobile Layout (Vertical Stack) */}
      <div className="flex flex-col md:hidden space-y-4">
        <Skeleton className="h-8 w-3/4 mx-auto" />
        <Skeleton className="h-4 w-full" />
        <div className="flex justify-center rounded-lg p-4">
          <Skeleton className="h-[300px] w-[300px]" />
        </div>
        <Skeleton className="h-4 w-full" />
        <div className="flex flex-col items-center space-y-2 mt-5">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-10 w-full mt-4" />
        </div>
      </div>

      {/* Desktop Layout (Side by Side) */}
      <div className="hidden md:flex gap-8">
        {/* Left Side - Image */}
        <div className="w-1/2 flex justify-center rounded-lg p-4">
          <Skeleton className="h-[300px] w-[300px]" />
        </div>

        {/* Right Side - Content */}
        <div className="w-1/2 flex flex-col space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-12 w-48" />
          </div>
          <div className="mt-auto">
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}
