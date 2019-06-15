class RemoveCreatedColumnFromTables < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :created
    remove_column :commands, :created
  end
end
