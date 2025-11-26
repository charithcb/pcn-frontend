import { useCallback, useEffect, useState } from "react";
import { apiRequest } from "../utils/helpers";

export default function useFetch<T>(endpoint: string | null, token?: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        if (!endpoint) return;
        setLoading(true);
        setError(null);

        try {
            const response = await apiRequest<T>(endpoint, { method: "GET" }, token);
            setData(response);
        } catch (err) {
            const message = (err as { message?: string })?.message || "Unable to load data";
            setError(message);
        } finally {
            setLoading(false);
        }
    }, [endpoint, token]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
}
