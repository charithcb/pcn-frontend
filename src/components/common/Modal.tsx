type ModalProps = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-dark-800 border border-dark-600 rounded-2xl p-6 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}
