type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea(props: TextAreaProps) {
    return (
        <textarea
            {...props}
            className={`w-full bg-dark-800 border border-dark-600 text-textc-primary 
                  placeholder-textc-muted rounded-xl px-4 py-2 text-[14px] min-h-[100px]
                  focus:border-gold outline-none ${props.className || ""}`}
        />
    );
}
