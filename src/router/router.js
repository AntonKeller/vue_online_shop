import { createRouter, createWebHashHistory } from 'vue-router'
import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'

let routes = [
    {
        path: '/',
        name: 'catalog',
        component: vCatalog,
    },
    {
        path: '/cart',
        name: 'cart',
        component: vCart,
        props: { newsletterPopup: false }
        // props: true,
    }
]

let router = createRouter({
    routes: routes,
    history: createWebHashHistory(),
})

export default router;
