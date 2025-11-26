// Centralized API configuration for the frontend.
// The base URL can be customized via REACT_APP_API_BASE_URL; it defaults to the local backend.

const sanitizedBaseUrl = process.env.REACT_APP_API_BASE_URL?.replace(/\/$/, "");

// Export kept separate from constants for compatibility with branches that still import from
// `src/utils/constants`. If you need the base URL there, it re-exports this value.
export const API_BASE_URL = sanitizedBaseUrl || "http://localhost:5000/api";
