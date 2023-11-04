import { createApp } from 'vue'
import App from './App.vue'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper'

SwiperCore.use([Navigation, Pagination, A11y, Autoplay])

createApp(App).mount('#app')
