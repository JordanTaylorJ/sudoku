class UserSerializer < ActiveModel::Serializer
  attributes :username, :password_digest
  has_many :scores
  has_many :games
end
