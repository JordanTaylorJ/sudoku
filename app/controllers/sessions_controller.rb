class SessionsController < ApplicationController
    
    skip_before_action :authorized, only: :create 

    def create
        byebug 
        user = User.find_by(params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :created
        else 
            render json: {error: "Invalid username or password"}, status: :unauthorized 
        end
    end 

    

end
