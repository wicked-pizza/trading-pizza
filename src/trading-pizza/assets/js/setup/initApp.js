import Vue from 'vue'
import App from '../components/App.vue'
import { createStore } from '../store/index'
import { JSON, atParams } from '../api/index'
import axios from 'axios'

export default () => {
  const app = window.app = new Vue({
    el: '#app',
    store: createStore(),
    render: h => h(App)
  })

  axios.get(JSON.index).then((res) => {
    app.$store.dispatch('SET_DATA', { data: res.data })
  })

  axios.get(JSON.table01, {
    params: atParams.table01
  }).then((res) => {
    app.$store.dispatch('SET_TABLE01', { data: res.data.records })
  })

  axios.get(JSON.table02, {
    params: atParams.table01
  }).then((res) => {
    app.$store.dispatch('SET_TABLE02', { data: res.data.records })
  })

  return app
}