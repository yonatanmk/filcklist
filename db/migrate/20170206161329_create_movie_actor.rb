class CreateMovieActor < ActiveRecord::Migration[5.0]
  def change
    create_table :movie_actors do |t|
      t.belongs_to :movie, null: false
      t.belongs_to :actors, null: false
      t.string :character, null: false
    end
  end
end
