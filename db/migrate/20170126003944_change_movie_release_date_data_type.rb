class ChangeMovieReleaseDateDataType < ActiveRecord::Migration[5.0]
  def change
    change_column(:movies, :release_date, :string)
  end
end
