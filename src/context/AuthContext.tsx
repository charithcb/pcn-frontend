import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { login as loginRequest, register as registerRequest, fetchProfile } from "../services/authService";
import { STORAGE_KEYS } from "../utils/constants";
import { User } from "../types/User";
import { ApiError } from "../utils/helpers";

interface AuthContextValue {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
    refreshProfile: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const savedToken = localStorage.getItem(STORAGE_KEYS.TOKEN);
        const savedUser = localStorage.getItem(STORAGE_KEYS.USER);

        if (savedToken) {
            setToken(savedToken);
        }

        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    useEffect(() => {
        if (token && !user) {
            refreshProfile();
        }
    }, [token]);

    const persistAuth = (authToken: string, authUser: User) => {
        localStorage.setItem(STORAGE_KEYS.TOKEN, authToken);
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(authUser));
        setToken(authToken);
        setUser(authUser);
    };

    const login = useCallback(async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await loginRequest(email, password);
            persistAuth(response.token, response.user);
        } catch (err) {
            const apiErr = err as ApiError;
            setError(apiErr.message || "Unable to sign in");
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const register = useCallback(async (name: string, email: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
            const response = await registerRequest(name, email, password);
            persistAuth(response.token, response.user);
        } catch (err) {
            const apiErr = err as ApiError;
            setError(apiErr.message || "Unable to register");
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem(STORAGE_KEYS.TOKEN);
        localStorage.removeItem(STORAGE_KEYS.USER);
        setUser(null);
        setToken(null);
    }, []);

    const refreshProfile = useCallback(async () => {
        if (!token) return;
        setLoading(true);
        try {
            const profile = await fetchProfile(token);
            localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(profile));
            setUser(profile);
        } catch (err) {
            logout();
        } finally {
            setLoading(false);
        }
    }, [logout, token]);

    const value = useMemo(
        () => ({ user, token, loading, error, login, register, logout, refreshProfile }),
        [error, loading, login, logout, refreshProfile, register, token, user]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
