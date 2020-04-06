require("babel-register");

const router = require("./index").default;
const Sitemap = require("../").default;

new Sitemap(router)
  .build("https://socialmedia-panama.com/")
  .save("./sitemap.xml");
