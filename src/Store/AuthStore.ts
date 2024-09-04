import { create } from "zustand";
import axios from "axios";

const API_URL =
  import.meta.env.MODE === "development" ? "http://localhost:3000/api/auth" : "/api/auth";

axios.defaults.withCredentials = true;

interface User {
  id: string;
  email: string;
  name: string;
  isVerified: boolean; // Added to track verification status
}

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  isVerified: boolean;
  error: string | null;
  isLoading: boolean;
  isCheckingAuth: boolean;
  message: string | null;

  signup: (email: string, password: string, name: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  verifyEmail: (code: string) => Promise<void>;
  checkAuth: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isVerified: false, // Track if the user is verified
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

  signup: async (email: string, password: string, name: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/signup`, { email, password, name });
      set({ 
        user: response.data.user, 
        isAuthenticated: true, 
        isVerified: response.data.user.isVerified, // Ensure verification status is set
        isLoading: false 
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      set({
        isAuthenticated: true,
        user: response.data.user,
        isVerified: response.data.user.isVerified, // Ensure verification status is set
        error: null,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Error logging in",
        isLoading: false,
      });
      throw error;
    }
  },

  logout: async () => {
    set({ isLoading: true, error: null });
    try {
      await axios.post(`${API_URL}/logout`);
      set({ user: null, isAuthenticated: false, isVerified: false, error: null, isLoading: false });
    } catch (error: any) {
      set({ error: "Error logging out", isLoading: false });
      throw error;
    }
  },

  verifyEmail: async (code: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/verify-email`, { code });
      set({
        user: { ...response.data.user, isVerified: true }, // Set verified to true
        isAuthenticated: true,
        isVerified: true, // Mark the user as verified
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Error verifying email",
        isLoading: false,
      });
      throw error;
    }
  },

  checkAuth: async () => {
    set({ isCheckingAuth: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/check-auth`);
      set({
        user: response.data.user,
        isAuthenticated: true,
        isVerified: response.data.user.isVerified, // Ensure verification status is set
        isCheckingAuth: false,
      });
    } catch (error: any) {
      set({ error: null, isCheckingAuth: false, isAuthenticated: false, isVerified: false });
    }
  },

  forgotPassword: async (email: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/forgot-password`, { email });
      set({ message: response.data.message, isLoading: false });
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.response?.data?.message || "Error sending reset password email",
      });
      throw error;
    }
  },

  resetPassword: async (token: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
      set({ message: response.data.message, isLoading: false });
    } catch (error: any) {
      set({
        isLoading: false,
        error: error.response?.data?.message || "Error resetting password",
      });
      throw error;
    }
  },
}));
