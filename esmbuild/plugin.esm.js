const { extname } = require("path")

exports.esmPlugin = {
    name: 'esm',
    setup(build) {
        build.onResolve({ filter: /.*/ }, args => {

            const hasExtension = extname(args.path)
            const isLocal = args.path.startsWith("./") || args.path.startsWith("../")

            // Rewrite all imports that don't have an extension (we assume it's code)
            if (args.importer && !hasExtension) {
                // Rewrite the imports to include the extension and make external to avoid bundling
                return { path: isLocal ? `${args.path}.js` : args.path, external: true }
            }
        })
    },
}