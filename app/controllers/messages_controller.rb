class MessagesController < ApplicationController
  MESSAGE_TYPE = "MESSAGE"

  def index
    all_messages = Message.all.map do |m|
      viewer = Viewer.find_by(id: m.viewer_id)
      theatre = Theatre.find_by(id: m.theatre_id)
      { theatre_code: theatre.code, first_name: viewer.first_name, last_name: viewer.last_name, content: m.content, payload_type: MESSAGE_TYPE }
    end
    render json: all_messages
  end

  def show
    theatre = Theatre.find_by(code: params[:id])
    theatre_messages = Message.where(theatre_id: theatre.id).map do |m|
      viewer = Viewer.find_by(id: m.viewer_id)
      { first_name: viewer.first_name, last_name: viewer.last_name, content: m.content, payload_type: MESSAGE_TYPE }
    end
    render json: theatre_messages
  end
end
