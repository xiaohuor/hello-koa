const fs = require("fs");
const router = require("koa-router")();

function addMapping(router, mapping) {
  for(let url in mapping) {
    if(url.startsWith("GET ")) {
      let path = url.substr(4);
      router.get(path, mapping[url])
    } else if(url.startsWith("POST ")) {
      let path = url.substr(5);
      router.post(path, mapping[url])
    } else {
      console.log("invalid URL: " +url)
    }
  }
}

function addControllers(router, dir) {
  let files = fs.readdirSync(__dirname + dir);
  let files_js = files.filter(f=>f.endsWith(".js"))
  for(let f of files_js) {
    let mapping = require(__dirname + dir + f);
    addMapping(router, mapping);
  }
}

module.exports = function (dir) {
  let controller_dir = dir || "/controllers/";
  addControllers(router, controller_dir)
  return router.routes();
}