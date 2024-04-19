import { defineConfig } from "vite";

import preact from "@preact/preset-vite";

import dts from "vite-plugin-dts";

import $env from "./../utils/env";

const env = $env();

export default defineConfig({
  build: {
    ...(env.unminify ? { minify: false } : {}),
    target: "esnext",
    lib: {
      entry: ["src/index.tsx"],
      fileName: (format, entry) => `${entry}.${format === "cjs" ? "cjs" : "js"}`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["@classed/utils", "preact", "preact/hooks", "preact/jsx-runtime"],
      output: {
        exports: "named",
      },
    },
  },
  plugins: [
    preact(),
    dts({
      include: ["src/**/*.{ts,tsx}"],
      compilerOptions: {
        removeComments: false,
      },
      staticImport: true,
    }),
  ],
});
