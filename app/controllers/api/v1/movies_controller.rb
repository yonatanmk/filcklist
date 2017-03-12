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
    # binding.pry
    @movie = Movie.new(movie_params)
    @movie.release_date = "#{@movie.release_date[5..6]}/#{@movie.release_date[8..9]}/#{@movie.release_date[0..3]}"
    if Movie.where("id = #{@movie.id}").length == 0
      if @movie.save
        #create cast for movie
        @cast = get_movie_db_cast_info(@movie.id)['cast']
        # binding.pry
        @cast[0..5].each do |actor|
          @actor = Actor.new(id: actor['id'], name: actor['name'], profile_path: actor['profile_path'])
          if Actor.where("id = #{@actor.id}").length == 0
            if @actor.save
              MovieActor.create(actor_id: actor['id'], movie_id: @movie.id, character: actor['character'])
            end
          else
            MovieActor.create(actor_id: actor['id'], movie_id: @movie.id, character: actor['character'])
          end
        end
        #create director for movie
        directors = get_movie_db_cast_info(@movie.id)['crew'].select{|employee| employee['job'] == 'Director'}
        # binding.pry
        directors.each do |director|
          @director = Director.new(id: director['id'], name: director['name'], profile_path: director['profile_path'])
          if Director.where("id = #{@director.id}").length == 0
            if @director.save
              MovieDirector.create(director_id: director['id'], movie_id: @movie.id)
            end
          else
            MovieDirector.create(director_id: director['id'], movie_id: @movie.id)
          end
        end
        #create recs for movie
        recs = @movie.get_recs[0..3]
        # binding.pry
        recs.each do |rec|
          rec_db = get_movie_db_movie_info(rec["Name"])
          unless rec_db.empty?
            @rec = Rec.new(
              id: rec_db[0]['id'],
              title: rec_db[0]['title'],
              poster_path: rec_db[0]['poster_path'],
              release_date: rec_db[0]['release_date'],
              overview: rec_db[0]['overview'],
              adult: rec_db[0]['adult']
            )
            if Rec.where("id = #{@rec.id}").length == 0
              if @rec.save
                MovieRec.create(rec_id: @rec.id, movie_id: @movie.id)
              end
            else
              MovieRec.create(rec_id: @rec.id, movie_id: @movie.id)
            end
          end
        end
      end

    end
    render json: {}
  end

  def rec
    @user_movies = current_user.user_movies
    @movies = current_user.movies.map do |movie|
      @user_movies.each do |user_movie|
        if movie.id == user_movie.movie_id
          movie.status = user_movie.status
        end
      end
      movie
    end
    @movies = @movies.select{|movie| movie.status == 'like'}
    counter = 0
    until @rec || counter > 10
      recs = []
      until recs.length > 0 || @movies.length == 0 do
        until recs.length > 0 || @movies.length == 0 do
          if @movies.length > 0
            @movie = @movies.sample
            recs = @movie.get_recs
            @movies.delete_if { |movie| movie.id == @movie.id }
          end
        end
        recs.map!{|rec| rec['Name']}
        recs.reject!{|movie| current_user.movies.pluck(:title).include?(movie)}
      end
      rec_title = recs.sample
      @rec = Movie.where(title: rec_title)[0]
      if !@rec && rec_title
        @data = get_movie_db_movie_info(rec_title)
        @rec = @data.find{|movie| movie['title'] == rec_title}
      end
      counter += 1
    end
    unless @rec
      @rec = 'not found'
    end
    render json: {rec: @rec}
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
