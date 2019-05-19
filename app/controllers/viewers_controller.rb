class ViewersController < ApplicationController
  def index
    render :json => Viewer.select(:first_name, :last_name, :email, :image).find(request.session[:viewer_id])
  end
end
