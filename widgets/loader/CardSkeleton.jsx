const CardSkeleton = () => (
  <div className="p-4 w-full max-w-sm bg-white border border-gray5 rounded-lg shadow animate-pulse">
    <div className="w-full h-32 bg-gray4 rounded mb-4"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray4 rounded w-3/4"></div>
      <div className="h-4 bg-gray4 rounded w-1/2"></div>
      <div className="h-4 bg-gray4 rounded w-full"></div>
    </div>
  </div>
);

export default CardSkeleton;
