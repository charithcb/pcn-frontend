import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import Divider from "../../../components/common/Divider";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-900 px-4">
            <div className="w-full max-w-[380px]">

                <h1 className="text-[28px] font-bold mb-8 text-textc-primary">
                    Sign in
                </h1>

                <form className="flex flex-col gap-4">
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />

                    <Button type="submit">Sign in</Button>
                </form>

                <Divider />

                <div className="mt-2 text-[14px] text-textc-secondary">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-gold hover:underline">
                        Register
                    </Link>
                </div>
            </div>
            {/* optional: could add Spinner here in future when loading */}
        </div>
    );
}

