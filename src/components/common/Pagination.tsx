type PaginationProps = {
    page: number;
    totalPages: number;
    onChange: (p: number) => void;
};

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
    return (
        <div className="flex justify-center gap-3 py-4">
            <button
                disabled={page === 1}
                onClick={() => onChange(page - 1)}
                className="text-textc-secondary disabled:opacity-40"
            >
                Prev
            </button>

            <span className="text-textc-muted text-[14px]">
        {page} / {totalPages}
      </span>

            <button
                disabled={page === totalPages}
                onClick={() => onChange(page + 1)}
                className="text-textc-secondary disabled:opacity-40"
            >
                Next
            </button>
        </div>
    );
}
