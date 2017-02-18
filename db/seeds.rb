# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

[
  {
    title: "Solnedgång",
    year: 2017,
    artist: "Per Johansson",
    mediums: "Canvas, oil paint",
    image: "https://images.artworksapp.com/featuredImages/574eaa05a935c2891123861f/Solnedg%C3%A5ng.jpg",
    published: false
  },

  {
    title: "Café ’Ino, Bedford Street",
    year: 1986,
    artist: "Patti Smith",
    mediums: "Photo",
    image: "https://images.artworksapp.com/featuredImages/574eaa05a935c2891123861f/bigOriginal-2.jpg",
    published: false
  },

  {
    title: "Senlandskaber no II",
    year: 2016,
    artist: "Kehnet Nielsen",
    mediums: "Canvas, oil paint",
    image: "http://images.artworksapp.com/featuredImages/5757cd5a922f91fc2a6831b4/master_733266%20%281%29.jpg",
    published: false
  },

  {
    title: "A different kind of scar",
    year: 1987,
    artist: "Donald Baechler",
    mediums: "Canvas, oil paint",
    image: "http://images.artworksapp.com/featuredImages/574eaa05a935c2891123861f/DonaldBaechler6.jpg",
    published: false
  },

  {
    title: "Untitled",
    year: 2017,
    artist: "Anna Rosenbäck",
    mediums: "Canvas, oil paint",
    image: "https://images.artworksapp.com/featuredImages/5757cd5a922f91fc2a6831b4/AnnaRosenb%C3%A4ck2.jpg",
    published: false
  },

  {
    title: "Stegar förbi",
    year: 2015,
    artist: "Anna Tedestam",
    mediums: "Canvas, oil paint",
    image: "https://images.artworksapp.com/featuredImages/588126497405986311482bf9/StegarF%C3%B6rbi%20kopia.jpg",
    published: false
  },

  {
    title: "Composition",
    year: 1954,
    artist: "Sonia Delaunay",
    mediums: "Canvas, oil paint",
    image: "https://images.artworksapp.com/featuredImages/5757cd5a922f91fc2a6831b4/Delaunay_1954.jpg",
    published: false
  },

  {
    title: "Self portrait",
    year: 1975,
    artist: "Tove Jansson",
    mediums: "Canvas, oil paint",
    image: "https://images.artworksapp.com/featuredImages/5757cd5a922f91fc2a6831b4/tove-jansson-sjalvportratt-1975-privatsamling--foto-finlands-nationalgalleri-yehia-eweis-500x800px.jpg",
    published: false
  },

  {
    title: "Borgen",
    year: 2016,
    artist: "Carl Johan De Geer",
    mediums: "Canvas, oil paint",
    image: "https://images.artworksapp.com/featuredImages/5845e242b0c04e5c497e391d/Borgen.jpg",
    published: false
  },

  {
    title: "Svängrum",
    year: 2015,
    artist: "Anna Tedestam",
    mediums: "Canvas, oil paint",
    image: "https://images.artworksapp.com/featuredImages/588126497405986311482bf9/Sv%C3%A4ngrum%202015%20kopia%202.jpg",
    published: false
  },

  {
    title: "Taiga I",
    year: 2017,
    artist: "Sara Forsström",
    mediums: "Canvas, oil paint",
    image: "https://images.artworksapp.com/featuredImages/574eaa05a935c2891123861f/Sara%20Forsstr%C3%B6m.%20%22Taiga%20l%22.%20Oil%20on%20board.%2033x24%20cm.%202017.jpeg",
    published: false
  },

  {
    title: "Porträtt II",
    year: 2015,
    artist: "Katrin Westman",
    mediums: "Canvas, oil paint",
    image: "https://images.artworksapp.com/featuredImages/5757cd5a922f91fc2a6831b4/Ska%CC%88rmavbild%202016-11-16%20kl.%2017.26.27.png",
    published: false
  },

  {
    title: "Parrot Guide II",
    year: 2016,
    artist: "Johanna Fjaestad",
    mediums: "Canvas, oil paint",
    image: "https://images.artworksapp.com/featuredImages/5757cd5a922f91fc2a6831b4/parrot-guide-ii-2mb-webb.jpg",
    published: false
  }
].each do |artwork|
  aw = Artwork.find_or_create_by(
    title:     artwork[:title],
    year:      artwork[:year],
    artist:    artwork[:artist],
    mediums:   artwork[:mediums],
    published: artwork[:published]
  )

  aw.image = URI.parse(artwork[:image])
  aw.save
end
