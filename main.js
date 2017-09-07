const express = require('express');
const app = express();

app.listen('3000', function(){
    console.log('server listening on port 3000')
})


let owjs = require('overwatch-js');
owjs.getAll('pc', 'eu', 'Lanikeu-21211').then(
    function (data) {
        console.log(data.profile.rankPicture)
    }
);

app.set('views', './template');
app.set('view engine', 'html');
app.use("/", express.static("static"));