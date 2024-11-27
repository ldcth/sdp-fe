import { Card } from "../ui/Card";

export function Categories() {
  const categories = [
    { id: 1, name: "Fiction", count: 120 },
    { id: 2, name: "Non-Fiction", count: 85 },
    { id: 3, name: "Science", count: 45 },
    { id: 4, name: "History", count: 67 },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Browse Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card key={category.id}>
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <p className="text-gray-500">{category.count} books</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
