import { FormEvent, useState } from "react";
import CustomerLayout from "../../../layouts/CustomerLayout";
import Input from "../../../components/common/Input";
import TextArea from "../../../components/common/TextArea";
import Button from "../../../components/common/Button";
import Toast from "../../../components/common/Toast";
import { submitInquiry } from "../../../services/customerService";
import { useAuth } from "../../../hooks/useAuth";
import Spinner from "../../../components/common/Spinner";

export default function Inquiries() {
    const { token } = useAuth();
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        try {
            await submitInquiry({ subject, message }, token || undefined);
            setSuccess(true);
            setSubject("");
            setMessage("");
            setTimeout(() => setSuccess(false), 2000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <CustomerLayout>
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">Inquiries</h1>
            </div>

            <div className="px-4 py-4 flex flex-col gap-4">
                <p className="text-textc-secondary text-[14px]">
                    Send us your questions and our team will get back to you quickly.
                </p>

                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <Input placeholder="Subject" required value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <TextArea
                        placeholder="How can we help?"
                        rows={5}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <Button type="submit">{loading ? <Spinner /> : "Send inquiry"}</Button>
                </form>

                {success ? <Toast message="Inquiry sent" /> : null}
            </div>
        </CustomerLayout>
    );
}
