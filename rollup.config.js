import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/bundle.js",
    format: "es",
    sourcemap: false,
  },
  plugins: [
    resolve({
      extensions: [".js", ".jsx"],
    }),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
  ],
};
