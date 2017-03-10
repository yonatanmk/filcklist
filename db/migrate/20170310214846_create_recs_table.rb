class CreateRecsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :recs do |t|
      t.belongs_to :reference, null: false
      t.belongs_to :recommendation, null: false
    end
  end
end
