import http     from 'http';
import path     from 'path';
import async    from 'async';
import socketio from 'socket.io';
import express  from 'express';
import bodyParser   from 'body-parser';

const router    = express();
const server    = http.createServer(router);
const io        = socketio.listen(server);
const messages  = [];
const sockets   = [];

router.use(express.static(path.resolve(__dirname, 'client')));
router.use( bodyParser.json() );
router.use(bodyParser.urlencoded({
  extended: true
})); 


io.on('connection', function (socket) {
    messages.forEach(function (data) {
      socket.emit('message', data);
    });

    sockets.push(socket);

    socket.on('disconnect', function () {
      sockets.splice(sockets.indexOf(socket), 1);
      updateRoster();
    });

    socket.on('message', function (msg) {
      var text = String(msg || '');

      if (!text)
        return;

      socket.get('name', function (err, name) {
        var data = {
          name: name,
          text: text
        };

        broadcast('message', data);
        messages.push(data);
      });
    });

    socket.on('identify', function (name) {
      socket.set('name', String(name || 'Anonymous'), function (err) {
        updateRoster();
      });
    });
  });

function updateRoster() {
  async.map(
    sockets,
    function (socket, callback) {
      socket.get('name', callback);
    },
    function (err, names) {
      broadcast('roster', names);
    }
  );
}

function broadcast(event, data) {
  sockets.forEach(function (socket) {
    socket.emit(event, data);
  });
}

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'ec2-35-154-136-242.ap-south-1.compute.amazonaws.com',
  port     :  3306,
  user     : 'uvas',
  password : 'OVRuvas@168',
  database : 'huvas'
});

connection.query('SELECT * from person', function(err, rows, fields) {
 if (!err)
   console.log('The solution is: ', rows);
 else
   console.log(err);
});

connection.end();

router.use(require('./service/AuthService.js'));
router.use(require('./service/OrgService.js'));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log('https://huvas-obulareddyveerareddy.c9users.io');
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
