Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :conversations, only: [:index, :create]
  resources :messages, only: [:create, :index]

  post '/login', to: "sessions#create"

  mount ActionCable.server => '/cable'

  namespace :api do
    namespace :v1 do

      resources :categories
      resources :old_stuffs
      resources :chats
      resources :match_comments

      # user actions

      resources :comments
      resources :recommendations

      #resources
      resources :user_resources

      resources :items
      resources :wrestling_resources, only: [:create, :index, :show]


    end
  end

  resources :users, only: [:create, :index]
  resources :current_users, only: [:create, :index]


  post '/login', to: 'auth#create'

  get '/get_user', to: 'auth#show'



end
