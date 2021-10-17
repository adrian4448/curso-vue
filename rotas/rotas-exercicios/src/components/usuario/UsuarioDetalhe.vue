<template>
  <div class="usuario-detalhe">
      <h3>Usuario Detalhe</h3>
      <p><strong>Código: </strong>{{ id }}</p>
      <!-- :to="`/usuario/${id}/editar`" -->
      <router-link tag="button"  :to="{ name: 'editarUsuario', params: { id: id }, 
      query: { completo: true, lingua: 'pt' }, hash: '#rodape' }" primario>
        Editar
      </router-link>
  </div>
</template>

<script>
export default {
  props: ['id'],
  beforeRouteEnter(to, from, next) {
    console.log('dentro do component -> Usuario Detalhe')
    next(vm => {
      console.log(vm.id)
    })
    const autenticado = true;
    autenticado ? next() : next(false)
  }
  /* 
  data() {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    }
  },
  */
}
</script>

<style>

</style>