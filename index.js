// // console.log("hello dhjkbs");
// // {
// //     let a="jbdsks";
// //     console.log(a);
// // }
// // console.log(a);
// // fun();



// //how to send message
// // const http = require('http');
// // const app = http.createServer((req,res)=>{
// //     res.end('welcome rog')
// // })
// // const PORT = process.env.PORT ||3000
// // app.listen(PORT , ()=>{
// //     console.log(`listening o port ${PORT}`);
// // })


// //how to send html file
// // if i want to send file i need this file dir and also 
// // i want read that file


const http = require('http');
const fs = require('fs');
const path = require('path'); 

const app = http.createServer((req, res) => {
    // console.log(req.url);
    // res.end(req.url)
    // res.writeHead(200 , {
    //     'Content-Type' : 'text/html'
    // })
    // if(req.url == '/'){
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err,data)=>{
    //         if(err)throw err;
    //         res.end(data)
    //     })
    // }else if(req.url==='/about'){
    //     fs.readFile(path.join(__dirname,'public','about.html'),(err,data)=>{
    //         if(err)throw err;
    //         res.end(data)
    //     })
    // }   
    let file = path.join(__dirname, 'public',req.url === '/' ? 'index.html' : req.url);
    
    let contentType = 'text/html';

    let ext = path.extname(file);
    if(!ext){
        file+='.html'
    }

    switch(ext){
        case '.css':
            contentType = 'text/css'
            break;
        case '.js':
            contentType = 'text/javascript'
            break;
        default:
            contentType = 'text/html'
    }
    fs.readFile(file, (err, data) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error!!!')
                }else{
                    res.writeHead(404,{
                        'Content-Type' : contentType
                    })
                    res.end(data);
                }
            })
        }else{
            
            res.writeHead(200 , {
                'Content-Type' : contentType
            })
            res.end(data)
        }
    })
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`);
})