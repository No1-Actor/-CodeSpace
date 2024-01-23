<template>
  <div>
    <TodoList 
      :todos="todoStore.todos"
      :addTodo="todoStore.addTodo"
    />
  </div>
</template>

<script setup>
// 以组件为开发单元
import { ref } from 'vue'
// const todos = ref([
//   {text: 'haha'}
// ])
// todos
import { useTodoStore } from './store/todo.js'
import TodoList from './components/TodoList.vue'
const todoStore = useTodoStore()
const { todos, addTodo } = useTodoStore()
console.log(todoStore.todos);

</script>

<style scoped>

</style>