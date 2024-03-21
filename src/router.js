//Adiciono as rotas das paginas importando para que seja exibida no App.vue

import { createRouter, createWebHistory } from 'vue-router'; // Corrigido para "createRouter"

import Login from './pages/Login.vue';
import Signup from './pages/Signup.vue';

const routes = [
    { path: '/', redirect: '/login' },//estou direcionando que a pag de login seja a raiz de iniciação
    { path: '/login', component: Login },
    { path: '/signup', component: Signup }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
