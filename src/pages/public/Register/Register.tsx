import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button";
import Input from "../../../components/common/Input";
import Divider from "../../../components/common/Divider";
import { useAuth } from "../../../hooks/useAuth";
import Toast from "../../../components/common/Toast";
import Spinner from "../../../components/common/Spinner";

export default function Register() {
    const navigate = useNavigate();
    const { register, error, loading } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            await register(name, email, password);
            setSuccess(true);
            navigate("/customer/dashboard");
        } catch (err) {
            setSuccess(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-900 px-4">
            <div className="w-full max-w-[380px]">
                <h1 className="text-[28px] font-bold mb-8 text-textc-primary">Create account</h1>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        placeholder="Full name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit">{loading ? <Spinner /> : "Create account"}</Button>
                </form>

                {error ? <p className="text-red-400 text-[14px] mt-3">{error}</p> : null}
                {success ? <Toast message="Account created" /> : null}

                <Divider />

                <div className="mt-2 text-[14px] text-textc-secondary">
                    Already have an account?{" "}
                    <Link to="/login" className="text-gold hover:underline">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}
