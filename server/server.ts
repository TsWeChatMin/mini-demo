import { readFileSync, writeFileSync } from "fs"
import express from "express"
import request from "request"

const app = express()

function base64_encode(file: string) {
    // read binary data
    var bitmap = readFileSync(file)
    // convert binary data to base64 encoded string
    return bitmap.toString("base64")
}

// writeFileSync("huzhao.txt", base64_encode("/Users/chenhuan/Downloads/护照测试.jpeg")) 

request(
    "https://ocrhz.market.alicloudapi.com/rest/160601/ocr/ocr_passport.json",
    {
        json: {
            image: base64_encode("/Users/chenhuan/Downloads/护照测试.jpeg")
        },
        method: "POST",
        headers: {
            "Authorization": "APPCODE 25d12ef59981415abad3fd123304f4ea",
            "Content-Type": "application/json; charset=UTF-8"
        }
    },
    (err, res, body) => {
        if (err) {
            console.log(err)
            return
        }


        console.log(body)
    }
)

app.post("/getImageInfo", function(req, res, next) {
    console.log(req.body)
})

app.listen(3001)

console.log("server running at port: 3001")
