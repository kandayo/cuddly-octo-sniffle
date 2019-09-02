<template>
  <div id="app">
    <div class="grid wrapper">
      <Products/>
      <Cart/>
    </div>
  </div>
</template>

<script>
import Products from '@/components/Products.vue'
import Cart from '@/components/Cart.vue'

export default {
  components: {
    Products,
    Cart
  }
}
</script>

<style src="@/assets/css/app.css" />
