type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select(props: SelectProps) {
    return (
        <select
            {...props}
            className={`w-full bg-dark-800 border border-dark-600 text-textc-primary 
                  rounded-xl px-4 py-2 text-[14px] focus:border-gold outline-none
                  ${props.className || ""}`}
        >
            {props.children}
        </select>
    );
}
