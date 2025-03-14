interface ButtonProps {
  children: string;
  className?: string;
  type: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}

export default function Button({
  children,
  className,
  type,
  disabled,
}: ButtonProps) {
  const baseClasses =
    "bg-black text-white rounded-md text-sm hover:bg-gray-800 transition-colors";

  return (
    <button
      type={type}
      className={`${baseClasses} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
