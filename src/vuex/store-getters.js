const storeGetters = () => {
    return {
        PRODUCTS: (state) => state.products,
        CART: (state) => state.cart,
    }
}

export default storeGetters