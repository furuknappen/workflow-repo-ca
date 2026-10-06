import { defineConfig } from "vite";

export default defineConfig({
  test: {
    include: ["src/**/*.test.js", "js/**/*.test.js"],
    exclude: ["**/node_modules/**", "**/tests/**", "**/*spec.js"],
    environment: "jsdom",
  },
});
