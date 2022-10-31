class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.integer :mistakes
      t.integer :user_id
      t.integer :game_id
      t.timestamps
    end
  end
end
