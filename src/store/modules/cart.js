export default {
  namespaced: true,

  state: {
    all: []
  },

  getters: {
    items: (state, getters, rootState) => {
      return state.all.map((id) => rootState.games.all.find(game => game.id === id))
    },

    numItems: state => state.all.length,

    subtotal: (state, getters) => {
      return getters.items.reduce((acc, cur) => acc + cur.price, 0)
    },

    shippingCost: (state, getters) => {
      return (getters.subtotal < 250) ? state.all.length * 10 : 0
    },

    total: (state, getters) => {
      return getters.subtotal + getters.shippingCost
    }
  },

  mutations: {
    ADD_TO_CART (state, id) {
      if (state.all.includes(id) === false) state.all.push(id)
    },

    REMOVE_FROM_CART (state, id) {
      state.all.splice(state.all.indexOf(id), 1)
    }
  },

  actions: {
    addGame (ctx, id) {
      ctx.commit('ADD_TO_CART', id)
    },

    removeGame (ctx, id) {
      ctx.commit('REMOVE_FROM_CART', id)
    }
  }
}
