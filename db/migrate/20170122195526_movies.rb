class Movies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :poster_path
      t.datetime :release_date
      t.text :overview
      t.boolean :adult, default: false
      t.string :status, default: nil
      t.timestamps null: false
    end
  end
end
