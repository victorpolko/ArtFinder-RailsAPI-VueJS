Rails.application.routes.draw do
  root to: 'artworks#welcome'

  concern :paginatable do
    get '(page/:page)', action: :index, on: :collection, as: ''
  end

  resources :artworks, only: [:index, :show], concerns: :paginatable do
    member do
      patch :toggle_published
      put   :toggle_published
    end
  end
end
