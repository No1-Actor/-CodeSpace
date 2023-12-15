<template>
	<Component
		:is="icon"
		:theme="theme"
		:size="size"
		:spin="spin"
		:fill="fill"
		:strokeLinecap="strokeLinecap"
		:strokeLinejoin="strokeLinejoin"
		:strokeWidth="strokeWidth" />
</template>

<script lang="ts" setup>
// vue 组件的一种声明方式，本来是有各种图标， Component + is = icon
import type { Icon } from '@icon-park/vue-next/lib/runtime'
// import { defineProps } from 'vue'
// 让子组件使用父组件传过来的 props，先声明才能用，为了安全
defineProps<{
	icon: Icon
	theme?: 'outline' | 'filled' | 'two-tone' | 'multi-color'
	size?: number | string
	spin?: boolean
	fill?: string | string[]
	strokeLinecap?: 'butt' | 'round' | 'square'
	strokeLinejoin?: 'miter' | 'round' | 'bevel'
	strokeWidth?: number
}>()
</script>
