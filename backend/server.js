//importing app.js
const app = require('./backend/app');

//creating the http server
const http = require('http');
const server = http.createServer(app);

//setting up the port
const port = process.env.PORT || 5001;

//starting the server
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

//handling server errors
server.on('error', (error) => {
    console.error('Server error:', error);
    process.exit(1);
  });