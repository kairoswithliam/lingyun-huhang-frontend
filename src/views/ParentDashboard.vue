<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import KpiCard from '@/components/KpiCard.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import SoftCard from '@/components/SoftCard.vue'
import { usePlatformStore } from '@/stores/platform'

const store = usePlatformStore()
const timeline = [
  ['07-09', '完成 Linux 文件权限实验', '老师点评：命令截图完整，能解释权限变化。'],
  ['07-08', '提交 Shell 巡检脚本', '老师点评：逻辑清晰，建议增加错误处理。'],
  ['07-07', '完成 Docker Compose 练习', '老师点评：能完成部署，但排障过程还需补充。'],
  ['07-06', '本周学习计划确认', '老师点评：目标明确，执行节奏稳定。']
]
</script>

<template>
  <AppLayout active="/parent" title="家长看板" subtitle="用家长能理解的方式展示学习过程和成长证据" role="家长可视化入口">
    <div class="parent-hero soft-card tone-green">
      <div>
        <p class="eyebrow">温暖提醒</p>
        <h2>家长不用懂技术，也能看见孩子每天有没有进步</h2>
        <p>平台会把命令、实验、项目和老师点评，转化为更容易理解的成长记录。</p>
      </div>
      <div class="heart-illustration">💙</div>
    </div>

    <div class="dashboard-grid kpi-row">
      <KpiCard label="本周学习进度" value="78%" trend="较上周 +10%" icon="📚" tone="green" />
      <KpiCard label="已完成任务" value="18/23" trend="剩余 5 项" icon="✅" tone="blue" />
      <KpiCard label="老师点评" value="2 条" trend="建议查看" icon="🧑‍🏫" tone="orange" />
      <KpiCard label="就业进展" value="2 家" trend="投递中" icon="🚀" tone="purple" />
    </div>

    <div class="content-grid two-thirds">
      <SoftCard title="本周学习情况" subtitle="学习进度、项目进展和就业准备度。" tone="blue">
        <ProgressBar label="学习任务完成率" :value="78" tone="green" />
        <ProgressBar label="项目作品完成度" :value="62" tone="blue" />
        <ProgressBar label="简历完善度" :value="88" tone="purple" />
        <blockquote>“{{ store.weeklyReport.teacherComment }}”</blockquote>
      </SoftCard>
      <SoftCard title="学习成长时间轴" subtitle="把每天的进步记录下来。" tone="green">
        <div class="timeline-list">
          <div v-for="item in timeline" :key="item[0]" class="timeline-item">
            <span>{{ item[0] }}</span>
            <div>
              <strong>{{ item[1] }}</strong>
              <p>{{ item[2] }}</p>
            </div>
          </div>
        </div>
      </SoftCard>
    </div>
  </AppLayout>
</template>
