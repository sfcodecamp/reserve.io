var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build/')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const server = app.listen(process.env.PORT || 8000, () => console.log('Express Server is listening on port 8000'));

const io = require('socket.io')(server);

io.on('connection', (socket) => {
	// inital connection of any client
  console.log('A new user connected');

	socket.on('init', () => {
    console.log('A user sent init event!');
    socket.emit('welcome', 'Welcome, you are connected!');
	});

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

io.set('origins', 'https://aqueous-reef-24485.herokuapp.com/*');
