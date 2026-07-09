<script setup lang="ts">
import { computed } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'
import KpiCard from '@/components/KpiCard.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import SoftCard from '@/components/SoftCard.vue'
import { usePlatformStore } from '@/stores/platform'

const store = usePlatformStore()
const student = computed(() => store.activeStudent)
const taskStatusMap: Record<string, string> = {
  TODO: '待开始',
  DOING: '进行中',
  SUBMITTED: '已提交',
  REVIEWED: '已点评',
  DONE: '已完成'
}
</script>

<template>
  <AppLayout active="/student" title="学生工作台" subtitle="今日任务、学习进度、项目证据和就业准备度集中展示" role="登录后交付入口">
    <div class="dashboard-grid kpi-row">
      <KpiCard label="当前阶段" value="基础补强 L2" trend="围绕系统运维目标" icon="🧭" tone="blue" />
      <KpiCard label="今日任务" :value="`${store.completedTaskCount}/${store.studentTasks.length}`" trend="持续执行中" icon="✅" tone="green" />
      <KpiCard label="本周完成率" :value="`${store.weeklyCompletionRate}%`" trend="较上周 +12%" icon="📈" tone="purple" />
      <KpiCard label="就业准备度" value="65%" trend="简历项目待加强" icon="🚀" tone="orange" />
    </div>

    <div class="content-grid two-thirds">
      <SoftCard :title="`你好，${student.realName}`" subtitle="坚持学习的每一天，都会让你更接近目标岗位。" tone="blue">
        <div class="task-list">
          <div v-for="task in store.studentTasks" :key="task.id" class="task-item">
            <span class="task-icon">{{ task.taskType === 'LAB' ? '🧪' : task.taskType === 'RESUME' ? '📄' : '📘' }}</span>
            <div>
              <strong>{{ task.taskTitle }}</strong>
              <p>{{ task.expectedOutput }}</p>
            </div>
            <em :class="`status-${task.taskStatus.toLowerCase()}`">{{ taskStatusMap[task.taskStatus] }}</em>
          </div>
        </div>
      </SoftCard>
      <SoftCard title="学习进度" subtitle="基础补强阶段，共 8 周" tone="green">
        <ProgressBar label="阶段进度" :value="65" tone="green" />
        <ProgressBar label="Linux 基础" :value="78" tone="blue" />
        <ProgressBar label="Docker 基础" :value="45" tone="orange" />
        <div class="calendar-strip">
          <span v-for="day in ['一','二','三','四','五','六','日']" :key="day">{{ day }}</span>
        </div>
      </SoftCard>
    </div>

    <div class="content-grid two-thirds reverse">
      <SoftCard title="成长档案 · 项目证据" subtitle="所有学习和就业动作都要留下证据。" tone="purple">
        <div class="portfolio-list">
          <article v-for="project in store.activeStudentPortfolios" :key="project.id" class="portfolio-item">
            <div class="portfolio-cover">{{ project.projectName.slice(0, 2) }}</div>
            <div>
              <h3>{{ project.projectName }}</h3>
              <p>{{ project.projectBackground }}</p>
              <div class="tag-group">
                <span v-for="tag in project.techStack.split(' / ')" :key="tag">{{ tag }}</span>
              </div>
              <small>Git：{{ project.gitUrl || '待补充' }}</small>
            </div>
          </article>
        </div>
      </SoftCard>
      <SoftCard title="老师最新点评" subtitle="先复盘，再进入下一轮任务。" tone="orange">
        <blockquote>
          {{ store.weeklyReport.teacherComment }}
        </blockquote>
        <p>{{ store.weeklyReport.nextWeekPlan }}</p>
      </SoftCard>
    </div>
  </AppLayout>
</template>
