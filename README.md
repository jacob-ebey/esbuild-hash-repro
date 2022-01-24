# esbuild hashing issue

Esbuild does not seem to be taking into accound the inlined values that results from importing a file.

## Reproduction case:

```
npm i
npm run build
```

Inspect output files in `build/` then make a change to `src/index.css`. You'll notice a new hash and file is generated for the output css file, but not the js entrypoint. The contents of the entrypoint have changed due to the hash of the CSS file changing, but it is not refelected in the entrypoint built output file hash.
