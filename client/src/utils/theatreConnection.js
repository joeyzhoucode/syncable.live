import ActionCable from 'actioncable'

const BASE_URL = "syncable.live"; // "syncable.live";
const ACCESS_TOKEN = "accessToken";
const CLIENT = "client";

export const COMMAND_TYPE = "COMMAND";
export const MESSAGE_TYPE = "MESSAGE";

function theatreConnection(viewerId, callback, connectionType) {
  let accessToken = localStorage.getItem(ACCESS_TOKEN);
  let client = localStorage.getItem(CLIENT);

  var wsUrl = 'ws://' + BASE_URL + '/cable';
  wsUrl += '?access-token=' + accessToken + '&client=' + client;

  this.viewerId = viewerId;
  this.callback = callback;
  this.connectionType = connectionType;

  this.connection = ActionCable.createConsumer(wsUrl);
  this.theatreConnections = {};
}

theatreConnection.prototype.command = function(videoId, seekSeconds, state, theatreCode) {
  let theatreConnObj = this.theatreConnections[theatreCode];
  if (theatreConnObj) {
    theatreConnObj.broadcastCommand(videoId, seekSeconds, state);
  } else {
    console.log('Error: Cannot find theatre connection');
  }
}

theatreConnection.prototype.message = function(content, theatreCode) {
  let theatreConnObj = this.theatreConnections[theatreCode];
  if (theatreConnObj) {
    theatreConnObj.broadcastMessage(content);
  } else {
    console.log('Error: Cannot find theatre connection');
  }
}

theatreConnection.prototype.openNewTheatre = function(theatreCode) {
  if (theatreCode !== undefined && !(theatreCode in this.theatreConnections)) {
    this.theatreConnections[theatreCode] = this.createTheatreConnection(theatreCode);
  }
}

theatreConnection.prototype.disconnect = function() {
  Object.values(this.theatreConnections).forEach(c => {
    c.consumer.disconnect();
  });
}

theatreConnection.prototype.createTheatreConnection = function(theatreCode) {
  let scope = this;
  let connectionType;
  switch(scope.connectionType) {
    case COMMAND_TYPE:
      connectionType = "Player";
      break;
    case MESSAGE_TYPE:
      connectionType = "Messenger";
      break;
    default:
      connectionType = undefined;
  }
  return this.connection.subscriptions.create({channel: 'TheatreChannel', theatre_code: theatreCode, viewer_id: scope.viewerId}, {
    connected: function() {
      console.log(connectionType + ' connected to TheatreChannel. Theatre code: ' + theatreCode + '.')
    },
    disconnected: function() {
      console.log(connectionType +  ' disconnected from TheatreChannel. Theatre code: ' + theatreCode + '.')
    },
    received: function(data) {
      if (data.audience.indexOf(scope.viewerId) !== -1) {
        return scope.callback(data)
      }
    },
    broadcastCommand: function(videoId, seekSeconds, state) {
      return this.perform('broadcast_command', {
        theatre_code: theatreCode,
        video_id: videoId,
        seek_seconds: seekSeconds,
        state: state,
        viewer_id: scope.viewerId
      })
    },
    broadcastMessage: function(content) {
      return this.perform('broadcast_message', {
        theatre_code: theatreCode,
        viewer_id: scope.viewerId,
        content: content
      })
    }
  })
}

export default theatreConnection;