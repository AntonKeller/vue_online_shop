import {createStore} from 'vuex'
import axios from "axios";

const url = 'http://localhost:3000/products'

let store = new createStore({
    state: {
        products: [],
    },
    mutations: {
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API: ({commit}) => {
            return axios(url, {method: "GET"})
                .then((res) => {
                    commit('SET_PRODUCTS_TO_STATE', res.data);
                    return res;
                })
                .catch(err => {
                    console.log(err);
                    return err;
                })
        }
    },
    getters: {
        PRODUCTS: (state) => state.products,
    },
});

export default store;