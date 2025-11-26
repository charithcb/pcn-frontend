type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    size?: "md" | "sm";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit";
};

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    onClick,
    type = "button",
}: ButtonProps) {
    const base = "w-full font-semibold rounded-full transition";

    const sizeStyles = size === "sm" ? "py-1.5 text-[13px]" : "py-2 text-[14px]";

    const styles =
        variant === "primary"
            ? "bg-gold text-black hover:bg-gold-dark"
            : "border border-gold text-gold hover:bg-gold/10";

    return (
        <button type={type} onClick={onClick} className={`${base} ${sizeStyles} ${styles} ${className}`}>
            {children}
        </button>
    );
}
