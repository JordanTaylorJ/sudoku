class ScoreSerializer < ActiveModel::Serializer
  attributes :time, :errors
  belongs_to :user
  belongs_to :game 
end
