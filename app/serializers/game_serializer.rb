class GameSerializer < ActiveModel::Serializer
  attributes :id, :start, :solution, :difficulty
  has_many :scores
  has_many :users
end
