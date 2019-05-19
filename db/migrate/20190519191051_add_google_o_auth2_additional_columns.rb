class AddGoogleOAuth2AdditionalColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :viewers, :name, :first_name
    add_column :viewers, :last_name, :string
    add_column :viewers, :image, :string
  end
end
