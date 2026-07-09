<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import KpiCard from '@/components/KpiCard.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import RadarChart from '@/components/RadarChart.vue'
import SoftCard from '@/components/SoftCard.vue'
import { usePlatformStore } from '@/stores/platform'

const store = usePlatformStore()
const milestones = [
  ['2026-07-01', '入学测评完成', '开启基础补强阶段'],
  ['2026-07-03', '完成 Linux 基础任务', '掌握文件、权限、服务基础'],
  ['2026-07-06', '提交第一个项目记录', '形成实验文档和 Git 证据'],
  ['2026-07-08', '完成模拟面试', '形成面试复盘建议']
]
</script>

<template>
  <AppLayout active="/growth" title="学生成长档案" subtitle="基础测评、任务、实验、项目、简历、面试、报告全链路归档" role="成长证据沉淀">
    <div class="profile-archive soft-card tone-blue">
      <div class="archive-avatar">李</div>
      <div>
        <p class="eyebrow">以证据说话</p>
        <h2>{{ store.activeStudent.realName }} · {{ store.activeStudent.targetPosition }}</h2>
        <p>入学时间：{{ store.activeStudent.enrollmentDate }} ｜ 当前阶段：基础补强 ｜ 综合评分：78 分</p>
      </div>
    </div>

    <div class="dashboard-grid kpi-row">
      <KpiCard label="学习计划" value="12 周" trend="已完成 7 周" icon="🗓️" tone="blue" />
      <KpiCard label="作业记录" value="68/92" trend="正确率 85%" icon="📝" tone="green" />
      <KpiCard label="实验记录" value="16 个" trend="通过率 93%" icon="🧪" tone="purple" />
      <KpiCard label="简历版本" value="3 版" trend="当前 V3 投递版" icon="📄" tone="orange" />
    </div>

    <div class="content-grid archive-grid">
      <SoftCard title="基础测评结果" subtitle="薄弱项：Docker / K8s / 数据库" tone="blue">
        <RadarChart :data="store.growthReport.abilitySnapshot" />
      </SoftCard>
      <SoftCard title="学习计划" subtitle="当前：岗位技能阶段" tone="green">
        <ProgressBar label="整体完成率" :value="58" tone="green" />
        <p>{{ store.growthReport.learningResult }}</p>
      </SoftCard>
      <SoftCard title="项目作品" subtitle="项目是简历和面试的核心证据" tone="purple">
        <div v-for="item in store.activeStudentPortfolios" :key="item.id" class="mini-project">
          <strong>{{ item.projectName }}</strong>
          <span>{{ item.techStack }}</span>
        </div>
      </SoftCard>
      <SoftCard title="阶段报告" subtitle="可用于家长汇报和老师复盘" tone="orange">
        <p>{{ store.growthReport.teacherSummary }}</p>
      </SoftCard>
    </div>

    <SoftCard title="成长里程碑" subtitle="把学习过程、证据和复盘串成可追溯时间线。" tone="blue">
      <div class="timeline-list horizontal">
        <div v-for="item in milestones" :key="item[0]" class="timeline-item">
          <span>{{ item[0] }}</span>
          <div>
            <strong>{{ item[1] }}</strong>
            <p>{{ item[2] }}</p>
          </div>
        </div>
      </div>
    </SoftCard>
  </AppLayout>
</template>
