const jsonServer = require("json-server");
const dotenv = require('dotenv');
dotenv.config();

const server = jsonServer.create()

const router = jsonServer.router("db.json")

const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(router)

const port =
    process.env.PORT

server.listen(port, () => {
    console.log(`server run on port ${port}`)
})