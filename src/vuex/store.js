import {createStore} from 'vuex';
import storeMutations from "@/vuex/store-mutations";
import storeActions from "@/vuex/store-actions";
import storeGetters from "@/vuex/store-getters";
import storeState from "@/vuex/store-state";

let store = new createStore({
    state: storeState(),
    mutations: storeMutations(),
    actions: storeActions(),
    getters: storeGetters(),
});

export default store;