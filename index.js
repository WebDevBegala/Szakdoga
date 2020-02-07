var http = require('http');
var server = http.createServer();
var socket_io = require('socket.io');
const fetch = require('node-fetch');
server.listen(3000);
var io = socket_io();

var users = []

io.attach(server);
io.on('connection', function (socket) {
  console.log("Socket connected: " + socket.id);
  socket.on('action', (action) => {
    if (action.type === 'server/login') {
      //console.log(action.data)
      try {
        let data = JSON.parse(action.data);
        data = data.email;
        socket.username = data;
        users[data] = socket.id;
        console.log(users);

      } catch (error) {

      }
      post(io, socket, "login", action.data, "onLogin", false, users)
    }
    else if (action.type === 'server/registration') {
      //post(socket,"registration",action.data,"registered")
      postWithCallback(socket, "registration", action.data, login)


    }
    else if (action.type === 'server/test') {
      //console.log('test data!', action.data);
      socket.emit('action', { type: 'asd', data: action.data });
    }
    else if (action.type === 'server/sendMessage') {
      console.log(action.data)
      io.emit('action', { type: 'newMessage', data: action.data })
    }
    else if (action.type === 'server/searchUser') {
      post(io, socket, "search", action.data, "searched", false, users)
    }
    else if (action.type === 'server/friendRequest') {

      fetch('http://192.168.64.3/php/firstphp/friends.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: "data=" + action.data


      })
        .then(res => res.text())
        .then(res => {
          console.log("Res:", res);
          let to = JSON.parse(action.data);
          to = to.toId
          io.sockets.connected[users[to]].emit('action', { type: "friendRequest", data: res })
        })

    }
  });
});



//---------------------------------------------------

function post(io, socket, libary, data, actionType, private = false, users) {
  console.log(libary, ":", data);

  fetch('http://192.168.64.3/php/firstphp/' + libary + '.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: "data=" + data
  })
    .then(res => res.text())
    .then(res => {
      console.log(res);

      if (!private) {
        socket.emit("action", { type: actionType, data: res })
      }
      else {
        let to = JSON.parse(data);
        to = to.toId
        io.sockets.clients(users[to]).emit('action', { type: "friendRequest", data: res })
      }
    })

}
function postWithCallback(socket, libary, data, cb, io) {
  var registered;

  fetch('http://192.168.64.3/php/firstphp/' + libary + '.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: "data=" + data


  })
    .then(res => res.text())
    .then(res => {
      console.log("Res:", res);
      cb(io, socket, res, data)
    })

}

function login(socket, res, data) {
  if (res) {
    data = JSON.parse(data)
    data = {
      email: data.email,
      password: data.password
    }
    data = JSON.stringify(data)


    post(socket, "login", data, "onLogin")
  }
  else {

  }
}

function privateMessage(io, socket, res, data) {
  console.log(io, res, "asd", data)
  let to = JSON.parse(data);
  to = to.toId
  io.sockets.clients(users[to]).emit('action', { type: "friendRequest", data: data })

}
