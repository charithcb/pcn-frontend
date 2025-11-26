export default function ImageUploader({
                                          onChange,
                                      }: {
    onChange?: (file: File | null) => void;
}) {
    return (
        <label className="flex flex-col items-center justify-center border border-dark-600 border-dashed rounded-xl p-6 cursor-pointer hover:bg-dark-800 transition">
            <span className="text-textc-muted mb-2">Click to upload image</span>
            <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => onChange && onChange(e.target.files?.[0] || null)}
            />
        </label>
    );
}
