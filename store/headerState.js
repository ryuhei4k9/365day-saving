export const state = () => ({
  total: 0
})

export const mutations = {
  addTotal(state, { amount }) {
    state.total += amount
  },

  subtractTotal(state, { amount }) {
    state.total -= amount
  }
}
