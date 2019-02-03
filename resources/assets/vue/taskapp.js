import Vue from 'vue';
import App from './rootComponentTaskApp.vue';
import router from './router.js';
import '../css/taskapp/taskapp';

document.addEventListener('DOMContentLoaded', () => {
	const vueTaskApp = new Vue({
	  el: '#task-app',
	  render: h => h(App),
	  router
	})
})