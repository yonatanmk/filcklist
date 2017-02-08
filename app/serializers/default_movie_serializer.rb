class DefaultMovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :poster_path, :release_date, :overview, :adult, :status
end
