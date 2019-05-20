require 'faker'

class TheatresController < ApplicationController
  def index
    theatres = Theatre.all.map do |t|
      {id: t.id, code: t.code, viewers: t.viewers.size }
    end
    render json: theatres
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
    render json: Theatre.find(params[:id])
  end

  def destroy
    Theatre.find(params[:id]).destroy
    theatres = Theatre.all.map do |t|
      {id: t.id, code: t.code, viewers: t.viewers.size }
    end
    render json: theatres
  end

  private

  def generateCode
    "#{Faker::Verb.ing_form.humanize}#{Faker::Games::Pokemon.name.humanize}"
  end
end
