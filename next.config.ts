import { defineConfig } from "next";

export default defineConfig({
  webpack(config) {
    // This ensures JSON files are properly handled
    config.module.rules.push({
      test: /\.json$/,
      type: "json",
    });
    return config;
  },
});
