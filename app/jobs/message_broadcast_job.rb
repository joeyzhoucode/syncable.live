class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    payload = {
      theatre_code: message.theatre.code,
      content: message.content,
      viewer: message.viewer,
      audience: message.theatre.viewers.collect(&:id)
    }

    ActionCable.server.broadcast(build_theatre_code(message.theatre.code), payload)
  end

  def build_theatre_code(code)
    "Theatre-#{code}"
  end
end
