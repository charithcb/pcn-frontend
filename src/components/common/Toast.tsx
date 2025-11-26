type ToastProps = {
    message: string;
    type?: "success" | "error";
};

export default function Toast({ message, type = "success" }: ToastProps) {
    const color = type === "success" ? "text-gold" : "text-red-400";

    return (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
            <div
                className={`px-4 py-2 rounded-full bg-dark-800 border border-dark-600 text-[14px] ${color}`}
            >
                {message}
            </div>
        </div>
    );
}
