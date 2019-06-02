import ActionCable from 'actioncable'

const BASE_URL = "syncable.live"; // "syncable.live";
const ACCESS_TOKEN = "accessToken";
const CLIENT = "client";

export const COMMAND_PAYLOAD = "COMMAND";
export const MESSAGE_PAYLOAD = "MESSAGE";

function theatreConnection(viewerId, callback) {
  let accessToken = localStorage.getItem(ACCESS_TOKEN);
  let client = localStorage.getItem(CLIENT);

  var wsUrl = 'ws://' + BASE_URL + '/cable';
  wsUrl += '?access-token=' + accessToken + '&client=' + client;

  this.viewerId = viewerId;
  this.callback = callback;

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
  } else {
    this.theatreConnections[theatreCode].consumer.connection.open();
    for (const c in this.theatreConnections) {
      if (c !== theatreCode) {
        this.theatreConnections[c].consumer.connection.close();
      }
    }
  }
}

theatreConnection.prototype.disconnect = function() {
  Object.values(this.theatreConnections).forEach(c => c.consumer.connection.close());
}

theatreConnection.prototype.createTheatreConnection = function(theatreCode) {
  var scope = this
  return this.connection.subscriptions.create({channel: 'TheatreChannel', theatre_code: theatreCode, viewer_id: scope.viewerId}, {
    connected: function() {
      console.log('connected to TheatreChannel. Theatre code: ' + theatreCode + '.')
    },
    disconnected: function() {
      console.log('disconnected from TheatreChannel. Theatre code: ' + theatreCode + '.')
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