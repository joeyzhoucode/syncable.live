Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  # Routes for Google authentication
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/welcome')

  get 'welcome', to: 'static#index'
  get '*path', to: redirect('/welcome'), constraints: ->(request) do
    request.session[:viewer_id].nil?
  end

  scope '/api' do
    resources :theatres
  end

  get '*path', to: "application#index", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
