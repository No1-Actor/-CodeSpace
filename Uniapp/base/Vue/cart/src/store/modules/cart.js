const state = {
    items: [],
}
const getters = {

}
const actions = {
    addProductToCart({ commit, state }, products) {
        if (products.inventory > 0) {
            const cartItem = state.items.find(item => item.id === products.id)
            if (!cartItem) {
                commit('pushProductToCart', { id: products.id })
            } else {
                commit('incrementItemQuantity', cartItem)
            }
        }
    }
    //
}
const mutations = {
    pushProductToCart(state, { id }) {
        state.items.push({
            id,
            quantity: 1
        })
    },
    incrementItemQuantity(state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    },
}

export default {
    namespaced: true, // state.cart.state
    state,
    getters,
    actions,
    mutations,
}