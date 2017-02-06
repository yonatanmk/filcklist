class CreateCast < ActiveRecord::Migration[5.0]
  def change
    create_table :actors do |t|
      t.string :name, null: false
      t.string :profile_path, unique: true
    end
  end
end
