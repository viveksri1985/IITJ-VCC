onst express = require('express');
const app = express();

app.get('/status', (req, res) => {
res.json({message: "Hello Vivek! This is Backend Server (Vivek-VM2). Your request has been processed and returned successfuly"});
});

app.listen(5000, '0.0.0.0', ()=> {
console.log("Backend File is ready to process on port 5000");
});
