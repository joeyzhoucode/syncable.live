class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    render :file => 'public/index.html'
  end
end
