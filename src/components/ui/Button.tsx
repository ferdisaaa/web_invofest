interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  className,
}) => {
  const baseStyle =
    "px-10 py-3 rounded font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group relative overflow-hidden";
  const variantStyle =
    variant === "primary"
      ? "bg-red-900 text-white hover:bg-red-800"
      : "border border-red-900 text-red-900 hover:bg-red-900 hover:text-white";
  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`}>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg]" />
      <span className="relative z-10">{label}</span>
    </button>
  );
};

export default Button;
