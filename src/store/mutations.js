import * as types from './mutation-types'

const mutations = {
  [types.SET_SHOW_BAR] (state, boolean) {
    state.showBar = boolean
  }
}

export default mutations
