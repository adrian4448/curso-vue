export default {
    data() {
        return {
			trocarMixin: 'Quero Trocar Os Espaços Disso Mixin',
			contarMixin: 'Pedro é legal Mixin'
		}
    },
    computed:{
		trocarEspMixin() {
			return this.trocarMixin.replaceAll(' ', ',');
		},
		contarLetrasMixin() {
			const palavras = this.contarMixin.split(' ');
			let contador = '';

			palavras.forEach(palavra => {
				contador += `${palavra} (${palavra.length}) `;
			})
			return contador;
		}
	}
}