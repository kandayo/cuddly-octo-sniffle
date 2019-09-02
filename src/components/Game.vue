<template>
  <article class="game" @click="addGame(id)">
    <div class="cover">
      <img :src="image" :alt="name">
    </div>

    <div class="details">
      <h1 class="title">{{name}}</h1>
      <div class="price">{{price | reais}}</div>
    </div>

    <div class="add-to-cart">
      adicionar ao carrinho
    </div>
  </article>
</template>

<script>
import { mapActions } from 'vuex'
import { reais } from '@/filters'

export default {
  props: {
    id: Number,
    image: String,
    name: String,
    price: Number
  },
  filters: { reais },
  methods: mapActions('cart', ['addGame'])
}
</script>

<style scoped src="@/assets/css/game.css" />
