import CustomerLayout from "../../../layouts/CustomerLayout";

export default function Inquiries() {
    return (
        <CustomerLayout>
            {/* TOP BAR */}
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">
                    Inquiries
                </h1>
            </div>

            {/* CONTENT */}
            <div className="px-4 py-4 flex flex-col gap-4 max-w-xl">

                {/* CREATE NEW INQUIRY */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <h2 className="text-[16px] font-semibold mb-3">Ask a Question</h2>

                    <textarea
                        className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                       placeholder-textc-muted rounded-xl px-4 py-2 text-[14px] min-h-[100px]
                       focus:border-gold outline-none"
                        placeholder="Type your inquiry..."
                    />

                    <button
                        className="bg-gold text-black font-semibold px-5 py-2 rounded-full
                       hover:bg-gold-dark transition text-[14px] mt-3"
                    >
                        Submit
                    </button>
                </div>

                {/* PAST INQUIRIES LIST */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <h2 className="text-[16px] font-semibold mb-3">Your Past Inquiries</h2>

                    <div className="text-[14px] text-textc-muted">
                        No inquiries yet.
                    </div>
                </div>
            </div>
        </CustomerLayout>
    );
}
