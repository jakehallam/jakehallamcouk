const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jake.hallam/Desktop/Work Related Docs/JakeHallamWebsite/jakehallamcouk/.cache/dev-404-page.js"))),
  "component---src-pages-404-jsx": hot(preferDefault(require("/Users/jake.hallam/Desktop/Work Related Docs/JakeHallamWebsite/jakehallamcouk/src/pages/404.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/jake.hallam/Desktop/Work Related Docs/JakeHallamWebsite/jakehallamcouk/src/pages/index.jsx")))
}

