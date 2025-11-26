import Icon from "./Icon";

export default function SearchInput({
                                        placeholder = "Search...",
                                        onChange,
                                    }: {
    placeholder?: string;
    onChange?: (v: string) => void;
}) {
    return (
        <div className="relative w-full">
            <Icon size={18} color="#737373">
                🔍
            </Icon>

            <input
                onChange={(e) => onChange && onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                   placeholder-textc-muted rounded-full py-2 pl-10 pr-4 text-[14px]
                   focus:border-gold outline-none"
            />
        </div>
    );
}
