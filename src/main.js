import {createApp} from 'vue'
import App from './App.vue'
import store from "@/vuex/store";
import router from "@/router/router";



let cApp = createApp(App)

cApp.use(router)
cApp.use(store)
cApp.mount('#app');