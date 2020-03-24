const staticMidd = require("koa-static");
const assetsPath = "./asset";

// let staticServerWithCache = staticMidd(assetsPath, {
//   maxage: 86400000
// });
       
export let staticServerNoCache = staticMidd(assetsPath);


