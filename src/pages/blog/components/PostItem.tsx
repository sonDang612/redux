function PostItem({
  title,
  description,
  featuredImage,
}: {
  title: string;
  description: string;
  featuredImage: string;
}) {
  return (
    <div className="relative w-full rounded-lg shadow-md">
      <div className="h-full w-full">
        <img
          className="w-full object-cover aspect-square"
          src={featuredImage}
          alt=""
        />
        <div className="p-5">
          <h1 className="text-center font-serif text-xl font-semibold text-rose-500 text-length-1">
            {title}
          </h1>
          <p className="text-center text-gray-600 text-length-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
