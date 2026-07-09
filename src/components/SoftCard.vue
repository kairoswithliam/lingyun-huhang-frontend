<script setup lang="ts">
defineProps<{ title?: string; subtitle?: string; tone?: 'blue' | 'green' | 'purple' | 'orange' | 'plain' }>()
</script>

<template>
  <section class="soft-card" :class="`tone-${tone || 'plain'}`">
    <header v-if="title || subtitle" class="soft-card__header">
      <div>
        <h3 v-if="title">{{ title }}</h3>
        <p v-if="subtitle">{{ subtitle }}</p>
      </div>
      <slot name="action" />
    </header>
    <slot />
  </section>
</template>
