var path = require('path');
module.exports = {
    root: path.resolve("../"),
    apps: path.resolve("../apps"),
    custom: path.resolve("../custom"),
    blinxExtensions: path.resolve("../node_modules/blinx-extensions/lib"),
    blinxModules: path.resolve("../node_modules/blinx-modules/lib"),
    minified: path.resolve("./minified")
};