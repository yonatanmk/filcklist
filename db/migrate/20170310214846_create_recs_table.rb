class CreateRecsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :recs do |t|
      t.string :title, null: false
      t.string :poster_path
    end
  end
end
