import ActionCable from 'actioncable'

const BASE_URL = "localhost:3001";
const ACCESS_TOKEN = "access_token";
const CLIENT = "client";

function SyncConnection(viewerId, callback) {
  let access_token = localStorage.getItem(ACCESS_TOKEN)
  let client = localStorage.getItem(CLIENT)

  var wsUrl = 'ws://' + BASE_URL + '/cable'
  wsUrl += '?access-token=' + access_token + '&client=' + client

  this.viewerId = viewerId
  this.callback = callback

  this.connection = ActionCable.createConsumer(wsUrl)
  this.theatreConnections = {}
}

SyncConnection.prototype.talk = function(message, theatreCode) {
  let theatreConnObj = this.theatreConnections[theatreCode]
  if (theatreConnObj) {
    theatreConnObj.conn.speak(message);
  } else {
    console.log('Error: Cannot find theatre connection')
  }
}

SyncConnection.prototype.openNewTheatre = function(theatreCode) {
  if (theatreCode !== undefined) {
    this.theatreConnections[theatreCode] = {conn: this.createTheatreConnection(theatreCode)};
  }
}

SyncConnection.prototype.disconnect = function() {
  Object.values(this.theatreConnections).forEach(c => c.conn.consumer.connection.close())
}

SyncConnection.prototype.createTheatreConnection = function(theatreCode) {
  var scope = this
  return this.connection.subscriptions.create({channel: 'TheatreChannel', theatre_code: theatreCode, viewer: scope.viewerId}, {
    connected: function() {
      console.log('connected to TheatreChannel. Theatre code: ' + theatreCode + '.')
    },
    disconnected: function() {
      console.log('disconnected from TheatreChannel. Theatre code: ' + theatreCode + '.')
    },
    received: function(data) {
      if (data.audience.indexOf(scope.viewerId) != -1) {
        return scope.callback(data)
      }
    },
    speak: function(message) {
      return this.perform('speak', {
        theatre_code: theatreCode,
        message: message,
        viewer: scope.viewerId
      })
    }
  })
}

export default SyncConnection