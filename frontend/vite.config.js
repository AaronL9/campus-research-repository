import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  proxy: {
    "/api": "http://localhost:4100",
  },
  plugins: [react()],
});
