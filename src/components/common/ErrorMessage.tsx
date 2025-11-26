export default function ErrorMessage({ text }: { text: string }) {
    return <p className="text-red-400 text-[13px] mt-1">{text}</p>;
}
