class Artwork < ApplicationRecord
  IMAGE_STYLES = {
    original: '1000>',
    medium: '500>',
    card: '300x300>',
    card_preview: '4x4'
  }

  has_attached_file :image,
    styles: IMAGE_STYLES,
    default_url: '',
    convert_options: {
      card: '-compose Copy -gravity center -extent 300x300'
    }
  validates_attachment :image, content_type: { content_type: /\Aimage/ }, file_name: { matches: [/png\Z/i, /jpe?g\Z/i, /gif\Z/i] }, size: { less_than: 15.megabytes }

  IMAGE_STYLES.each_key do |style|
    define_method "#{ style }_image_url" do
      image.url(style)
    end
  end

  def toggle_published!
    update(published: !published)
  end
end
