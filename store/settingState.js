export const state = () => ({
  title: '365日貯金',
  launchDate: null
})

export const mutations = {
  initializeLaunchDate(state, date) {
    if (!this.launchDate) {
      this.launchDate = date
    }
  }
}
