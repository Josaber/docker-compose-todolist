const express = require('express');

const app = express();

app.use(express.static('client/dist'));

app.get('http://backend:8080/', (req, res)=> {
  res.send("TODO...");
});

app.listen(3000, ()=> {
  console.log("Server started: http://192.168.33.50:3000")
});