let fs=require("fs");
let data=fs.readFileSync('abc.txt');//koi bhi folder ko read karna
console.log(data.toString());
let stry="hello world! Happy new year";
let wrt=fs.writeFileSync('def.txt',stry);
console.log(wrt);

