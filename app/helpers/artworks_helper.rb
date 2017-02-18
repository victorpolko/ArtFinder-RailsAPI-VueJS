module ArtworksHelper
  def api_url_for(url)
    # url = URI.parse(url)
    # url.path = "/api#{ url.path }"
    url.to_s
  end
end
