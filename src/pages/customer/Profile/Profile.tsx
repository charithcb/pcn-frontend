import { useEffect, useState } from "react";
import CustomerLayout from "../../../layouts/CustomerLayout";
import { useAuth } from "../../../hooks/useAuth";
import { fetchCustomerProfile } from "../../../services/customerService";
import { CustomerProfile } from "../../../types/Customer";
import Spinner from "../../../components/common/Spinner";
import Button from "../../../components/common/Button";

export default function Profile() {
    const { token, user, refreshProfile } = useAuth();
    const [profile, setProfile] = useState<CustomerProfile | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            try {
                const data = await fetchCustomerProfile(token || undefined);
                setProfile(data);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [token]);

    const handleRefresh = async () => {
        await refreshProfile();
    };

    return (
        <CustomerLayout>
            <div className="sticky top-0 z-10 bg-dark-900/80 backdrop-blur px-4 py-3 border-b border-dark-600">
                <h1 className="text-[20px] font-bold text-textc-primary">Profile</h1>
            </div>

            <div className="px-4 py-4 flex flex-col gap-4">
                {loading ? (
                    <Spinner />
                ) : (
                    <div className="border border-dark-600 rounded-2xl p-4 space-y-2">
                        <div className="text-[14px] text-textc-muted">Basic information</div>
                        <div className="text-[16px] font-semibold">{profile?.name || user?.name}</div>
                        <div className="text-[14px] text-textc-secondary">{profile?.email || user?.email}</div>
                        {profile?.phone ? <div className="text-[14px] text-textc-secondary">{profile.phone}</div> : null}
                        <Button variant="secondary" onClick={handleRefresh}>Refresh profile</Button>
                    </div>
                )}
            </div>
        </CustomerLayout>
    );
}
