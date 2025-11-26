import CustomerLayout from "../../../layouts/CustomerLayout";

export default function PreOrder() {
    return (
        <CustomerLayout>
            {/* TOP BAR */}
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">
                    Pre-order Vehicle
                </h1>
            </div>

            {/* CONTENT */}
            <div className="px-4 py-4 flex flex-col gap-4">
                <p className="text-[14px] text-textc-secondary">
                    Tell us what you’re looking for. We’ll import a vehicle that matches your request.
                </p>

                <form className="flex flex-col gap-3 max-w-xl">
                    <input
                        className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                       placeholder-textc-muted rounded-xl px-4 py-2 text-[14px]
                       focus:border-gold outline-none"
                        placeholder="Make (e.g. Toyota)"
                    />

                    <input
                        className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                       placeholder-textc-muted rounded-xl px-4 py-2 text-[14px]
                       focus:border-gold outline-none"
                        placeholder="Model (e.g. Aqua)"
                    />

                    <input
                        className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                       placeholder-textc-muted rounded-xl px-4 py-2 text-[14px]
                       focus:border-gold outline-none"
                        placeholder="Year range (e.g. 2017–2020)"
                    />

                    <input
                        className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                       placeholder-textc-muted rounded-xl px-4 py-2 text-[14px]
                       focus:border-gold outline-none"
                        placeholder="Budget (LKR)"
                    />

                    <textarea
                        className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                       placeholder-textc-muted rounded-xl px-4 py-2 text-[14px] min-h-[100px]
                       focus:border-gold outline-none"
                        placeholder="Additional notes (color, options, mileage, etc.)"
                    />

                    <button
                        type="submit"
                        className="mt-2 w-full sm:w-auto bg-gold text-black font-semibold px-6 py-2
                       rounded-full hover:bg-gold-dark transition"
                    >
                        Submit pre-order request
                    </button>
                </form>
            </div>
        </CustomerLayout>
    );
}
