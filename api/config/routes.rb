Rails.application.routes.draw do
  scope :api do
    scope :v1 do
      resources :users, only: %i[create]
      resource :session, only: %i[create destroy]
      resources :stocks, only: %i[create]
    end
  end
end
