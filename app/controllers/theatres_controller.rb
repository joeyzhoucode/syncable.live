require 'faker'

class TheatresController < ApplicationController
  def index
    render json: Theatre.all
  end

  def new
    code = generateCode
    while Theatre.exists?(code: code)
      code = generateCode
    end
    render json: { code: code }
  end

  def create
    viewer = Viewer.find(request.session[:viewer_id])
    data = JSON.parse(request.body.read())
    code = data["theatre_code"]
    theatre = Theatre.create!(code: code)
    theatre.viewers << viewer
    render json: { code: code }
  end

  def show
    render json: Theatre.find(params[:id]).viewers
  end

  private

  def generateCode
    "#{Faker::Verb.ing_form.humanize}#{Faker::Creature::Animal.unique.name.humanize}"
  end
end
