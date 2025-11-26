import { useState, useRef, useEffect } from "react";

export default function Dropdown({
                                     trigger,
                                     children,
                                 }: {
    trigger: React.ReactNode;
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="relative" ref={ref}>
            <div onClick={() => setOpen((v) => !v)}>{trigger}</div>

            {open && (
                <div className="absolute right-0 mt-2 bg-dark-800 border border-dark-600 rounded-xl shadow-md z-50 p-2 min-w-[150px]">
                    {children}
                </div>
            )}
        </div>
    );
}
