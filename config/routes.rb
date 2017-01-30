Rails.application.routes.draw do
  devise_for :users
  root "movies#index"
  get '*path', to: 'movies#index'
  resources :movies, only: :index
  namespace :api do
    namespace :v1 do
      resources :movies, only: [:index, :show, :create]
    end
  end
  namespace :api do
    namespace :v1 do
      resources :users, only: :index
    end
  end
  namespace :api do
    namespace :v1 do
      resources :user_movies, only: [:create, :destroy]
    end
  end
end
