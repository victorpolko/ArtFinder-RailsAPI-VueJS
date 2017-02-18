<template lang="pug">

  .artwork
    nav.uk-navbar-container(uk-navbar)
      .uk-navbar-left
        router-link.uk-navbar-item.uk-logo(:to="{ name: 'index' }")
          img(src="/logo.png")

        ul.uk-breadcrumb
          li
            router-link(:to="{ name: 'index' }")
              | All artworks
          li.uk-active
            span(v-show="artwork.title") {{ artwork.title }} by {{ artwork.artist }}

    .uk-align-center.uk-width-1-2(uk-grid)
      .uk-card.uk-card-default
        .uk-card-media-top
          img(v-bind:src="artwork.image")
          .uk-card-body
            h3.uk-card-title
              | {{ artwork.title }}
              svg.star.uk-align-right(v-bind:class="{ published: artwork.published }" v-on:click="togglePublished()")
                use(xlink:href="#star")
                  title {{ artwork.published ? 'Unpublish me' : 'Publish me' }}
            p {{ artwork.mediums }}
            p {{ artwork.artist }}, {{ artwork.year }}

    svg.uk-hidden(xmlns="http://www.w3.org/2000/svg")
      symbol(id="star" viewBox="0 0 20 20")
        polygon(stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27")
</template>

<script type="text/javascript" src="./script.js"></script>
<style src="./style.sass" lang="sass" scoped></style>
