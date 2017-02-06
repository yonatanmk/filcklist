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
    # binding.pry
    if Movie.where("id = #{@movie.id}").length == 0
      if @movie.save
        # binding.pry
        @cast = get_movie_db_cast_info(@movie.id)['cast']
        @cast[0..5].each do |actor|
          @actor = Actor.new(id: actor['id'], name: actor['name'], profile_path: actor['profile_path'])
          # binding.pry
          if Actor.where("id = #{@actor.id}").length == 0
            # binding.pry
            @actor.save
            # binding.pry
          end
          # binding.pry
          MovieActor.create(actor_id: actor['id'], movie_id: @movie.id, character: actor['character'])
          # binding.pry
        end
        directors = get_movie_db_cast_info(@movie.id)['crew'].select{|employee| employee['job'] == 'Director'}
        directors.each do |director|
          @director = Director.new(id: director['id'], name: director['name'], profile_path: director['profile_path'])
          # binding.pry
          if Director.where("id = #{@director.id}").length == 0
            @director.save
            # binding.pry
          end
          MovieDirector.create(director_id: director['id'], movie_id: @movie.id)
          # binding.pry
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
    return JSON.parse(response.body)
  end
end
