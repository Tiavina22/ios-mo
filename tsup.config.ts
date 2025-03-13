import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  format: ["esm", "cjs"],
  dts: {
    compilerOptions: {
      jsx: "react-jsx",
    },
  },
  tsconfig: "./tsconfig.app.json",
  splitting: false,
  sourcemap: true,
  clean: true,
});
