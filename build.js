import esbuild from "esbuild";

let build = await esbuild.build({
  entryPoints: ["./src/index.js"],
  outdir: "./build",
  bundle: true,
  watch: true,
  incremental: true,
  loader: {
    ".css": "file",
    ".js": "js",
  },
  entryNames: "[dir]/[name]-[hash]",
  chunkNames: "_shared/[name]-[hash]",
  assetNames: "_assets/[name]-[hash]",
  plugins: [
    {
      name: "css-file-hash-fixer",
      setup(build) {
        build.onResolve({ filter: /.*/ }, () => {
          return {};
        });
        build.onLoad({ filter: /.*/ }, () => {
          return {};
        });
      },
    },
  ],
});
