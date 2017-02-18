class ArtworksController < ApplicationController
  before_action :fetch_artwork, only: [:show, :toggle_published]

  def index
    sorting = params[:sort] || :created_at
    @artworks = Artwork.order(sorting).page(params[:page])
  end

  def show; end

  def toggle_published
    if @artwork.toggle_published!
      render :show
    else
      render json: { errors: @artwork.errors.messages }, status: 422
    end
  end

  def welcome
    render json: {
      message: 'Hello! Fire requests at those paths!',
      paths: {
        all_artworks: '/artworks/',
        single_artwork: '/artworks/:id',
        toggle_published: '/artworks/:id/toggle_published'
      }
    }
  end

  private

  def fetch_artwork
    @artwork = Artwork.find_by(id: params[:id])

    unless @artwork
      render json: { message: "Couldn't find artwork with id == #{ params[:id] }" }
    end
  end
end
