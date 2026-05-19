import * as SecureStore from "expo-secure-store";

import { create } from "zustand";

const AUTH_KEY = "food_auth";

const useAuthStore = create((set) => ({
  isAuthenticated: false,

  isLoading: true,

  initializeAuth: async () => {
    try {
      const storedAuth = await SecureStore.getItemAsync(AUTH_KEY);

      set({
        isAuthenticated: storedAuth === "true",
      });
    } catch (error) {
      console.log("Auth Initialize Error", error);
    } finally {
      set({
        isLoading: false,
      });
    }
  },

  login: async () => {
    try {
      await SecureStore.setItemAsync(AUTH_KEY, "true");

      set({
        isAuthenticated: true,
      });
    } catch (error) {
      console.log("Login Error", error);
    }
  },

  logout: async () => {
    try {
      await SecureStore.deleteItemAsync(AUTH_KEY);

      set({
        isAuthenticated: false,
      });
    } catch (error) {
      console.log("Logout Error", error);
    }
  },
}));

export default useAuthStore;
