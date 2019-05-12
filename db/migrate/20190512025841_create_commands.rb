class CreateCommands < ActiveRecord::Migration[5.2]
  def change
    create_table :commands do |t|
      t.string :video_id
      t.integer :seek_seconds
      t.string :state
      t.datetime :created

      t.timestamps
    end
  end
end
