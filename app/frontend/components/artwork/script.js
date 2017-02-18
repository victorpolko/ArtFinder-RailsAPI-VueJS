export default {
  data() {
    return {
      artwork: {}
    }
  },

  created() {
    this.fetchData();
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData() {
      $.ajax({
        url: `${ API_URL }/artworks/${ this.$route.params.artwork_id }`,
        success: (res) => {
          this.artwork = res;
        },
        error: (res) => {
          this.$router.replace({ name: 'errorPage', query: { status: res.status } });
        }
      });
    },

    imagePath(artwork) {
      return `${ API_URL }${ artwork.original_image_url }`
    },

    togglePublished() {
      $.ajax({
        url: `${ API_URL }/artworks/${ this.$route.params.artwork_id }/toggle_published`,
        type: 'PUT',
        success: (res) => {
          this.artwork.published = res.published;
        }
      });
    }
  }
}
