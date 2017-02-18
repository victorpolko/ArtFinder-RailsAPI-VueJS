export default {
  data() {
    return {
      message: {
        header: '',
        reason: ''
      }
    }
  },

  mounted() {
    this.setMessage(this.$router.currentRoute.query.status);
  },

  methods: {
    setMessage(status) {
      this.message = ((status) => {
        switch(status) {
          case '422':
            return {
              header: `The change you wanted was rejected (422)`,
              reason: `Maybe you tried to change something you didn't have access to.`
            };
          case '500':
            return {
              header: `We're sorry, but something went wrong (500)`,
              reason: `This incident was already reported. We will fix it as soon as possible.`
            };
          default:
            return {
              header: `The page you were looking for doesn't exist (404)`,
              reason: `You may have mistyped the address or the page may have moved.`
            };
        }
      })(status);
    }
  }
}
