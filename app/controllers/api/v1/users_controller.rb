class Api::V1::UsersController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @users = User.all.map do |user|
      {id: user.id, username: user.username}
    end
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    @user_movies = @user.user_movies
    @movies = @user.movies.map do |movie|
      @user_movies.each do |user_movie|
        if movie.id == user_movie.movie_id
          movie.status = user_movie.status
        end
      end
      movie
    end
    @userInfo = {
      info: @user,
      movies: @movies
    }
    render json: @userInfo
  end

  def current
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
    render json: @user
  end

  def create
  end

  def destroy
  end

  def update
  end

end
