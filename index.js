const { log } = require("console");
const fs  = require("fs");



const biodata = {
    name : "vinod",
    age : 26,
    channel : "thapa technical",
}

console.log(biodata.channel);

// to convert object into json

// const jsonData = JSON.stringify(biodata);
// console.log(jsonData.channel); 

// to convert json yo object

// const objData = JSON.parse(jsonData);

// console.log(objData);

// file system in JSON
//1) convert to json
//2) dusre file me add karna hai
//3) readfile
//4) again convert back to js obj ori
//5) console.log

const jsonData = JSON.stringify(biodata);

// fs.writeFile('json1.json',jsonData ,(err)=>
// {
//     console.log("done");
// })

fs.readFile("json1.json","utf-8",(err,data)=>
{
    console.log(data);
    const orgdata = JSON.parse(data);
    console.log(orgdata);
})
