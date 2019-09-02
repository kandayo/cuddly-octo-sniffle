<template>
  <article class="cart-item" @click="removeGame(id)">
    <div class="cover">
      <img :src="image" :alt="name">
    </div>

    <div class="details">
      <h1>{{name}}</h1>
      <div class="price">{{price | reais}}</div>
    </div>

    <button class="remove">X</button>
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
  methods: mapActions('cart', ['removeGame'])
}
</script>

<style scoped src="@/assets/css/cartItem.css" />
