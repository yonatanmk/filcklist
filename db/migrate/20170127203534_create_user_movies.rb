class CreateUserMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :user_movies do |t|
      t.belongs_to :user
      t.belongs_to :movie
      t.string :status, default: 'seen'
    end
  end
end
