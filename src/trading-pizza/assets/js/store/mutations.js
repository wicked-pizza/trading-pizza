export default {
  SET_DATA: (state, { data }) => {
    state.data = data
    state.name = data.name
    state.author = data.copyrightHolder
  },

  SET_TABLE01: (state, { data }) => {
    state.table01 = data
  },

  SET_TABLE02: (state, { data }) => {
    state.table02 = data
  }
}