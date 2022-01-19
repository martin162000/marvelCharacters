import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'

const routes: Array<RouteRecordRaw> = [
	{ path: '/', redirect: '/marvelCharacters' },
	{
		path: '/marvelCharacters',
		component: Home,
	},
	{
		path: '/details',
		component: Details,
	},
	{
		path: '/favourites',
		component: () => import(/* webpackChunkName: "favourites" */ '../views/Favourites.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
