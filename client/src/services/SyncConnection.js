import ActionCable from 'actioncable'

const BASE_URL = "syncable.live"; // "syncable.live";
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

SyncConnection.prototype.command = function(video_id, seek_seconds, state, theatreCode) {
  let theatreConnObj = this.theatreConnections[theatreCode]
  if (theatreConnObj) {
    theatreConnObj.conn.update(video_id, seek_seconds, state);
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
    update: function(video_id, seek_seconds, state) {
      return this.perform('update', {
        theatre_code: theatreCode,
        video_id: video_id,
        seek_seconds: seek_seconds,
        state: state,
        viewer: scope.viewerId
      })
    }
  })
}

export default SyncConnection