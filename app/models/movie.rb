class Movie < ApplicationRecord
  validates :title, presence: true

  has_many :user_movies
  has_many :users, through: :user_movies
  has_many :movie_actors
  has_many :actors, through: :movie_actors
end
