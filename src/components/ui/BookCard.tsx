interface BookCardProps {
  title: string;
  author: string;
  price: number;
  coverImage: string;
  rating?: number;
}

export function BookCard({
  title,
  author,
  price,
  coverImage,
  rating,
}: BookCardProps) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
        <img
          src={coverImage}
          alt={title}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{author}</p>
        </div>
        <p className="text-sm font-medium">${price}</p>
      </div>
    </div>
  );
}
