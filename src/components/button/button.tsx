interface ButtonProps {
  children: string;
  className?: string;
}

export default function Button({ children, className }: ButtonProps) {
  const baseClasses =
    "bg-black text-white rounded-md text-sm hover:bg-gray-800 transition-colors";

  return (
    <button type="button" className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
}
