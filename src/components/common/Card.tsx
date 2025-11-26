export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="border border-dark-600 rounded-2xl p-4 bg-dark-800">
            {children}
        </div>
    );
}
