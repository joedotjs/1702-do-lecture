const express = require('express');
const app = express();

app.listen(3001, () => {
    console.log('App on!')
});

app.get('/', (_, res) => {
    res.send('Hello! I am a deployed website!');
});