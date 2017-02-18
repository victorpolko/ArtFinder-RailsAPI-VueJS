import VPaginator from 'vuejs-paginator'

VPaginator.template = `
  <ul class="uk-pagination uk-flex-center">
    <li>
      <button class="uk-button uk-button-default uk-button-small uk-width-small" @click="fetchData(prev_page_url)" :disabled="!prev_page_url">
        <span class="uk-margin-small-right" uk-pagination-previous></span>
        Previous
      </button>
    </li>
    <li>
      <button class="uk-button uk-button-default uk-button-small uk-width-small" @click="fetchData(next_page_url)" :disabled="!next_page_url">
        Next
        <span class="uk-margin-small-left" uk-pagination-next></span>
      </button>
    </li>
  </ul>
`

export default {
  data() {
    return {
      artworks: [],
      resource_url: `${ API_URL }/artworks`
    }
  },

  components: {
    VPaginator
  },

  methods: {
    paginate(data) {
      this.artworks = data;
    },

    togglePublished(artwork) {
      $.ajax({
        method: 'PUT',
        url: `${ API_URL }/artworks/${ artwork.id }/toggle_published`,
        success: (res) => {
          artwork.published = res.published;
          // this.resource_url = this.resource_url + ' '; // Force update pagination data
        }
      });
    },

    imagePath(artwork) {
      return `${ API_URL }${ artwork.medium_image_url }`
    },

    escapeRegExp(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
  }
}
