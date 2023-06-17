const noVNC = require('novnc');

function establishVNCConnection() {
  const vncClient = new noVNC.Client(new noVNC.RFB2WebSocket('ws://vnc-server:5900'));

  // Rest of the code to handle VNC events, display remote desktop, etc.
  
  return vncClient;
}

module.exports = { establishVNCConnection };
