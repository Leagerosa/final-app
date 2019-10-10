import Vue from 'vue'
import Router from 'vue-router'
import inicio from '@/views/inicio'
import chat from '@/views/chat'
import presentation from '@/views/presentation'
import preHome from '@/views/preHome'
import home from '@/views/home'
import psicologo from '@/views/psicologo'
import chatFavs from '@/views/chatFavs'
import perfil from '@/views/perfil'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: inicio,
            meta: {
                nomenu: true,
                inferior: false
            }
        },
        {
            path: '/chat',
            name: 'chat',
            component: chat,
            meta: {
                nomenu: true,
                inferior: false
            }
        },
        {
            path: '/presentation',
            name: 'presentation',
            component: presentation,
            meta: {
                nomenu: true,
                inferior: false
            }
        },
        {
            path: '/preHome',
            name: 'preHome',
            component: preHome,
            meta: {
                nomenu: true,
                inferior: true
            }
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta: {
                nomenu: true,
                inferior: true
            }
        },
        {
            path: '/psicologo',
            name: 'psicologo',
            component: psicologo,
            meta: {
                nomenu: true,
                inferior: true
            }
        },
        {
            path: '/chatFavs',
            name: 'chatFavs',
            component: chatFavs,
            meta: {
                nomenu: true,
                inferior: true
            }
        },
        {
            path: '/perfil',
            name: 'perfil',
            component: perfil,
            meta: {
                nomenu: true,
                inferior: true
            }
        },
    ]
})