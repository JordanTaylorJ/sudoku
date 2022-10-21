Rails.application.routes.draw do
  resources :games, only: [:index]
  resources :users, only: [:show, :create, :destory]
  
  post '/signup', to: 'users#create'
  get '/auth', to: "users#show"
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
