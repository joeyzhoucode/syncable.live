class ViewersController < ApplicationController
  def show
    viewer_id = params[:id] || request.session[:viewer_id]
    render json: Viewer.select(:id, :first_name, :last_name, :email, :image).find(viewer_id)
  end
end
