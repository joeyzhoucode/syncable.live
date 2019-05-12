class CreateTheatresViewersJoinTable < ActiveRecord::Migration[5.2]
  def up
    create_table :theatres_viewers, :id => false do |t|
      t.belongs_to :theatre, index: true
      t.belongs_to :viewer, index: true
    end
  end

  def down
    drop_table :theatres_viewers
  end
end
