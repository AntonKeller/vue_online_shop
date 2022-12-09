<template>
    <div class="v-catalog-item">
        <img
                class="v-catalog-item__img"
                :src="require('../assets/images/' + product_data.image)"
                alt="no img"
        >
        <p class="v-catalog-item__name">
            {{product_data.name}}
        </p>
        <p class="v-catalog-item__price">
            Цена: {{product_data.price}} руб.
        </p>
        <button
                class="v-catalog-item__add btn"
                @click.left="addToCart"
        >
            Add item to cart
        </button>
    </div>
</template>

<script>

    export default {
        name: "v-catalog-item",
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            addToCart() {
                this.$emit('addToCart', this.product_data)
            }
        },
    }
</script>

<style scoped lang="scss">
    .v-catalog-item {
        flex-basis: 28%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 15px;
        margin-bottom: 10px;

        &__img {
            width: 100px;
        }
    }

    .btn {
        width: 120px;
        background: #ffffff;
        padding: 10px;
        border: 1px solid #e8e8e8;
        border-radius: 2rem;
        transition: 0.3s linear;

        &:hover {
            width: 150px;
        }
    }
</style>