type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit";
};

export default function Button({
                                   children,
                                   variant = "primary",
                                   className = "",
                                   onClick,
                                   type = "button",
                               }: ButtonProps) {
    const base =
        "w-full font-semibold py-2 rounded-full transition text-[14px]";

    const styles =
        variant === "primary"
            ? "bg-gold text-black hover:bg-gold-dark"
            : "border border-gold text-gold hover:bg-gold/10";

    return (
        <button type={type} onClick={onClick} className={`${base} ${styles} ${className}`}>
            {children}
        </button>
    );
}
