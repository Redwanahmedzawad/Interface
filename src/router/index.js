import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/Home.vue';
import ReservaTion from '../components/Reservation.vue';
import MenuList from '../components/Menu.vue';
import OnlineOrder from '../components/OnlineOrder.vue';
import LiquorMenu from '../components/LiqourMenu.vue';
import ContactUs from '../components/ContactUs.vue';
import UserHel from '../components/User.vue';
const routes = [
  { path: '/', component: HomePage },
  { path: '/reservation', component: ReservaTion },
  { path: '/menu', component: MenuList },
  { path: '/online-order', component: OnlineOrder },
  { path: '/liquor-menu', component: LiquorMenu },
  { path: '/contact-us', component: ContactUs },
  {path: '/userhel',component:UserHel},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
