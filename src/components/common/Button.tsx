import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md";
    className?: string;
};

export default function Button({
                                   children,
                                   variant = "primary",
                                   size = "md",
                                   className = "",
                                   type = "button",
                                   ...rest
                               }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
    const sizeClasses =
        size === "sm"
            ? "px-4 py-1.5 text-[13px] w-auto"
            : "w-full py-2 text-[14px]";

    const base = `font-semibold rounded-full transition ${sizeClasses}`;

    const styles =
        variant === "primary"
            ? "bg-gold text-black hover:bg-gold-dark"
            : "border border-gold text-gold hover:bg-gold/10";

    return (
        <button type={type} {...rest} className={`${base} ${styles} ${className}`}>
            {children}
        </button>
    );
}
