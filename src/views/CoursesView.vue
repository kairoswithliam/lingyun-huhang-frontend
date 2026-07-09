<script setup lang="ts">
import { computed, ref } from 'vue'
import PublicLayout from '@/layouts/PublicLayout.vue'
import SoftCard from '@/components/SoftCard.vue'
import { usePlatformStore } from '@/stores/platform'

const store = usePlatformStore()
const categories = ['全部课程', '基础补强课', '岗位技能课', '项目实战课', '就业冲刺课'] as const
const activeCategory = ref<(typeof categories)[number]>('全部课程')

const filteredCourses = computed(() => {
  if (activeCategory.value === '全部课程') return store.courses
  return store.courses.filter((item) => item.courseCategory === activeCategory.value)
})

function difficultyText(level: string) {
  return level === 'BASIC' ? '基础' : level === 'INTERMEDIATE' ? '进阶' : '高级'
}
</script>

<template>
  <PublicLayout>
    <section class="page-hero slim">
      <p class="eyebrow">课程中心</p>
      <h1>不是堆课程，而是围绕岗位倒推能力</h1>
      <p>课程分为基础补强、岗位技能、项目实战、就业冲刺四类，方便老师按学生基础组合学习路径。</p>
    </section>

    <section class="section-wrap">
      <div class="tabs">
        <button v-for="item in categories" :key="item" :class="{ active: activeCategory === item }" @click="activeCategory = item">
          {{ item }}
        </button>
      </div>
      <div class="course-grid">
        <SoftCard v-for="course in filteredCourses" :key="course.id" :title="course.courseName" :subtitle="course.courseCategory" tone="blue">
          <div class="course-card-body">
            <span class="course-badge">{{ course.direction }}</span>
            <span class="course-badge muted">{{ difficultyText(course.difficultyLevel) }}</span>
            <p><strong>适合人群：</strong>{{ course.suitablePeople }}</p>
            <p><strong>学习目标：</strong>{{ course.learningGoal }}</p>
            <div class="course-footer">
              <span>{{ course.courseCode }}</span>
              <RouterLink to="/student" class="mini-btn">加入学习计划</RouterLink>
            </div>
          </div>
        </SoftCard>
      </div>
    </section>
  </PublicLayout>
</template>
