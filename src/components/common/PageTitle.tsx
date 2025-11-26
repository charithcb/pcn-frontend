export default function PageTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
            <h1 className="text-[20px] font-bold text-textc-primary">{children}</h1>
        </div>
    );
}
