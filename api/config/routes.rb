Rails.application.routes.draw do
  scope :api do
    scope :v1 do
      resources :users, only: %i[create]
      resource :sessions, only: %i[create destroy]
      resources :news
      resources :stocks, only: %i[create]
    end
  end
end
