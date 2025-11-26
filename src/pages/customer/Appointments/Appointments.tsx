import CustomerLayout from "../../../layouts/CustomerLayout";

export default function Appointments() {
    return (
        <CustomerLayout>
            {/* TOP BAR */}
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">
                    Appointments
                </h1>
            </div>

            {/* CONTENT */}
            <div className="px-4 py-4 flex flex-col gap-4 max-w-xl">

                {/* CREATE APPOINTMENT */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <h2 className="text-[16px] font-semibold mb-3">Book an Appointment</h2>

                    <input
                        type="date"
                        className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                       rounded-xl px-4 py-2 text-[14px] focus:border-gold outline-none mb-3"
                    />

                    <input
                        type="time"
                        className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                       rounded-xl px-4 py-2 text-[14px] focus:border-gold outline-none mb-3"
                    />

                    <textarea
                        className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                placeholder-textc-muted rounded-xl px-4 py-2 text-[14px] min-h-[80px]
                focus:border-gold outline-none"
                        placeholder="Reason for appointment"
                    />

                    <button
                        className="mt-3 bg-gold text-black font-semibold px-5 py-2 rounded-full
                       hover:bg-gold-dark transition text-[14px]"
                    >
                        Book Appointment
                    </button>
                </div>

                {/* UPCOMING APPOINTMENTS */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <h2 className="text-[16px] font-semibold mb-3">Upcoming Appointments</h2>

                    <p className="text-[14px] text-textc-muted">
                        No appointments scheduled.
                    </p>
                </div>
            </div>
        </CustomerLayout>
    );
}
