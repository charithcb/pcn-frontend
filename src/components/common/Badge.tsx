type BadgeProps = {
    children: React.ReactNode;
    color?: "gold" | "green" | "red" | "gray";
};

export default function Badge({ children, color = "gold" }: BadgeProps) {
    const colors = {
        gold: "text-gold bg-gold/15",
        green: "text-green-400 bg-green-400/10",
        red: "text-red-400 bg-red-400/10",
        gray: "text-textc-muted bg-dark-700",
    };

    return (
        <span
            className={`px-3 py-1 text-[12px] rounded-full font-medium ${colors[color]}`}
        >
      {children}
    </span>
    );
}
