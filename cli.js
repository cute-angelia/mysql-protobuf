#!/usr/bin/env node

var args = process.argv.splice(2)
var convert = require('./')
var fs = require('fs')

var file = args[0]
var data = convert(fs.readFileSync(file).toString())
process.stdout.write(data.protobuf)

var path = data.name + "/" + data.name + ".proto";

fs.mkdirSync("./" + data.name + "/");

fs.writeFile(path, data.protobuf, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("文件保存在 -> " + path);
});