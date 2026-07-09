<script setup lang="ts">
defineProps<{ value: number; label?: string; tone?: 'blue' | 'green' | 'purple' | 'orange' }>()
</script>

<template>
  <div class="progress-wrap">
    <div v-if="label" class="progress-label">
      <span>{{ label }}</span>
      <strong>{{ value }}%</strong>
    </div>
    <div class="progress-track">
      <div class="progress-fill" :class="`progress-${tone || 'blue'}`" :style="{ width: `${Math.min(value, 100)}%` }" />
    </div>
  </div>
</template>
