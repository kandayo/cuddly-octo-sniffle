import mock from '@/api/games.json'

export default {
  namespaced: true,

  state: {
    filter: 'score',
    all: mock
  },

  getters: {
    filter: state => state.filter,

    find: (state) => (id) => state.all.find((game) => game.id === id),

    all: state => {
      const sorted = state.all.sort((a, b) => (a[state.filter] < b[state.filter]) ? 1 : -1)
      if (state.filter === 'name') sorted.reverse()
      return sorted
    }
  },

  mutations: {
    SET_FILTER (state, selected) {
      state.filter = selected.target.value
    }
  },

  actions: {
    setFilter (ctx, filter) {
      ctx.commit('SET_FILTER', filter)
    }
  }
}
