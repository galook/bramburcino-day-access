import * as http from "http";


const handleResponse = (req: http.IncomingMessage, res: http.ServerResponse) => {
    if(!req.url) return res.end("No url")
    if(req.method === "OPTIONS" || req.url.endsWith("ico")) return res.end("INVALID_MET")

    const num = req.url.split("?")[1]

    console.log(Number(num))
    res.end(Number(num) + "")
}

const ser = http.createServer(handleResponse)

ser.listen(5000)

console.info("Hey. The server is up and ready")



