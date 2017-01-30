class MoviesController < ApplicationController
  before_action :authenticate_user!

  def index
    @user_movies = current_user.user_movies
    @movies = current_user.movies.map do |movie|
      @user_movies.each do |user_movie|
        if movie.id == user_movie.movie_id
          movie.status = user_movie.status
        end
      end
      movie
    end
    @user = {
      info: current_user,
      movies: @movies
    }
    respond_to do |format|
      format.html
      format.json { render json: @user }
    end
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
