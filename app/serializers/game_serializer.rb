class GameSerializer < ActiveModel::Serializer
  attributes :id, :start, :solution, :difficulty
end
