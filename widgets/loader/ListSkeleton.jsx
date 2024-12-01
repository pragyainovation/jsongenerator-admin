const ListSkeleton = ({ listCount = 2 }) => (
  <div className="space-y-4 w-full">
    {[...Array(listCount)]?.map((_, i) => (
      <div key={i} className="h-6 bg-gray4 rounded w-full animate-pulse"></div>
    ))}
  </div>
);

export default ListSkeleton;
