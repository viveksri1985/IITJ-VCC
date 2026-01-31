const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;
const DB_Server_IP = '10.0.2.5';

app.get('/',async (req, res) => {
try{
const response = await axios.get(`http://${DB_Server_IP}:5000/status`);
res.send(`Hey Vivek! This is Frontend calling Backend: Got response:-> ${response.data.message}`);
}catch(error) {
res.status(500).send({
error: "connection failed",
message:error.message,
details:error.code
});
}
});

app.listen(PORT, () => {
console.log(`Frontend is running on http://localhost/${PORT}`);
});
