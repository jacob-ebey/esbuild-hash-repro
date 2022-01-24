# esbuild hashing issue

Esbuild does not seem to be taking into accound the inlined values that results from importing a file.

## Reproduction case:

```
npm i
npm run build
```

Inspect output files in `build/` then make a change to `src/index.css`. You'll notice a new hash and file is generated for the output css file, but not the js entrypoint. The contents of the entrypoint have changed due to the hash of the CSS file changing, but it is not refelected in the entrypoint built output file hash.

If it helps, before changing the ".css" file contents, rename the `build/` directory to `build-old/`. You'll see that the ".js" file has the same hash indicating that the contents did not change, when in-reality it's contents has changed (and the hash should change along with it).
