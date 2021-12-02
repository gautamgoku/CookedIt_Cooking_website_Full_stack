var dbHost = process.env.dbHost || "localhost";
module.exports = {
  name: "CookedIt",
  title: "CookedIt",
  commands: {
    package:
      "electron-packager electron.js spruce --electronVersion=2.0.12 --overwrite --icon=/public/images/logo/logo.png --prune=true --out=release",
    build: ""
  },
  http: {
    host: "localhost",
    port: 8000
  },
  author: "dgr",
  version: "2.0.0",
  db: {
    connectionUri: "mongodb+srv://admin:vina241201@cluster0.cwsri.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    params: {},
    collections: ["moment", "user", "feeling", "ask"]
  }
};
