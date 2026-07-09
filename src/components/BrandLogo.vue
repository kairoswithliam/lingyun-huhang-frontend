<script setup lang="ts">
defineProps<{ compact?: boolean }>()
</script>

<template>
  <RouterLink class="brand-logo" to="/" :class="{ compact }">
    <span class="brand-mark">凌</span>
    <span v-if="!compact" class="brand-text">
      <strong>凌云护航</strong>
      <small>学习成长平台</small>
    </span>
  </RouterLink>
</template>
