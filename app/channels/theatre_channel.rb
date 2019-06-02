class TheatreChannel < ApplicationCable::Channel
  def subscribed
    if params[:theatre_code].present?
      # creates a private chat theatre with a unique name
      stream_from("Theatre-#{(params[:theatre_code])}")
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def broadcast_message(data)
    viewer = get_viewer(data['viewer_id'])
    theatre_code = data['theatre_code']
    content = data['content']

    raise 'No theatre_code!' if theatre_code.blank?
    theatre = get_theatre(theatre_code) # A theatre is a theatre
    raise 'No theatre found!' if theatre.blank?
    raise 'No content!' if content.blank?

    # adds the message viewer to the theatre if not already included
    theatre.viewers << viewer unless theatre.viewers.include?(viewer)
    # saves the message and its data to the DB
    # Note: this does not broadcast to the clients yet!
    Message.create!(
      theatre: theatre,
      viewer: viewer,
      content: content
    )
  end

  def broadcast_command(data)
    viewer = get_viewer(data['viewer_id'])
    theatre_code = data['theatre_code']

    raise 'No theatre_code!' if theatre_code.blank?
    theatre = get_theatre(theatre_code) # A theatre is a theatre
    raise 'No theatre found!' if theatre.blank?
    raise 'No video_id, seek_seconds, or state!' if data['video_id'].blank? && data['seek_seconds'].blank? && data['state'].blank?

    # adds the command viewer to the theatre if not already included
    theatre.viewers << viewer unless theatre.viewers.include?(viewer)
    # saves the command and its data to the DB
    # Note: this does not broadcast to the clients yet!
    Command.create!(
      theatre: theatre,
      viewer: viewer,
      video_id: data['video_id'],
      seek_seconds: data['seek_seconds'],
      state: data['state'],
    )
  end

  private

  def get_viewer(id)
    Viewer.find_by(id: id)
  end

  def get_theatre(code)
    Theatre.find_by(code: code)
  end
end
