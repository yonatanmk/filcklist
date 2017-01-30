class MoviesController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def show
    # binding.pry
    # @movie = Movie.find(params[:id])
  end

  def create
    # movie = Movie.where("id == #{params[:id]}")
    # binding.pry
    # unless movie
      # movie = Movie.create(id: params[:id], title: params[:title], adult: params[:adult], description: params[:description], image_url: params[:image_url], release_date: params[:release_date])
    # end

    # redirect_to movie_path(movie)
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def movie_params
    # params.require(:movie).permit(:title, :overview)
  end

end
