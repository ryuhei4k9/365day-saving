export const state = () => ({
  cells: Array(365)
    .fill(0)
    .map((_, i) => {
      return Object.create(Object.prototype, {
        number: {
          value: i + 1,
          writable: false,
          enumerable: true
        },
        isDone: {
          value: false,
          writable: true,
          enumerable: true
        }
      })
    })
})

export const mutations = {
  toggleDone(state, { cellNumber }) {
    const index = state.cells.findIndex((cell) => cell.number === cellNumber)
    if (index >= 0) {
      state.cells[index].isDone = !state.cells[index].isDone
    }
  }
}
