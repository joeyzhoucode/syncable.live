Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  # Routes for Google authentication
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/welcome')

  get 'welcome', to: 'static#index'
  root to: 'static#index', constraints: ->(request) do
    request.session[:viewer_id].nil? && !request.xhr? && request.format.html?
  end

  get '*path', to: redirect('/login'), constraints: ->(request) do
    request.session[:viewer_id].nil? && !request.xhr? && request.format.html?
  end

  scope '/api' do
    get 'viewer', to: 'viewers#show'
    get 'theatres/new', to: 'theatres#new'
    resources :theatres
    resources :viewers
  end

  get '*path', to: "application#index", constraints: ->(request) do
    request.session[:viewer_id] && !request.xhr? && request.format.html?
  end
end
