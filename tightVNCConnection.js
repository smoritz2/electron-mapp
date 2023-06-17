const noVNC = require('novnc');

function establishVNCConnection(connectionname) {
  //const vncClient = new noVNC.Client(new noVNC.RFB2WebSocket('ws://vnc-server:5900'));
  console.log(`Establishing TightVNC connection for: ${connectionName}`);
  // Rest of the code to handle VNC events, display remote desktop, etc.
  
  //return vncClient;
}

module.exports = { establishVNCConnection };
