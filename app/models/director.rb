class Director < ApplicationRecord
  validates :name, presence: true

  has_many :movie_directors
  has_many :movies, through: :movie_directors
end
