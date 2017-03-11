class Rec < ActiveRecord::Base
  validates :title, presence: true
end
