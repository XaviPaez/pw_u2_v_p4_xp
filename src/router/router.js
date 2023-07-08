import { createRouter, createWebHashHistory } from 'vue-router'

// import JuegoPage from '../modules/pokemon/pages/JuegoPage'
// import PremiosPage from '../modules/pokemon/pages/PremiosPage'
// import PokemonPage from '../modules/pokemon/pages/PokemonPage'
// import NoEncontradaPage from '../modules/pokemon/pages/NoEncontradaPage'

const routes = [
    {
        path: "/",
        component: () => import('../modules/pokemon/pages/BienvenidaPage')
    },
    {
        path: "/juego",
        component: () => import('../modules/pokemon/pages/JuegoPage')
    },
    {
        path: "/premios",
        component: () => import('../modules/pokemon/pages/PremiosPage')
    },
    {
        path: "/pokemonjuego",
        component: () => import('../modules/pokemon/pages/PokemonPage')
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import('../modules/pokemon/pages/NoEncontradaPage')
    }


]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router