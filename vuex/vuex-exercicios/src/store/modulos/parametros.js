export default {
    state: {
        quantidade: 2,
        preco: 19.99
    },
    mutations: {
        setQuantidade(state, quantidade) {
            state.quantidade = quantidade
        },
        setPreco(state, preco) {
            state.preco = preco
        }
    }
}