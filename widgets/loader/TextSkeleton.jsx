const TextSkeleton = () => (
  <div className="space-y-2 w-full">
    <div className="h-4 bg-gray4 rounded w-3/4 animate-pulse"></div>
    <div className="h-4 bg-gray4 rounded w-1/2 animate-pulse"></div>
    <div className="h-4 bg-gray4 rounded w-full animate-pulse"></div>
  </div>
);

export default TextSkeleton;
