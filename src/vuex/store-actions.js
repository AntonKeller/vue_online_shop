import axios from "axios";

const url = 'http://localhost:3000/products';

const storeActions = () => {
    return {

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
        },

        ADD_TO_CART: ({commit}, product) => {
            commit('SET_CART', product);
        },

        DELETE_FROM_CART: ({commit}, index) => {
            commit('REMOVE_FROM_CART', index);
        }
    }
}

export default storeActions