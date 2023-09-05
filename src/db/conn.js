require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.ATLAS_DB_USERNAME}:${process.env.ATLAS_DB_PASSWORD}@anonymouscluster.8rpthln.mongodb.net/${process.env.ATLAS_DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection to the database estabilished successfully!');
}).catch((e) => {
    console.log(`An error occurred\n${e}`);
});