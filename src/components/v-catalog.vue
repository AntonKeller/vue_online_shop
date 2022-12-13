



<template>
    <div class="v-catalog">
       <router-link :to="{name: 'cart', params: {cart_data: CART} }">
           <div class="v-catalog__link_to_cart">Cart: {{CART.length}}</div>
       </router-link>

        <h1>
            Catalog
            {{CART}}
        </h1>

        <div class="v-catalog__list">

            <v-catalog-item
                    v-for="product in PRODUCTS"
                    :key="product.article"
                    :product_data="product"
                    @addToCart="addToCart"
            />

        </div>
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item.vue'
    import {mapActions, mapGetters} from "vuex";


    export default {
        name: "v-catalog",
        components: {
            vCatalogItem
        },
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART',
            ])
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART',
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
            },
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
                .then(res => !res.data ?? console.log('Data arrived!'))
        }
    }
</script>

<style scoped lang="scss">
    .v-catalog {

        &__link_to_cart {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 16px;
            /*border: solid 1px #2c3e50;*/
            user-select: none;
            font-size: 32px;
            font-weight: bold;
            color: #2c3e50;
            box-shadow: inset 0px 0px 10px 1px #2c3e45,
                        0px 0px 1px 2px #2c3e45;
        }

        &__list {
            display: flex;
            /*flex-direction: column;*/
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }

    }






</style>