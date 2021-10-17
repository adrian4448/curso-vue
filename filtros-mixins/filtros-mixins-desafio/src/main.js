import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('contarPalavra',function(value) {
	const palavras = value.split(' ');
	let contador = '';

	palavras.forEach(palavra => {
		contador += `${palavra} (${palavra.length}) `;
	})
	return contador;
})

new Vue({
	render: h => h(App),
}).$mount('#app')
