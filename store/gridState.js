export const state = () => ({
  cells: [
    { number: 1, isDone: false },
    { number: 2, isDone: false },
    { number: 3, isDone: false },
    { number: 4, isDone: false },
    { number: 5, isDone: false },
    { number: 6, isDone: false },
    { number: 7, isDone: false },
    { number: 8, isDone: false },
    { number: 9, isDone: false },
    { number: 10, isDone: false },
    { number: 11, isDone: false },
    { number: 12, isDone: false },
    { number: 13, isDone: false },
    { number: 14, isDone: false },
    { number: 15, isDone: false },
    { number: 16, isDone: false },
    { number: 17, isDone: false },
    { number: 18, isDone: false },
    { number: 19, isDone: false },
    { number: 20, isDone: false }
  ]
})

export const mutations = {
  toggleDone(state, { cellNumber }) {
    const index = state.cells.findIndex((cell) => cell.number === cellNumber)
    if (index >= 0) {
      state.cells[index].isDone = !state.cells[index].isDone
    }
  }
}
