<template>
  <svg
    :class="[
      'icon',
      { 'icon--active': active },
      { 'icon--hover': isHovering }
    ]"
    :style="[
      {
        width: size,
        height: size,
        color: color,
        transition: `all ${animationDuration}ms ease-in-out ${animationDelay}ms`
      },
      customStyle
    ]"
    aria-hidden="true"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
  >
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// Props
const props = defineProps({
  // 图标名称
  name: {
    type: String,
    required: true
  },
  // 图标大小，支持数字和文字
  size: {
    type: [String, Number],
    default: '24px'
  },
  // 图标颜色
  color: {
    type: String,
    default: '#333'
  },
  // 是否激活状态
  active: {
    type: Boolean,
    default: false
  },
  // 动画时间（毫秒）
  animationDuration: {
    type: Number,
    default: 300
  },
  // 动画延时（毫秒）
  animationDelay: {
    type: Number,
    default: 100
  },
  // 自定义样式
  customStyle: {
    type: Object,
    default: () => ({})
  }
})

// 响应式数据
const isHovering = ref(false)

// 计算属性
const size = computed(() => {
  if (typeof props.size === 'number') {
    return `${props.size}px`
  }
  return props.size
})
</script>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
  margin:10rpx;
}

.icon--hover {
  transform: scale(1.1);
}

.icon--active {
  color: #007aff;
  transform: scale(1.1);
}
</style>
