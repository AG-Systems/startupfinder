Rails.application.routes.draw do
  devise_for :users
  resources :posts
  get 'api' => 'posts#api'
  root :to => "posts#show", :id => '1'
end
