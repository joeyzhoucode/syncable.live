class SessionsController < ApplicationController

  def new
    redirect_to '/auth/google_oauth2'
  end

  def create
    origin = request.env['omniauth.origin']
    access_token = request.env["omniauth.auth"]
    viewer = Viewer.from_omniauth(access_token)
    login(viewer)

    # Access_token is used to authenticate request made from the rails application to the google server
    viewer.google_token = access_token.credentials.token

    # Refresh_token to request new access_token
    # Note: Refresh_token is only sent once during the first request
    refresh_token = access_token.credentials.refresh_token
    viewer.google_refresh_token = refresh_token if refresh_token.present?
    viewer.save

    redirect_to origin
  end
end
