import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:4100",
      "/file": "http://localhost:4100"
    },
  },
  plugins: [react()],
});
