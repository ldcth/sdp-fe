import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Discover Your Next Favorite Book
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Explore our vast collection of books across all genres
          </p>
          <Button>Browse Collection</Button>
        </div>
      </div>
    </section>
  );
}
