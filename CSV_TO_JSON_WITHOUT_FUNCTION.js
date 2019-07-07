const fs = require('fs')
const http = require('http')
const path = require('path')
const csvtojson = require('csvtojson')
var csvFilePath= 'customer-data.csv'

var f = fs.readFileSync(csvFilePath, {encoding: 'utf-8'},
    function(err){console.log(err);});
f = f.split('\n')
headers = f.shift().split(",");
console.log(f);

var json = []
f.forEach(function(d) {
  tmp = {}
  row = d.split(",")
  for(var i = 0; i < headers.length; i++)
  {
    tmp[headers[i]] = row[i]
  }
  json.push(tmp)
})

console.log(json)

fs.writeFileSync('CSV_JSON.json', JSON.stringify(json), {encoding: 'utf-8'},
function(err){console.log(err);});
