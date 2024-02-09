class CreateNews < ActiveRecord::Migration[7.1]
  def change
    create_table :news, id: false do |t|
      t.string :id, limit: 36, null: false, primary_key: true
      t.string :url
      t.text :text

      t.timestamps
    end
  end
end
