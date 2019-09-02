<template>
  <div v-if="numItems">
    <section class="cart" v-if="numItems">
      <header>
        <h1>Carrinho</h1>
        <span class="counter">
          ({{numItems}} {{ 'item' | pluralize('itens', numItems) }})
        </span>
      </header>

      <div class="cart-items">
        <CartItem v-for="game in items"
          :key="game.id"
          :id="game.id"
          :image="game.image"
          :name="game.name"
          :price="game.price"
        />
      </div>

      <footer>
        <div class="subtotal">
          <span>subtotal</span>
          <output>{{subtotal | reais}}</output>
        </div>

        <div class="shipping-cost">
          <span>frete</span>
          <output>{{shippingCost | reais}}</output>
        </div>

        <div class="total">
          <span>total</span>
          <output>{{total | reais}}</output>
        </div>
      </footer>

      <button class="submit">finalizar compra</button>
    </section>
  </div>

  <div v-else>
    <section class="cart empty">
      <h1>Carrinho</h1>

      <div class="info">
        <img src="/images/cart-icon.svg" alt="carrinho vazio">
        <p>
          Até o momento,<br>
          o seu carrinho está vazio
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem.vue'
import { pluralize, reais } from '@/filters.js'

import { mapGetters } from 'vuex'

export default {
  filters: { pluralize, reais },
  computed: mapGetters('cart', ['items', 'numItems', 'subtotal', 'shippingCost', 'total']),
  components: { CartItem }
}
</script>

<style scoped src="@/assets/css/cart.css" />
