

(async function init() {
    const express = require("express");
    const cors = require("cors");
    const path = require("path");
    // require('./config/database')
    
    //Creating an instance of the Express application, as the backbone of our server
    const app = express();
    // const server = require('http').createServer(app);
    try {
        //Set up middleware functions to serve static files
        app.use(express.static(path.join(__dirname, 'dist')));
        //for handling web secutiy
        app.use(cors());
        //Parsing JSON data from incoming HTTP request
        app.use(express.json())
        // set port, listen for requests
        const PORT = process.env.PORT || 5000;

       
        //Routes Imports
        const usersRouter = require('./routes/users.routes')
        const treasuresRouter = require('./routes/treasures.routes')
        const MoneyRouter = require('./routes/money.routes')
        //API Routes
        app.use([usersRouter,treasuresRouter,MoneyRouter])


        app.listen(PORT, () => {
            console.log(`Server is running on port ${process.env.DB_PORT}.`);
        });

    } catch (e) {
        console.log(`${e}`);
    }
})();