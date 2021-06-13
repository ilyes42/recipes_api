const mongoose = require("mongoose");
const DB_URI = 'mongodb://localhost:27017/recipe_db';

function connect() {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then((res, err) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
}

function close() {
    return mongoose.disconnect();
}

module.exports = { connect, close };