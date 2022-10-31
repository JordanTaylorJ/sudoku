class ScoresController < ApplicationController

    def create 
        score = Score.create(score_params)
        if score.valid?
            render json: score, status: :created
        else 
            render json: {error: score.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    
    def score_params
        params.permit(:mistakes, :user_id, :game_id)
    end

end
