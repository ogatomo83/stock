class CreateStocks < ActiveRecord::Migration[7.1]
  def change
    create_table :stocks, id: false do |t|
      t.string :id, limit: 36, null: false, primary_key: true
      t.references :user, type: :string, foreign_key: true
      t.string :name
      t.string :ticker
      t.float :cp
      t.integer :count
      t.date :bought_date

      t.timestamps
    end
  end
end
