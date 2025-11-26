import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";
import Divider from "../../../components/common/Divider";
import { useAuth } from "../../../hooks/useAuth";

export default function Home() {
    const { user } = useAuth();

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
                    {user ? (
                        <Link to="/customer/dashboard">
                            <Button>Go to dashboard</Button>
                        </Link>
                    ) : (
                        <>
                            <Link to="/login">
                                <Button>Sign in</Button>
                            </Link>

                            <Link to="/register">
                                <Button variant="secondary">Create account</Button>
                            </Link>
                        </>
                    )}
                </div>

                <Divider />

                <p className="text-[14px] text-textc-muted">
                    Start by {user ? "exploring your dashboard" : "signing in or creating your account"} to
                    continue.
                </p>
            </div>
        </div>
    );
}
