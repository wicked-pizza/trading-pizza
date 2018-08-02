export default {
  name (state) {
    return state.name
  },

  author (state) {
    return state.author
  },

  data (state) {
    return state.data
  },

  table01 (state) {
    return state.table01
  },

  table02 (state) {
    return state.table02
  },

  isBrowserShow (state) {
    return state.browser.show
  },

  browserTitle (state) {
    return state.browser.title
  },

  browserUrl (state) {
    return state.browser.url
  }
}