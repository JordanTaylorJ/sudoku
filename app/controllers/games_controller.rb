class GamesController < ApplicationController

    def index 
        games = Game.all
        render json: games, include:['scores', 'scores.user']
    end 

    def create
        game = Game.create(game_params)    
        if game.valid?
            render json: game, status: :created
        else 
            render json: {errors: game.errors.full_messages}, status: :unprocessable_entity
        end
    end 

    private

    def game_params
        params.permit(:start, :solution)
    end

end
