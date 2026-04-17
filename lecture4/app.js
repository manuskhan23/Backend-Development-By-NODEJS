const http=require('http')

const server=http.createServer((req,res)=>{
    console.log(req.headers,req.url,req.method);
    // process.exit()

    if(req.url=='/'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>')
        res.write('</html>')
    res.end()
    }
    else if(req.url=='/products'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>My Products</title></head>')
        res.write('<body><h1>Products Page</h1></body>')
        res.write('</html>')
        res.end()
    }else{
        res.setHeader('Content-Type','text/html')
        res.write('<html>')
        res.write('<head><title>Not Found</title></head>')
        res.write('<body><h1>404 - Page Not Found</h1></body>')
        res.write('</html>')
        res.end()
    }
})

const port=3000

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})