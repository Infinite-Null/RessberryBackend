const express = require('express')
const app = express()
const HeartRate = require("./Model")

const bodyParser = require("body-parser");
app.use(express.json())
app.use(express.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));

const Router = express.Router()
Router.route("/").get((req, res)=>{
        HeartRate.findById("65392427c3aa8479e9b5e01a").then((data)=>{
            res.status(200).json({
                data:data
            })
        }).catch((e)=>{
            console.log(e)
        })
})
Router.route("/put").get((req, res)=>{
    const {rateData} = req.query
    HeartRate.findByIdAndUpdate("65392427c3aa8479e9b5e01a",{rate:parseInt(rateData)}).then(()=>{
        res.status(200).json({
            success:true,
            updatedData:rateData
        })
    }).catch((e)=>{
        console.log(e)
    })
})


app.use(Router)

module.exports = app
