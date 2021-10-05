new Vue({
	el: '#desafio',
	data: {
		efeito: false,
		iniciar: false,
		progresso: 0,
		classeInformada: '',
		classeInformada2: '',
		aplicarClasse: false,
		cor: 'red',
		largura: 100,
		altura: 100
	},
	methods: {
		iniciarEfeito() {
			this.efeito = !this.efeito;
		},
		iniciarProgresso() {
			this.iniciar = true;

			setInterval(() => {
				if(this.progresso != 100) this.progresso++;
			}, 100);
		}
	},
	computed: {
		progressoStart() {
			return {
				backgroundColor: 'green',
				width: this.progresso * 3
			}
		}
	}
})
