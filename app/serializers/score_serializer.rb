class ScoreSerializer < ActiveModel::Serializer
  attributes :mistakes, :complete
  belongs_to :user
  belongs_to :game 
end
