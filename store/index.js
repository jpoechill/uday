export const state = () => ({
    loggedIn: false
})

export const mutations = {
    login(state) {
        state.loggedIn = true
    },
    logout(state) {
        state.loggedIn = false
    }
}
