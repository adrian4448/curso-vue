new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertar() {
            alert('Alertado menor !!');
        },
        escutandoKeyDown(e) {
            this.valor = e.target.value;
        }
    }
})