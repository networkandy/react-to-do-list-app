const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'))
});


// app.get('/', (req, res)=>{
//     res.sendFile('/public/index.html');
// });



//create default port to serve the app
const port = process.env.PORT || 5000
app.listen(port);

console.log('server started on port ' + port);
