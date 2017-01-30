class Api::V1::UserMoviesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
  end

  def show
  end

  def create
    @user = User.find(user_movie_params[:user_id])
    @movie = Movie.find(user_movie_params[:movie_id])
    @status = user_movie_params[:status]
    if @user.movies.include?(@movie)
      # binding.pry
      @userMovie = UserMovie.where(user: @user, movie: @movie).first
      @userMovie.update(status: @status)
    else
      UserMovie.create(user: @user, movie: @movie, status: @status )
    end
    render json: {}
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def user_movie_params
    params.require(:user_movie).permit(:user_id, :movie_id, :status)
  end

end
