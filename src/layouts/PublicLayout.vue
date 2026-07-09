<script setup lang="ts">
import BrandLogo from '@/components/BrandLogo.vue'

const navs = [
  { label: '首页', path: '/' },
  { label: '服务体系', path: '/#service' },
  { label: '课程中心', path: '/courses' },
  { label: '成长案例', path: '/growth' },
  { label: '免费测评', path: '/assessment' }
]
</script>

<template>
  <div class="public-layout">
    <header class="public-nav glass-panel">
      <BrandLogo />
      <nav>
        <RouterLink v-for="item in navs" :key="item.label" :to="item.path">{{ item.label }}</RouterLink>
      </nav>
      <div class="nav-actions">
        <RouterLink class="ghost-btn" to="/student">登录入口</RouterLink>
        <RouterLink class="primary-btn" to="/assessment">免费测评</RouterLink>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>
