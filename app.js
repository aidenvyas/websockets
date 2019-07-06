let app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let axios = require('axios');

const port = 4001;

let names = [];
let serverNames = [];

let interval;

io.on('connection', socket => {
  console.log('new connection');
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 100000);
  socket.on('SEND_NAME_TO_SERVER', name => {
    serverNames = [...serverNames, { socketId: socket.id, name }];
    names = [...names, name];
    socket.broadcast.emit('SEND_NAMES_TO_CLIENTS', names);
    socket.emit('SEND_NAMES_TO_CLIENTS', names);
  });

  socket.on('SOMEONE_PITCHED_IN', name => {
    socket.broadcast.emit('GUESS_WHO_PITCHED_IN', name);
  });

  socket.on('SOMEONE_GOT_ONE', name => {
    socket.broadcast.emit('GUESS_WHO_GOT_ONE', name);
  });

  // socket.on('disconnect', () => {
  //   console.log('client disconnected');

  //   serverNames = serverNames.filter(data => data.socketId !== socket.id);
  //   names = serverNames.map(data => data.name);
  //   socket.broadcast.emit('SEND_NAMES_TO_CLIENTS', names);
  //   socket.emit('SEND_NAMES_TO_CLIENTS', names);
  // });
  socket.on('disconnect', function() {
    console.log('disconnecting');
    socket.emit('disconnected');
  });
});

const getApiAndEmit = async socket => {
  try {
    // const res = await axios.get(
    //   'https://api.darksky.net/forecast/f12786853263ebf57500483345865a1b/37.8267,-122.4233'
    // );
    // socket.emit('FromAPI', res.data.currently.temperature);
    socket.emit('FromAPI', 53);
  } catch (err) {
    console.log('error', err);
  }
};

server.listen(port, () => console.log('on port : ' + port));
