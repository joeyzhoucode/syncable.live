class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception, unless: -> { request.format.json? }

  def index
    render :file => 'public/index.html'
  end
end
