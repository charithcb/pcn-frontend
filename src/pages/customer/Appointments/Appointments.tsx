import { FormEvent, useEffect, useState } from "react";
import CustomerLayout from "../../../layouts/CustomerLayout";
import Input from "../../../components/common/Input";
import TextArea from "../../../components/common/TextArea";
import Button from "../../../components/common/Button";
import { scheduleAppointment, fetchAppointments } from "../../../services/customerService";
import { useAuth } from "../../../hooks/useAuth";
import { Appointment } from "../../../types/Appointment";
import Spinner from "../../../components/common/Spinner";
import Toast from "../../../components/common/Toast";

export default function Appointments() {
    const { token } = useAuth();
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [notes, setNotes] = useState("");
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            try {
                const data = await fetchAppointments(token || undefined);
                setAppointments(data);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [token]);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setSubmitting(true);
        try {
            const appointment = await scheduleAppointment({ date, time, notes }, token || undefined);
            setAppointments((prev) => [appointment, ...prev]);
            setMessage("Appointment requested");
            setDate("");
            setTime("");
            setNotes("");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <CustomerLayout>
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">Appointments</h1>
            </div>

            <div className="px-4 py-4 flex flex-col gap-4">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <Input type="date" required value={date} onChange={(e) => setDate(e.target.value)} />
                    <Input type="time" required value={time} onChange={(e) => setTime(e.target.value)} />
                    <TextArea
                        placeholder="Notes (optional)"
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                    <Button type="submit">{submitting ? <Spinner /> : "Schedule"}</Button>
                </form>

                {message ? <Toast message={message} /> : null}

                <div className="border border-dark-600 rounded-2xl p-4">
                    <h2 className="text-[16px] font-semibold mb-2">Upcoming appointments</h2>
                    {loading ? (
                        <Spinner />
                    ) : appointments.length ? (
                        <div className="flex flex-col gap-3">
                            {appointments.map((item) => (
                                <div key={item.id} className="border border-dark-700 rounded-xl p-3">
                                    <div className="text-[15px] font-semibold">
                                        {item.date} at {item.time}
                                    </div>
                                    <div className="text-[13px] text-textc-secondary">{item.location || "Showroom"}</div>
                                    <div className="text-[12px] text-textc-muted">Status: {item.status || "Pending"}</div>
                                    {item.notes ? (
                                        <div className="text-[12px] text-textc-muted mt-1">{item.notes}</div>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-textc-muted text-[14px]">No appointments yet.</p>
                    )}
                </div>
            </div>
        </CustomerLayout>
    );
}
