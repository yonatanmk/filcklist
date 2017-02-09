Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "registrations" }
  root "movies#index"
  resources :movies, only: :index
  namespace :api do
    namespace :v1 do
      resources :movies, only: [:index, :show, :create] do
        collection do
          get :rec
        end
      end
      resources :users, only: [:index, :show] do
        collection do
          get :current
        end
      end
      resources :user_movies, only: [:create, :destroy]
      resources :actors, only: [:create]
      resources :movie_actors, only: [:create]
    end
  end

  get '*path', to: 'movies#index'
end
