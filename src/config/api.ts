// Centralized API configuration for the frontend.
// The base URL can be customized via REACT_APP_API_BASE_URL; it defaults to the local backend.

const sanitizedBaseUrl = process.env.REACT_APP_API_BASE_URL?.replace(/\/$/, "");

export const API_BASE_URL = sanitizedBaseUrl || "http://localhost:5000/api";
