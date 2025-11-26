export default function Divider({ label }: { label?: string }) {
    if (!label) {
        return <div className="h-px bg-dark-600 my-4" />;
    }

    return (
        <div className="flex items-center my-4 gap-3">
            <div className="flex-1 h-px bg-dark-600" />
            <span className="text-[12px] text-textc-muted uppercase tracking-wide">
        {label}
      </span>
            <div className="flex-1 h-px bg-dark-600" />
        </div>
    );
}
