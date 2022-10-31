class Game < ApplicationRecord
    has_many :scores
    has_many :users, through: :scores

    validates :solution, presence: true, uniqueness: true 
    validates :start, presence: true
end
