import { Navigation } from "./Navigation";
import { SearchBar } from "../shared/SearchBar";
import { Cart } from "../shared/Cart";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">BookStore</h1>
            <Navigation />
          </div>
          <div className="flex items-center gap-4">
            <SearchBar />
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}
