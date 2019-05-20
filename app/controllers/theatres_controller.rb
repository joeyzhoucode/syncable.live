class TheatresController < ApplicationController
  def index
    render json: Theatre.all
  end

  def show
    render json: Theatre.find(params[:id]).viewers
  end
end
