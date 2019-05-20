import ActionCable from 'actioncable'

const BASE_URL = "syncable.live"; // "syncable.live";
const ACCESS_TOKEN = "access_token";
const CLIENT = "client";

function theatreConnection(viewerId, callback) {
  let access_token = localStorage.getItem(ACCESS_TOKEN)
  let client = localStorage.getItem(CLIENT)

  var wsUrl = 'ws://' + BASE_URL + '/cable'
  wsUrl += '?access-token=' + access_token + '&client=' + client

  this.viewerId = viewerId
  this.callback = callback

  this.connection = ActionCable.createConsumer(wsUrl)
  this.theatreConnections = {}
}

theatreConnection.prototype.command = function(video_id, seek_seconds, state, theatre_code) {
  let theatreConnObj = this.theatreConnections[theatre_code]
  if (theatreConnObj) {
    theatreConnObj.conn.update(video_id, seek_seconds, state);
  } else {
    console.log('Error: Cannot find theatre connection')
  }
}

theatreConnection.prototype.openNewTheatre = function(theatre_code) {
  if (theatre_code !== undefined) {
    this.theatreConnections[theatre_code] = {conn: this.createTheatreConnection(theatre_code)};
  }
}

theatreConnection.prototype.disconnect = function() {
  Object.values(this.theatreConnections).forEach(c => c.conn.consumer.connection.close())
}

theatreConnection.prototype.createTheatreConnection = function(theatre_code) {
  var scope = this
  return this.connection.subscriptions.create({channel: 'TheatreChannel', theatre_code: theatre_code, viewer_id: scope.viewerId}, {
    connected: function() {
      console.log('connected to TheatreChannel. Theatre code: ' + theatre_code + '.')
    },
    disconnected: function() {
      console.log('disconnected from TheatreChannel. Theatre code: ' + theatre_code + '.')
    },
    received: function(data) {
      if (data.audience.indexOf(scope.viewerId) !== -1) {
        return scope.callback(data)
      }
    },
    update: function(video_id, seek_seconds, state) {
      return this.perform('update', {
        theatre_code: theatre_code,
        video_id: video_id,
        seek_seconds: seek_seconds,
        state: state,
        viewer_id: scope.viewerId
      })
    }
  })
}

export default theatreConnection