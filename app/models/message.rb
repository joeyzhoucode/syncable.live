class Message < ApplicationRecord
  belongs_to :theatre
  belongs_to :viewer, foreign_key: 'viewer_id'

  validates_presence_of :content

  after_create_commit { MessageBroadcastJob.perform_later(self) }
end
