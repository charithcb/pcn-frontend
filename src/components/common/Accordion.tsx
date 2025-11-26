import { useState } from "react";

export default function Accordion({
                                      title,
                                      children,
                                  }: {
    title: string;
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border border-dark-600 rounded-xl">
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left px-4 py-3 text-textc-primary font-semibold flex justify-between"
            >
                {title}
                <span>{open ? "▾" : "▸"}</span>
            </button>

            {open && <div className="px-4 pb-3 text-textc-secondary">{children}</div>}
        </div>
    );
}
