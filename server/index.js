import 'dotenv/config'
import express from "express";
import next from "next";

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
    //middleware//
    const app = express()
    app.use(express.json({ limit: "50mb" }))

    app.all('*', (req, res) => {
        return handle(req, res)
    })
    app.listen(PORT, () => console.log(`App is running on port 3000`))
}).catch(err => console.log(err))