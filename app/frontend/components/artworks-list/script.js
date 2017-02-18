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
      resource_url: '/api/artworks'
    }
  },

  components: {
    VPaginator
  },

  methods: {
    paginate(data) {
      this.artworks = JSON.parse(data);
    },

    togglePublished(artwork) {
      $.ajax({
        url: `/api/artworks/${ artwork.id }/toggle_published`,
        method: 'PUT',
        success: (res) => {
          artwork.published = res.published;
        }
      });
    },

    escapeRegExp(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
  }
}
