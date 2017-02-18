// import UIkit from 'uikit'

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
        url: `/api/artworks/${ this.$route.params.artwork_id }`,
        success: (res) => {
          this.artwork = res;
        },
        error: (res) => {
          this.$router.replace({ name: 'errorPage', query: { status: res.status } });
        }
      });
    },

    togglePublished() {
      $.ajax({
        url: `/api/artworks/${ this.$route.params.artwork_id }/toggle_published`,
        type: 'PUT',
        success: (res) => {
          this.artwork.published = res.published;
          // UIkit.notification({
          //   message: `${ this.artwork.title } was ${ this.artwork.published ? 'published' : 'unpublished' }`,
          //   pos: 'top-right',
          //   status: this.artwork.published ? 'success' : 'warning',
          //   timeout: 2000
          // })
        }
      });
    }
  }
}
