class MovieRec < ActiveRecord::Base
  belongs_to :rec
  belongs_to :movie
end
