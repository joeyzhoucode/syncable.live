class CreateCommands < ActiveRecord::Migration[5.2]
  def change
    create_table :commands do |t|
      t.belongs_to :theatre, index: true
      t.belongs_to :viewer, index: true

      t.string :video_id
      t.decimal :seek_seconds
      t.string :state
      t.datetime :created

      t.timestamps
    end
  end
end
