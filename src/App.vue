<template> 
<!-- html -->
  <div id="app"> 
    <!-- para cada iteração renderiza uma div que vai mostrar o nome do pokemon  -->
    <!-- a chame é necessária para que o vue saiba qual é o pokemon de cada div -->
    <div v-for="pokemon in pokemons" :key="pokemon.name">
      {{ pokemon.name }}
      <!-- mostrando o atributo nome do pokemon -->
    </div>
  </div>
</template>

<script>

// importa a função de get do diretório
import { chamarApi } from '@/gateways/gateway';
import HelloWorld from "@/components/HelloWorld.vue" //importando um componente filho

// ta exportando a lógica do componente pai (que é esse arquivo)
export default {
  name: 'App',

  components: { // aqui eu passo os componentes filhos
      HelloWorld // componente filho q foi importado
  },

  data(){ // retorna dados que vão ser usados no html, as variáveis
    return{
      pokemons: [] // criando variavel de pokemons que é uma array
    }
  },

  async mounted(){ // // o async faz a funçaõ poder esperar um valor pelo await
    this.pokemons = await chamarApi(); // o this se refere ao q ta no data. está chamando a função q retorna 30 pokeomons e colocando na array pokemons
  }
}
</script>

<style>
/* css */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
