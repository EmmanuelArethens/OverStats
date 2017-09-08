const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let owjs = require('overwatch-js');
let name = 'Lanikeu-21211'
let plateform = 'pc'
let region = 'eu'
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }));

// redirection vers index
app.get("/", function(req, resp){
resp.sendFile(__dirname + '/index.html')
});

app.post("/getstats", function(req, resp){
    owjs.getAll(req.body.plateform, req.body.region, req.body.name).then(
        function (data) {
            resp.send(data)
        }
    );
})

app.listen('3000', function(){
    console.log('server listening on port 3000')
})

owjs.getAll(plateform, region, name).then(
    function (data) {
        console.log(data)
    }
);

app.post("/add", function(req, resp) {
    resp.send("ok");
    console.log(req.data.profile);
 });

