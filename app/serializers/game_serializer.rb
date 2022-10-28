class GameSerializer < ActiveModel::Serializer
  attributes :id, :start, :solution 
  has_many :scores
  has_many :users
end
