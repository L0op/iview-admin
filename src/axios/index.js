import _ajax from './axios'

const axios = {
  install (Vue) {
    Vue.prototype.axios = _ajax
  }
}

export default axios