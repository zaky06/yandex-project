const root = document.querySelector("#root");
root.textContent = "testpage";

const names = ["Anna", "Vika", "Sasha"];

var fs = require("fs");
var posthtml = require("posthtml");
var posthtmlCssModules = require("posthtml-css-modules");
var template = fs.readFileSync("./about.html", "utf8");

posthtml([posthtmlCssModules("./cssModules.json")])
  .process(template)
  .then(function (result) {
    console.log(result.html);
  });