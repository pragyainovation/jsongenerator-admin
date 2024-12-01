function SkeletonWrapper({ data = null, children, content = null }) {
  return data ? children : content;
}

export default SkeletonWrapper;
