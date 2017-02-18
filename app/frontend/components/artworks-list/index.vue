<template lang="pug">

  .artworks-list
    nav.uk-navbar-container.uk-navbar-transparent(uk-navbar)
      .uk-align-center.uk-margin-remove-bottom
        .uk-navbar-item.uk-logo(:to="{ name: 'index' }")
          img(src="/logo.png")

        .uk-navbar-item
          v-paginator(v-bind:resource_url="resource_url" @update="paginate")

    // Artworks tab content
    div(v-if="artworks.length")
      table.uk-table.uk-table-small.uk-table-middle
        colgroup
          col(width="30%")
          col(width="20%")
          col(width="15%")
          col(width="15%")
          col(width="10%")
          col(width="10%")

        thead
          tr
            th Representation
            th Title
            th Mediums
            th Artist
            th Year
            th

        tbody
          tr(v-for="artwork in artworks")
            td.uk-table-link
              router-link.uk-text-center.uk-link-reset(:to="{ name: 'artwork', params: { artwork_id: artwork.id } }")
                img.uk-width-1-3(:src="artwork.image")
            td.uk-table-link
              router-link.uk-link-reset(:to="{ name: 'artwork', params: { artwork_id: artwork.id } }")
                | {{ artwork.title }}
            td {{ artwork.mediums }}
            td {{ artwork.artist }}
            td {{ artwork.year }}
            td.uk-text-center.published(v-on:click="togglePublished(artwork)")
              svg.star(v-bind:class="{ published: artwork.published }")
                use(xlink:href="#star")
                  title {{ artwork.published ? 'Unpublish me' : 'Publish me' }}

    div(v-else)
      img.uk-align-center.uk-width-1-4(src="/empty.png")

    hr
    svg.uk-hidden(xmlns="http://www.w3.org/2000/svg")
      symbol(id="star" viewBox="0 0 20 20")
        polygon(stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27")

</template>

<script type="text/javascript" src="./script.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
