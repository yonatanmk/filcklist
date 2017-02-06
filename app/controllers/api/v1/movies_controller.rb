class Api::V1::MoviesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @data = get_movie_db_movie_info(params[:query])
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
      if @movie.save
        @cast = get_movie_db_cast_info(@movie.id)
        @cast[0..5].each do |actor|
          @actor = Actor.new(id: actor['id'], name: actor['name'], profile_path: actor['profile_path'])
          if Actor.where("id = #{@actor.id}").length == 0
            @actor.save
          end
          MovieActor.create()
          MovieActor.create(actor: @actor, movie: @movie, character: actor['character'])
        end
      end
    end
    render json: {}
  end

  def destroy
  end

  def update
  end

  private

  def movie_params
    params.require(:movie).permit(:id, :title, :poster_path, :release_date, :overview, :adult)
  end

  def movie_db_movie_uri(query)
    query = query.split(' ').join('+')
    URI("https://api.themoviedb.org/3/search/movie?query=#{query}&api_key=#{ENV["MOVIE_DB_API_KEY"]}")
  end

  def get_movie_db_movie_info(query)
    response = Net::HTTP.get_response(movie_db_movie_uri(query))
    return JSON.parse(response.body)['results']
  end

  def movie_db_cast_uri(id)
    URI("https://api.themoviedb.org/3/movie/#{id}/casts?api_key=#{ENV["MOVIE_DB_API_KEY"]}")
  end

  def get_movie_db_cast_info(id)
    response = Net::HTTP.get_response(movie_db_cast_uri(id))
    return JSON.parse(response.body)['cast']
  end
end
