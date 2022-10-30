class ScoreSerializer < ActiveModel::Serializer
  attributes :mistakes, :game_id

  belongs_to :user
  
end
