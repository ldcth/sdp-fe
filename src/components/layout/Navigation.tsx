export function Navigation() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Books" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="ml-8">
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
