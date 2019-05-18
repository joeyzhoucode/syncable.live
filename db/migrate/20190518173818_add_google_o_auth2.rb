class AddGoogleOAuth2 < ActiveRecord::Migration[5.2]
  def change
    add_column :viewers, :email, :string
    add_column :viewers, :google_token, :string
    add_column :viewers, :google_refresh_token, :string
  end
end
