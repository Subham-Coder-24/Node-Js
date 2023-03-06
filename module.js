// const color = require('cli-color');

// console.log(color.red('hello'));

// const auth = require('./auth.js');
// a("arja");

// auth.register("raja")
// auth.login("raja","ket");


// const path = require('path');

// dirname
// console.log("Dirname : ",path.dirname(__filename));

//filename
// console.log('File name :' , path.basename(__filename));

// parse
// console.log('Parse : ' , path.parse(__filename));
// console.log(__dirname);
// console.log(__filename);

//Join
// console.log('Join : ' ,path.join(__dirname,'order','raja','order.js') );

// File System
// const fs = require('fs');

//Make a folder or dir
// fs.mkdir(path.join(__dirname,'/test'),(err)=>{
//     if(err){
//         console.log('wrong');
//         return;
//     }
//     console.log('folder creat...');
// })

//Create file
// fs.writeFile(path.join(__dirname,'test','test.txt'),'hello raja\n',(err)=>{
//     if(err) throw err;
//     fs.appendFile(path.join(__dirname,'test','test.txt'),'data created..',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('data created..');
//     })
//     console.log('file created..');
// })


//read file
// fs.readFile(path.join(__dirname,'test','utf-8',test.txt'),(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// })

////////////////////////////////////////// node js event ///////////////////////////////////////////////////////

// const Emitter = require('events'); // it retuen a class
// const myEmitter = new Emitter(); // emit is object

// myEmitter.on('someone' , (data)=>{
//     console.log(data);
// })
// myEmitter.emit('someone' , {
//     name : 'rakesh'
// })
// class Auth extends Emitter{
//     register(username){
//         console.log(`register sussfully ${username}`);
//         this.emit('email', username ); // call email event
//     }
// } 

// const auth  = new Auth()

// auth.on('email',(data)=>{
//     console.log(`email sent to user ${data}`);
// })
// auth.on('email',(data)=>{
//     console.log(`password sent to user ${data}`);
// })
// auth.register('raja');

////////////////////////////////////////// node js event ///////////////////////////////////////////////////////    