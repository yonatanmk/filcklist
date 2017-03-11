class Movie < ApplicationRecord
  validates :title, presence: true

  has_many :user_movies
  has_many :users, through: :user_movies
  has_many :movie_actors
  has_many :actors, through: :movie_actors
  has_many :movie_directors
  has_many :directors, through: :movie_directors
  has_many :movie_recs
  has_many :recs, through: :movie_recs

  # has_many :recs, through: :get_recs, source: :recommendation
  # has_many :get_recs, foreign_key: :recommendation_id, class_name: "Rec"

  # has_many :refs, through: :get_refs, source: :reference
  # has_many :get_refs, foreign_key: :reference_id, class_name: "Rec"

  def get_recs
    recs = get_tastekid_info(title)['Similar']['Results']
    return recs
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
