class GameSerializer < ActiveModel::Serializer
  attributes :id, :start, :solution 
  has_many :scores, serializer: ScoreSerializer

end
