import Vue from 'vue';
import VueRouter from 'vue-router';
import AutoRoute from './generatedRoute'
Vue.use(VueRouter);


let router = new VueRouter({
	mode: 'history',
	routes: AutoRoute,
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
});

export default router;