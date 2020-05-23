export const state = () => ({
  title: '365日貯金',
  launchDate: null
})

export const mutations = {
  initialize(state, { date }) {
    if (!state.launchDate) {
      state.launchDate = date
    }
  },

  updateTitle(state, { afterTitle }) {
    state.title = afterTitle
  },

  resetSettings(state, { date }) {
    state.title = '365日貯金'
    state.launchDate = date
  }
}
