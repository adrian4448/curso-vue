export default {
    namespaced: true,
    state: {
        produtos: []
    },
    getters: {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: {
        adicionarProduto(state, produto) {
            state.produtos.push(produto);
        }
    },
    actions: {
        adicionarProduto({ commit }, produto) {
            setTimeout(() => {
                /* 
                    Caso Você passe o context como parametro
                    context.commit('adicionarProduto', produto)
                */
                commit('adicionarProduto', produto)
            }, 1000)
        }
    }
}