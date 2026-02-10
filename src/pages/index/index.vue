<template>
  <view class="content">
    <view>
      <text>图标组件：</text>
      <Icon name="arrow" class="icon"></Icon>
    </view>

    <view class="counter">
      <view class="counter-value">{{ countStore.count }}</view>
      <view class="counter-double">{{ countStore.doubleCount }}</view>
      <view class="button-container">
        <button class="button button--primary" @click="countStore.increment">增加</button>
        <button class="button button--secondary" @click="countStore.decrement">减少</button>
      </view>
    </view>

  </view>
</template>

<script setup lang="ts">
import { useCountStore } from '@/store/modules/count'
import Icon from '@components/Icon.vue'

const countStore = useCountStore()
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 64px);
  background-color: #f5f5f5;
}

.icon {
  width: 100rpx;
  height: 100rpx;
  color: #007aff;
  margin-bottom: 40rpx;
}

/* 计数器样式 */
.counter {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 40rpx;
  border-radius: 12rpx;
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400rpx;
}

.counter-value {
  font-size: 36rpx;
  font-weight: bold;
  color: #333;
  margin-bottom: 20rpx;
  text-align: center;
}

.counter-double {
  font-size: 28rpx;
  color: #666;
  margin-bottom: 40rpx;
  text-align: center;
}

/* 按钮容器 */
.button-container {
  display: flex;
  gap: 20rpx;
  width: 100%;
  justify-content: center;
}

/* 按钮样式 */
.button {
  flex: 1;
  padding: 20rpx;
  border-radius: 8rpx;
  font-size: 28rpx;
  font-weight: 500;
  text-align: center;
  transition: all 300ms ease-in-out;
  border: none;
  cursor: pointer;
}

.button--primary {
  background-color: #007aff;
  color: #fff;
}

.button--primary:hover {
  background-color: #0066cc;
  transform: translateY(-2rpx);
  box-shadow: 0 4rpx 8rpx rgba(0, 122, 255, 0.3);
}

.button--secondary {
  background-color: #e0e0e0;
  color: #333;
}

.button--secondary:hover {
  background-color: #d0d0d0;
  transform: translateY(-2rpx);
  box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .content {
    padding: 20rpx;
  }

  .counter {
    padding: 30rpx;
  }

  .icon {
    width: 80rpx;
    height: 80rpx;
  }

  .counter-value {
    font-size: 32rpx;
  }

  .counter-double {
    font-size: 24rpx;
  }

  .button {
    padding: 16rpx;
    font-size: 24rpx;
  }
}
</style>
