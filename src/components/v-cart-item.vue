<template>
    <div class="v-cart-item">
        <img
                class="v-cart-item__img"
                :src="require('../assets/images/' + cart_item_data.image)"
                alt="no image"
        >

        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>

        <div class="v-cart-item__quantity">
            <p>quantity: {{cart_item_data.quantity}}</p>

        </div>

        <button
                @click.left="deleteFromCart"
                class="v-cart-item__button">
            Delete
        </button>
    </div>
</template>

<script>
    export default {
        name: "v-cart-item",
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            deleteFromCart() {
                this.$emit('deleteFromCart')
            }
        },
        mounted() {
            // eslint-disable-next-line vue/no-mutating-props
            this.cart_item_data['quantity'] = 1
        },
    }
</script>

<style scoped lang="scss">
    .v-cart-item {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        border: 1px solid #e0e0e0;
        margin-bottom: 10px;

        &__img {
            margin: 10px;
            width: 100px;
        }

        &__button {
            position: absolute;
            top: 0;
            right: 0;
            width: 80px;
            height: 25px;
            background: #ffffff;

            border: 1px solid #e0e0e0;
        }
    }
</style>