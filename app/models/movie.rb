class Movie < ApplicationRecord
  validates :title, presence: true

  has_many :user_movies
  has_many :users, through: :user_movies
  has_many :movie_actors
  has_many :actors, through: :movie_actors
  has_many :movie_directors
  has_many :directors, through: :movie_directors

  def recs
    return get_tastekid_info(title)['Similar']['Results'][0..5]
  end

  private

  def tastekid_uri(query)
    query = query.split(' ').join('+')
    URI("https://www.tastekid.com/api/similar?q=movie:#{query}&type=movie&k=#{ENV["TASTEKID_API_KEY"]}")
  end

  def get_tastekid_info(query)
    response = Net::HTTP.get_response(tastekid_uri(query))
    return JSON.parse(response.body)
  end


end
