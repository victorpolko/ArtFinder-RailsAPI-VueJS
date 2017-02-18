json.data do
  json.array! @artworks, partial: 'artworks/artwork', as: :artwork
end

json.current_page @artworks.current_page
json.last_page @artworks.total_pages
json.next_page_url @artworks.next_page ? url_for(page: @artworks.next_page, only_path: false) : nil
json.prev_page_url @artworks.prev_page ? url_for(page: @artworks.prev_page, only_path: false) : nil
