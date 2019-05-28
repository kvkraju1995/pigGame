var port = 90,  /*Application Server*/

express = require('express'),  /*express onkecy  Server*/


app = express().use(express.static(__dirname + '/')),

http = require('http').Server(app);

 

app.use('/', function(req, res){

    res.sendFile(__dirname + '/index.html');

});
 

http.listen(port, function(){

    console.log("Node server listening on port " + port);

});