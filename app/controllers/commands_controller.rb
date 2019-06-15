class CommandsController < ApplicationController
  def index
    all_commands = Command.all.map do |c|
      { theatre_id: c.theatre_id, viewer_id: c.viewer_id, video_id: c.video_id, seek_seconds: c.seek_seconds, state: c.state, created_at: c.created_at }
    end
    render json: all_commands
  end

  def show
    theatre_commands = Command.where(theatre_id: params[:id]).map do |c|
      { theatre_id: c.theatre_id, viewer_id: c.viewer_id, video_id: c.video_id, seek_seconds: c.seek_seconds, state: c.state, created_at: c.created_at }
    end
    render json: theatre_commands
  end
end
