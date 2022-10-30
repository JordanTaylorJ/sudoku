class ScoreSerializer < ActiveModel::Serializer
  attributes :mistakes, :complete, :user_id
  belongs_to :user
  belongs_to :game 
end
