<script setup lang="ts">
defineProps<{
  label: string
  value: string | number
  trend?: string
  icon?: string
  tone?: 'blue' | 'green' | 'purple' | 'orange'
}>()
</script>

<template>
  <div class="kpi-card" :class="`kpi-${tone || 'blue'}`">
    <div class="kpi-icon">{{ icon || '📘' }}</div>
    <div>
      <p>{{ label }}</p>
      <strong>{{ value }}</strong>
      <small v-if="trend">{{ trend }}</small>
    </div>
  </div>
</template>
