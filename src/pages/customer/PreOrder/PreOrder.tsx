import { FormEvent, useState } from "react";
import CustomerLayout from "../../../layouts/CustomerLayout";
import Input from "../../../components/common/Input";
import TextArea from "../../../components/common/TextArea";
import Button from "../../../components/common/Button";
import Toast from "../../../components/common/Toast";
import { useAuth } from "../../../hooks/useAuth";
import { createPreorder } from "../../../services/preorderService";
import Spinner from "../../../components/common/Spinner";

export default function PreOrder() {
    const { token } = useAuth();
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [budget, setBudget] = useState("");
    const [notes, setNotes] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        try {
            await createPreorder(
                {
                    vehiclePreferences: { make, model },
                    budget: budget ? Number(budget) : undefined,
                    notes,
                },
                token || undefined
            );
            setMessage("Your pre-order request was sent.");
            setMake("");
            setModel("");
            setBudget("");
            setNotes("");
        } finally {
            setLoading(false);
        }
    };

    return (
        <CustomerLayout>
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">Pre-order a vehicle</h1>
            </div>

            <div className="px-4 py-4 flex flex-col gap-4">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <Input placeholder="Preferred make" required value={make} onChange={(e) => setMake(e.target.value)} />
                    <Input placeholder="Preferred model" required value={model} onChange={(e) => setModel(e.target.value)} />
                    <Input
                        placeholder="Budget (LKR)"
                        type="number"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                    />
                    <TextArea
                        placeholder="Any additional notes or requirements"
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                    <Button type="submit">{loading ? <Spinner /> : "Submit request"}</Button>
                </form>

                {message ? <Toast message={message} /> : null}
            </div>
        </CustomerLayout>
    );
}
