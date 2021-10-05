new Vue({
    el: '#desafio',
    data: {
        nome: 'Adrian Morais',
        idade: '20',
        googleImage: 'https://www.qries.com/images/banner_logo.png'
    },
    methods: {
        numeroAleatorio() {
            return Math.floor(Math.random() * (100 - 0) + 0);
        }
    }
});