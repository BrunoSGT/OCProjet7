/*
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store ({
    state: {
        users: []
        currentUser: {name: "Test Bulot"}
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        }
    },
    actions: {
        async loadUsers({ commit }) {
            let response = await Api().get('./user');
            let users = response.data.date;
            commit('SET_USERS', users.map(u => u.attributes));
        }
    }
})
*/