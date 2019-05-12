class Command < ApplicationRecord
  belongs_to :theatre
  belongs_to :viewer, foreign_key: 'viewer_id'

  after_create_commit { CommandBroadcastJob.perform_later(self) }
end
