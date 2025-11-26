export default function Avatar({
                                   src,
                                   size = 40,
                               }: {
    src?: string;
    size?: number;
}) {
    return (
        <img
            src={src || "https://ui-avatars.com/api/?background=2c2c2c&color=fff&name=U"}
            alt="avatar"
            width={size}
            height={size}
            className="rounded-full object-cover"
        />
    );
}
