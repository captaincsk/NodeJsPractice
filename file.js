 const fs = require("fs");

// // sync
// fs.writeFileSync("./test.txt", "hello world");

// // async 
// //fs.writeFile("./test1.txt" , " hello this is async ", (err) => {});


// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);
// // in async you need to give if err and 

// // in async it always excepts a callback where it gives err / result
// fs.readFile("./contacts.txt", "utf8" , (err, result) => {
//     if(err){
//         console.log(err)
//     }else {
//         console.log(result);
//     }
// })

// //you use append to add text to existing txt whereas in writefile is overwrites it 

// fs.appendFileSync("./test1.txt", `${Date.now()}heya added some text\n`);

// fs.cpSync("./test.txt", "./copy.txt"); // copy the contents of test to copy

// fs.unlinkSync("./copy.txt"); // unlink [delete]

console.log(fs.statSync("test1.txt"));

//fs.mkdirSync("my-docs"); to creat a directory

fs.mkdirSync("my-codes/a/b", { recursive : true});

fs.writeFileSync("./hello.js" , "hey");