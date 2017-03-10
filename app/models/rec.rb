class Rec < ActiveRecord::Base
  belongs_to :reference, foreign_key: 'reference_id', class_name: 'Movie'
  belongs_to :recommendation, foreign_key: 'recommendation_id', class_name: 'Movie'
end
