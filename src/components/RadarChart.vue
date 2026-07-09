<script setup lang="ts">
const props = defineProps<{ data: Record<string, number>; size?: number }>()

const labels = Object.keys(props.data)
const values = Object.values(props.data)
const size = props.size || 220
const center = size / 2
const radius = size * 0.34

function point(index: number, value = 100) {
  const angle = (Math.PI * 2 * index) / labels.length - Math.PI / 2
  const r = radius * (value / 100)
  return [center + Math.cos(angle) * r, center + Math.sin(angle) * r]
}

const polygon = values.map((value, index) => point(index, value).join(',')).join(' ')
const gridLevels = [25, 50, 75, 100]
</script>

<template>
  <svg class="radar-chart" :width="size" :height="size" viewBox="0 0 220 220" role="img" aria-label="能力雷达图">
    <g v-for="level in gridLevels" :key="level" class="radar-grid">
      <polygon :points="labels.map((_, index) => point(index, level).join(',')).join(' ')" />
    </g>
    <g class="radar-axis">
      <line v-for="(_, index) in labels" :key="index" :x1="center" :y1="center" :x2="point(index)[0]" :y2="point(index)[1]" />
    </g>
    <polygon class="radar-area" :points="polygon" />
    <circle v-for="(value, index) in values" :key="index" class="radar-dot" :cx="point(index, value)[0]" :cy="point(index, value)[1]" r="3" />
    <text
      v-for="(label, index) in labels"
      :key="label"
      class="radar-label"
      :x="point(index, 118)[0]"
      :y="point(index, 118)[1]"
      text-anchor="middle"
      dominant-baseline="middle"
    >
      {{ label }}
    </text>
  </svg>
</template>
