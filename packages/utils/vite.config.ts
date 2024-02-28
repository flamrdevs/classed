import { defineConfig } from "vitest/config";

import dts from "vite-plugin-dts";

const env = {
  command: { build: process.env["COMMAND"] === "build", test: process.env["COMMAND"] === "test" },
  unminify: process.env["UNMINIFY"] === "true",
};

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
    env.command.build
      ? dts({
          include: ["src/**/*.ts"],
          compilerOptions: {
            removeComments: false,
          },
        })
      : null,
  ],
  test: {
    include: ["test/**/*.test.ts"],
    watch: false,
    reporters: ["default", "html"],
    outputFile: "test-reports/index.html",
  },
});