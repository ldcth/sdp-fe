interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-gray-900 rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}
