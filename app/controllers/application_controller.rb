class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def login(viewer)
    session[:viewer_id] = viewer.id
  end

  def fallback_index_html
    render :file => 'public/index.html'
  end
end
