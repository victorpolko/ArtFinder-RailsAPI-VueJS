class ArtworksController < ApplicationController
  before_action :fetch_artwork, only: [:show, :toggle_published]

  def index
      @artworks = Artwork.order(:created_at).page(params[:page])
      # Проблема в том, что фотографии хранятся на другом сервере
      # Надо попробовать S3.
      render json: {
        data: @artworks.to_json(
          only:    [:id, :title, :artist, :mediums, :year, :published],
          methods: [:medium_image_url, :original_image_url]
        ),

        current_page: @artworks.current_page,
        last_page: @artworks.total_pages,
        next_page_url: @artworks.next_page ? helpers.api_url_for(url_for(page: @artworks.next_page)) : nil,
        prev_page_url: @artworks.prev_page ? helpers.api_url_for(url_for(page: @artworks.prev_page)) : nil
      }
  end

  def show
    render json: @artwork.to_json(
      only:    [:id, :title, :artist, :mediums, :year, :published],
      methods: [:original_image_url]
    )
  end

  def toggle_published
    if @artwork.toggle_published!
      render json: @artwork.to_json(
        only:    [:id, :title, :artist, :mediums, :year, :published],
        methods: [:medium_image_url]
      )
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
