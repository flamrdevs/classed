import { defineConfig } from "vite";

import dts from "vite-plugin-dts";

import $env from "./env";

const env = $env();

export default defineConfig({
  build: {
    ...(env.unminify ? { minify: false } : {}),
    target: "esnext",
    lib: {
      entry: ["src/index.ts"],
      fileName: (format, entry) => `${entry}.${format === "cjs" ? "cjs" : "js"}`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [],
      output: {
        exports: "named",
      },
    },
  },
  plugins: [
    dts({
      include: ["src/**/*.ts"],
      compilerOptions: {
        removeComments: false,
      },
      staticImport: true,
    }),
  ],
});
