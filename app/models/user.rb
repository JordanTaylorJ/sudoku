class User < ApplicationRecord
    has_secure_password 
    validates :username, presence: true
    validates :username, uniqueness: true 
    validates :password, presence: true
    validates :password, length: {in: 3..20}


end
