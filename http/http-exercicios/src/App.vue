<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in  mensagens" :key="mensagem.texto"
			:variant="mensagem.tipo">{{mensagem.texto}}</b-alert>
		<b-card>
			<b-form-group label="Nome">
				<b-form-input type="text" size="lg"
					v-model="usuario.nome"
					placeholder="Informe o nome"></b-form-input>
			</b-form-group>
			<b-form-group label="E-mail">
				<b-form-input type="text" size="lg"
					v-model="usuario.email"
					placeholder="Informe o Email"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar"
				size="large" variant="primary">Salvar</b-button>
			<b-button @click="obterUsuarios"
				size="large" variant="success" class="ml-2">Obter Usuarios</b-button>	
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="usuario in usuarios" :key="usuario.id">
				<strong>ID: </strong> {{ usuario.id }} <br>
				<strong>Nome: </strong> {{ usuario.nome }} <br>
				<strong>Email: </strong> {{ usuario.email }} <br>
				<b-button variant="warning" size="lg" @click="carregar(usuario.id)">Carregar</b-button>
				<b-button variant="danger" size="lg" @click="excluir(usuario.id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				id: null,
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar() {
			this.usuario.nome = '';
			this.usuario.email = '';
			this.id = null;
			this.mensagens = [];
		},
		carregar(id) {
			this.id = id
			const user = this.usuarios.find(user => user.id == id)
			this.usuario = Object.assign({}, user)
		},
		excluir(id) {
			this.$http.delete(`/usuarios/${id}.json`)
				.then(() => this.limpar())
				.catch(err => {
					this.mensagens.push({
						texto: 'Problema para excluir',
						tipo: 'danger'
					})
				});
		},
		salvar() {
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
				.then(() => {
					this.limpar()
					this.mensagens.push({
						texto: 'Operação realizada com sucesso',
						tipo: 'success'
					})
					});
		},
		obterUsuarios() {
			// axios.get('https://curso-vue-7ff18-default-rtdb.firebaseio.com/usuarios.json')
			this.$http.get('usuarios.json')
				.then(resp => {
					this.usuarios = resp.data;
					console.log(this.usuarios);
				})
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
