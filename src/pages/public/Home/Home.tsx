import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
            <div className="max-w-[600px] text-center">

                <h1 className="text-[42px] font-extrabold text-textc-primary mb-6 leading-tight">
                    Welcome to PCN
                </h1>

                <p className="text-textc-secondary text-[18px] mb-10">
                    Your trusted place to browse, order, and track imported vehicles.
                </p>

                <div className="flex flex-col gap-4 max-w-[300px] mx-auto">

                    <Link to="/login">
                        <button
                            className="w-full bg-gold text-black font-semibold py-3 rounded-full
                         hover:bg-gold-dark transition"
                        >
                            Sign in
                        </button>
                    </Link>

                    <Link to="/register">
                        <button
                            className="w-full border border-gold text-gold font-semibold py-3 rounded-full
                         hover:bg-gold/10 transition"
                        >
                            Create account
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    );
}
