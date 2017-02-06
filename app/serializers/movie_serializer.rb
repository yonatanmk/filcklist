class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :poster_path, :release_date, :overview, :adult, :status

  has_many :actors
end
