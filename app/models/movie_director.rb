class MovieDirector < ActiveRecord::Base
  belongs_to :director
  belongs_to :movie
end
