<script setup lang="ts">
import BrandLogo from '@/components/BrandLogo.vue'
import { usePlatformStore } from '@/stores/platform'

const props = defineProps<{ title: string; subtitle?: string; active: string; role?: string }>()
const store = usePlatformStore()

const menus = [
  { label: '学生工作台', path: '/student', icon: '🎒' },
  { label: '老师工作台', path: '/teacher', icon: '🧑‍🏫' },
  { label: '家长看板', path: '/parent', icon: '🏡' },
  { label: '课程中心', path: '/courses', icon: '📚' },
  { label: '就业陪跑', path: '/job', icon: '🚀' },
  { label: '成长档案', path: '/growth', icon: '🗂️' },
  { label: '运营后台', path: '/admin', icon: '📊' }
]
</script>

<template>
  <div class="app-layout">
    <aside class="app-sidebar">
      <BrandLogo />
      <div class="sidebar-group-label">平台入口</div>
      <RouterLink
        v-for="item in menus"
        :key="item.path"
        :to="item.path"
        class="sidebar-item"
        :class="{ active: props.active === item.path }"
      >
        <span>{{ item.icon }}</span>
        <b>{{ item.label }}</b>
      </RouterLink>
      <div class="sidebar-note">
        <span>陪跑原则</span>
        <strong>先诊断，再补强；先证据，再就业。</strong>
      </div>
    </aside>
    <main class="app-main">
      <header class="app-topbar glass-panel">
        <div>
          <p class="eyebrow">{{ props.role || '学习成长平台' }}</p>
          <h1>{{ props.title }}</h1>
          <span v-if="props.subtitle">{{ props.subtitle }}</span>
        </div>
        <div class="topbar-user">
          <span class="notice-dot">🔔</span>
          <div class="avatar">{{ store.currentUser.avatar }}</div>
          <div>
            <strong>{{ store.currentUser.name }}</strong>
            <small>{{ store.currentUser.role }}</small>
          </div>
        </div>
      </header>
      <section class="app-content">
        <slot />
      </section>
    </main>
  </div>
</template>
