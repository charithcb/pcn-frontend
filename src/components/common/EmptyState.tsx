export default function EmptyState({ text }: { text: string }) {
    return (
        <div className="border border-dark-600 rounded-2xl p-6 text-center text-textc-muted text-[14px]">
            {text}
        </div>
    );
}
