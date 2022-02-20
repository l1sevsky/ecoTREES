const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors = require('cors');

const PORT = process.env.PORT || config.get('server_port');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/mainRouter'));

async function startServer() {
    try {
        await mongoose.connect(config.get('database_url'));

        app.listen(PORT, () => {
            console.log(`Server has been started on PORT ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
}


startServer();