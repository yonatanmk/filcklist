class CreateMovieRecs < ActiveRecord::Migration[5.0]
  def change
    create_table :movie_recs do |t|
      t.belongs_to :movie, null: false
      t.belongs_to :rec, null: false
    end
  end
end
