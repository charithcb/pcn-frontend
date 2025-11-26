export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-900 px-4">
            <div className="w-full max-w-[380px]">

                <h1 className="text-[28px] font-bold mb-8 text-textc-primary">
                    Sign in
                </h1>

                <form className="flex flex-col gap-4">

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded-xl bg-dark-700 border border-dark-600 text-textc-primary
                      placeholder-textc-muted focus:border-gold outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded-xl bg-dark-700 border border-dark-600 text-textc-primary
                      placeholder-textc-muted focus:border-gold outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-gold text-black font-semibold py-2 rounded-full
                       hover:bg-gold-dark transition"
                    >
                        Sign in
                    </button>

                </form>

                <div className="mt-6 text-[14px] text-textc-secondary">
                    Don't have an account?{" "}
                    <span className="text-gold cursor-pointer hover:underline">
            Register
          </span>
                </div>

            </div>
        </div>
    );
}
