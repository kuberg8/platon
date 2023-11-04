import { createApp } from 'vue'
import App from './App.vue'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'

SwiperCore.use([Navigation, Pagination, A11y])

createApp(App).mount('#app')
