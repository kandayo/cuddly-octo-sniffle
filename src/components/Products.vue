<template>
  <section class="products">
    <header>
      <h1>Games</h1>

      <select :value="filter" @input="setFilter">
        <option value="score">Mais populares</option>
        <option value="price">Mais caros</option>
        <option value="name">Ordem alfabética</option>
      </select>
    </header>

    <div class="grid games">
      <Game v-for="game in all"
        :key="game.id"
        :id="game.id"
        :image="game.image"
        :name="game.name"
        :price="game.price"
      />
    </div>
  </section>
</template>

<script>
import Game from '@/components/Game.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters('games', ['filter', 'all']),
  methods: mapActions('games', ['setFilter']),
  components: { Game }
}
</script>

<style scoped src="@/assets/css/products.css" />
