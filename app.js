//https://www.npmjs.com/package/cloudinary
//https://www.npmjs.com/package/socket.io

require('dotenv').config();

const Server = require('./models/server');


const server = new Server();


server.listen();