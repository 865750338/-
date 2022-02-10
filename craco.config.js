const path = require("path")
const cracoLess = require("craco-less")
const addPath = dir => path.join(__dirname, dir);
module.exports = {
    webpack: {
        alias: {
            "@": addPath("src")
        },
    
    },

}