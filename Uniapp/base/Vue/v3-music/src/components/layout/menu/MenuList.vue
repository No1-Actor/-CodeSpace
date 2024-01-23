<template>
	<!-- 用户体验的直觉 -->
	<ElScrollbar>
		<div class="mt-10 pl-6 pr-6 space-y-1" v-for="menuItem in menus">
			<div class="menu-title text-main select-none">{{ menuItem.name }}</div>
			<div
				class="menu-item hover:bg-main text-main"
				v-for="menu in menuItem.menus"
				:class="{ active: currentKey === menu.key }"
				@click="changeMenu(menu)"
				:key="menu.key">
				<IconPark :icon="menu.icon" :theme="menu.theme" :size="18" />
				<span class="ml-1 select-none">{{ menu.name }}</span>
			</div>
		</div>
	</ElScrollbar>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
// 模块化 hooks 编程
// 数据离开组件，组件就很好读
// 范式，use 开头 函数式编程
import { useMenu } from './useMenu.js'

const { menus, currentKey, changeMenu } = useMenu()
</script>

<style scoped>
.menu-title {
	@apply text-xs pl-4 pr-4 pb-2;
}

.menu-item {
	@apply text-sm pl-4 pr-4 pt-1.5 pb-1.5 rounded cursor-pointer transition-colors flex items-center;
}

.active {
	@apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-50 cursor-default;
}
</style>
