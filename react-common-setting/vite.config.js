import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";

//Lim- assets 접근경로 alias를 위한 추가 코드
import path from "path";
import { fileURLToPath } from "url";
//여기까지

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/  Lim-아래 resolve부분 추가
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
