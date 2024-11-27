export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Your trusted source for books online.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            {/* Add links */}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            {/* Add customer service links */}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            {/* Add newsletter form */}
          </div>
        </div>
      </div>
    </footer>
  );
}
