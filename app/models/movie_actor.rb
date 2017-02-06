class MovieActor < ActiveRecord::Base
  belongs_to :actor
  belongs_to :movie
  validates :character, presence: true
end
