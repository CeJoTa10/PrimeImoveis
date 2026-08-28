import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PropertyDetailView from '../views/PropertyDetailView.vue';
import ComprarView from '../views/ComprarView.vue';
import AlugarView from '../views/AlugarView.vue';
import LancamentosView from '../views/LancamentosView.vue';
import AuthActionView from '../views/AuthActionView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/imovel/:id',
    name: 'PropertyDetail',
    component: PropertyDetailView,
    props: true
  },
  {
    path: '/comprar',
    name: 'Comprar',
    component: ComprarView
  },
  {
    path: '/alugar',
    name: 'Alugar',
    component: AlugarView
  },
  {
    path: '/lancamentos',
    name: 'Lancamentos',
    component: LancamentosView
  },
  {
    path: '/auth/action',
    name: 'AuthAction',
    component: AuthActionView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
});

export default router;
