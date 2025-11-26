import CustomerLayout from "../../../layouts/CustomerLayout";

export default function Profile() {
    return (
        <CustomerLayout>
            {/* TOP BAR */}
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">
                    Profile
                </h1>
            </div>

            {/* CONTENT */}
            <div className="px-4 py-4 flex flex-col gap-6 max-w-xl">

                {/* USER INFO CARD */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <h2 className="text-[18px] font-semibold mb-1">Your Information</h2>
                    <p className="text-[14px] text-textc-secondary mb-4">
                        Update your personal details.
                    </p>

                    <form className="flex flex-col gap-3">

                        <input
                            className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                         placeholder-textc-muted rounded-xl px-4 py-2 text-[14px]
                         focus:border-gold outline-none"
                            placeholder="Full Name"
                        />

                        <input
                            className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                         placeholder-textc-muted rounded-xl px-4 py-2 text-[14px]
                         focus:border-gold outline-none"
                            placeholder="Email"
                        />

                        <input
                            className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                         placeholder-textc-muted rounded-xl px-4 py-2 text-[14px]
                         focus:border-gold outline-none"
                            placeholder="Phone"
                        />

                        <button
                            className="bg-gold text-black font-semibold px-6 py-2 rounded-full
                         hover:bg-gold-dark transition text-[14px]"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>

                {/* PASSWORD CHANGE */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <h2 className="text-[18px] font-semibold mb-3">Change Password</h2>

                    <form className="flex flex-col gap-3">
                        <input
                            type="password"
                            className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                         placeholder-textc-muted rounded-xl px-4 py-2 text-[14px]
                         focus:border-gold outline-none"
                            placeholder="Current Password"
                        />

                        <input
                            type="password"
                            className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                         placeholder-textc-muted rounded-xl px-4 py-2 text-[14px]
                         focus:border-gold outline-none"
                            placeholder="New Password"
                        />

                        <input
                            type="password"
                            className="w-full bg-dark-800 border border-dark-600 text-textc-primary
                         placeholder-textc-muted rounded-xl px-4 py-2 text-[14px]
                         focus:border-gold outline-none"
                            placeholder="Confirm New Password"
                        />

                        <button
                            className="bg-gold text-black font-semibold px-6 py-2 rounded-full
                         hover:bg-gold-dark transition text-[14px]"
                        >
                            Update Password
                        </button>
                    </form>
                </div>

                {/* DELETE ACCOUNT */}
                <div className="border border-dark-600 rounded-2xl p-4">
                    <h2 className="text-[18px] font-semibold mb-3 text-red-500">Danger Zone</h2>

                    <button
                        className="border border-red-500 text-red-500 font-semibold px-6 py-2 rounded-full
                       hover:bg-red-500/20 transition text-[14px]"
                    >
                        Delete Account
                    </button>
                </div>

            </div>
        </CustomerLayout>
    );
}
