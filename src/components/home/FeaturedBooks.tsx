import { BookCard } from "../ui/BookCard";

export function FeaturedBooks() {
  const featuredBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 9.99,
      coverImage: "/images/gatsby.jpg",
    },
    // Add more featured books
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Featured Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
}
