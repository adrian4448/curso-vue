<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ trocar | trocarEspacos }}</p>
		<hr>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ contar | contarPalavra}}</p>
		<hr>
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p>{{ trocarEsp }}</p>
		<p>{{ contarLetras }}</p>
		<p>
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>{{ trocarEspMixin }}</p>
		<p>{{ contarLetrasMixin }}</p>
	</div>
</template>

<script>
import MixinExercicio from './mixinExercicio'

export default {
	filters: {
		trocarEspacos(value) {
			return value.replaceAll(' ', ',');
		}
	},
	data() {
        return {
			trocar: 'Quero Trocar Os Espaços Disso',
			contar: 'Pedro é legal'
		}
    },
    computed:{
		trocarEsp() {
			return this.trocar.replaceAll(' ', ',');
		},
		contarLetras() {
			const palavras = this.contar.split(' ');
			let contador = '';

			palavras.forEach(palavra => {
				contador += `${palavra} (${palavra.length}) `;
			})
			return contador;
		}
	},
	mixins: [ MixinExercicio ]
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
