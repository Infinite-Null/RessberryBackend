const app = require("./app")
const dotenv = require("dotenv")
const connectDb = require('./ConnectDb')

dotenv.config({path: "./.env"})
connectDb()

app.listen(process.env.PORT, () => {
    console.log(`Server is running in PORT: ${process.env.PORT}`)
})
