<template>
  <div>
    <h1>shopping cart</h1>
    <hr>
    <h2>products</h2>
    <ProductList></ProductList>
    <hr>
    <ShoppingCart></ShoppingCart>
  </div>
</template>

<script setup>
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
</script>

<style scoped>

</style>