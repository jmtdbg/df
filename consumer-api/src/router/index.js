import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import Residencias from '@/pages/residencias/Index'
import MediaPreco from '@/pages/media_preco/Index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Residencias',
            component: Residencias
        },
        {
            path: '/residencia/:id',
            name: 'Residencia',
            component: () => import("@/pages/residencias/View")
        },
        {
            path: '/media-precos',
            name: 'MediaPreco',
            component: MediaPreco
        },

    ]
})