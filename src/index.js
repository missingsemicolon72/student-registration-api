const express = require('express');
require('./db/conn');
const studentRouter = require('./routers/student');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(studentRouter);

app.get('*', (req, res) => {
    res.status(400).send({
        code: 404,
        message: "Requested resource not found.",
    })
})

app.listen(PORT, () => {
    console.log(`Connection estabilished successfully!\nListening on port no. ${PORT}`);
})