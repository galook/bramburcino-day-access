import * as http from "http";
import * as fs from "fs";

const handleResponse = (req: http.IncomingMessage, res: http.ServerResponse) => {
 
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.setHeader('Access-Control-Allow-setHeaders', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.statusCode = 200;

    const startDate = new Date("2022/08/11")
    if(!req.url) return res.end("No url")
    if(req.method === "OPTIONS" || req.url.endsWith("ico")) return res.end("INVALID_MET")

    const num = Number(req.url.split("?")[1])
    if(Number.isNaN(num)) return res.end("Not a valid nmber to proceed with boy")

    let readData
    try {
        readData = JSON.parse(fs.readFileSync("./index.json").toString())
    } catch (e) {
        return res.end("Error reading datafile./")
    } 
    console.log(startDate);
    startDate.setDate(startDate.getDate() + num)
    console.log(startDate);
    console.log(new Date());
    
    if(startDate.getTime() > Date.now()) return res.end("Moc brzy Klárko :)")

    if(!readData[num]) return res.end("No data found under this day number ")
    res.end(readData[num])
}

const ser = http.createServer(handleResponse)

ser.listen(10300)

console.info("Hey. The server is up and ready")



