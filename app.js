const Koa = require("koa")
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const controller = require("./controller")

app.use(bodyParser());
// app.use(async (ctx) => {
//   // await next();
//   // ctx.type = "text/html";
//   // ctx.response.body = {
//   //   url: ctx.request.url,
//   //   query: ctx.request.query,
//   //   querystring: ctx.request.querystring
//   // }
//   // console.log(1111,ctx.req)
//   // let postdata = "";
//   // ctx.req.on("data", (data) => {
//   //   postdata += data;
//   // });
//   // ctx.req.on("end", () => {
//   //   console.log(postdata);
//   // })
//   ctx.response.body="Hello"
// })
app.use(controller())
app.listen(3000)
console.log("app started at port 3000 ...")

