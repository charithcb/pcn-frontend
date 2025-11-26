export default function Skeleton({ height = "h-6" }: { height?: string }) {
    return (
        <div className={`w-full ${height} bg-dark-700 rounded-lg animate-pulse`} />
    );
}
