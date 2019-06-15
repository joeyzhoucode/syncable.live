class MessagesController < ApplicationController
  def index
    all_messages = Message.all.map do |m|
      { theatre_id: m.theatre_id, viewer_id: m.viewer_id, content: m.content }
    end
    render json: all_messages
  end

  def show
    theatre_messages = Message.where(theatre_id: params[:id]).map do |m|
      { theatre_id: m.theatre_id, viewer_id: m.viewer_id, content: m.content }
    end
    render json: theatre_messages
  end
end
