type IconProps = {
    children: React.ReactNode;
    size?: number;
    color?: string;
};

export default function Icon({ children, size = 20, color = "#FFFFFF" }: IconProps) {
    return (
        <span style={{ fontSize: size, color }}>
      {children}
    </span>
    );
}
