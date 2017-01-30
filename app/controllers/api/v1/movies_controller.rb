require "dotenv"
Dotenv.load

class Api::V1::MoviesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @data = get_movie_db_info(params[:query])
    render json: @data
  end

  def show
    @movie = Movie.find(params[:id])
    render json: @movie
  end

  def create
    @movie = Movie.new(movie_params)
    @movie.release_date = "#{@movie.release_date[5..6]}/#{@movie.release_date[8..9]}/#{@movie.release_date[0..3]}"
    if Movie.where("id = #{@movie.id}").length == 0
      @movie.save
    end
    render json: {}
  end

  def destroy
    # data = JSON.parse(request.body.read)
    # restaurant = Restaurant.find(data["id"])
    # if restaurant.delete
    #   @restaurants = Restaurant.all
    #   @restaurants.order(:id)
    #   render json: @restaurants
    # end
  end

  def update
    # data = JSON.parse(request.body.read)
    # restaurant = Restaurant.find(data["id"])
    # if data["type"] == "up_vote"
    #   restaurant.up_votes += 1
    #   restaurant.save
    #   @restaurants = Restaurant.order(:id)
    #   render json: @restaurants
    # elsif data["type"] == "down_vote"
    #   restaurant.down_votes += 1
    #   restaurant.save
    #   @restaurants = Restaurant.order(:id)
    #   render json: @restaurants
    # end
  end

  private

  def movie_params
    params.require(:movie).permit(:id, :title, :poster_path, :release_date, :overview, :adult)
  end

  def movie_db_uri(query)
    query = query.split(' ').join('+')
    URI("https://api.themoviedb.org/3/search/movie?query=#{query}&api_key=#{ENV["MOVIE_DB_API_KEY"]}")
  end

  def get_movie_db_info(query)
    response = Net::HTTP.get_response(movie_db_uri(query))
    return JSON.parse(response.body)['results']
  end
end
