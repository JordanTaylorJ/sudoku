class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :start
      t.string :solution
      t.string :difficulty

      t.timestamps
    end
  end
end
