<template>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ currency(product.price) }}
        <br>
        <button
          :disabled="!product.inventory"
          @click="addProductToCart(product)">
          Add to cart
      </button>
      </li>
    </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { currency } from '../currency'


const store = useStore() // 状态树
const products = computed(() => store.state.products.all) // 计算属性
const addProductToCart = product => store.dispatch('cart/addProductToCart', product) 

// console.log(products);
store.dispatch('products/getAllProducts') // dispatch: 派遣 commit: 提交
</script>

<style scoped>

</style>
