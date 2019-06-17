class CommandsController < ApplicationController
  COMMAND_TYPE = "COMMAND"

  def index
    all_commands = Command.all.map do |c|
      viewer = Viewer.find_by(id: c.viewer_id)
      theatre = Theatre.find_by(id: c.theatre_id)
      { theatre_code: theatre.code, first_name: viewer.first_name, last_name: viewer.last_name, video_id: c.video_id, seek_seconds: c.seek_seconds, state: c.state, payload_type: COMMAND_TYPE }
    end
    render json: all_commands
  end

  def show
    theatre = Theatre.find_by(code: params[:id])
    theatre_commands = Command.where(theatre_id: theatre.id).map do |c|
      viewer = Viewer.find_by(id: c.viewer_id)
      { first_name: viewer.first_name, last_name: viewer.last_name, video_id: c.video_id, seek_seconds: c.seek_seconds, state: c.state, created_at: c.created_at, payload_type: COMMAND_TYPE }
    end
    render json: theatre_commands
  end
end
