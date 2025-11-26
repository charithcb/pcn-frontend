type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
    return (
        <input
            {...props}
            className={`w-full bg-dark-800 border border-dark-600 text-textc-primary 
                  placeholder-textc-muted rounded-xl px-4 py-2 text-[14px]
                  focus:border-gold outline-none ${props.className || ""}`}
        />
    );
}
