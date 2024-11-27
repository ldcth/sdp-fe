import { BookCard } from "../ui/BookCard";

export function NewArrivals() {
  const newBooks = [
    {
      id: 1,
      title: "New Release Book",
      author: "Author Name",
      price: 14.99,
      coverImage: "/images/new-book.jpg",
    },
    // Add more new books
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">New Arrivals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {newBooks.map((book) => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </section>
  );
}
