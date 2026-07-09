<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import KpiCard from '@/components/KpiCard.vue'
import RadarChart from '@/components/RadarChart.vue'
import SoftCard from '@/components/SoftCard.vue'
import { usePlatformStore } from '@/stores/platform'

const store = usePlatformStore()
const ability = store.growthReport.abilitySnapshot
</script>

<template>
  <AppLayout active="/teacher" title="老师工作台" subtitle="学生诊断、任务布置、作业点评、项目审核、周报生成" role="老师交付入口">
    <div class="dashboard-grid kpi-row">
      <KpiCard label="在学学生" value="56" trend="本周新增 8 人" icon="👥" tone="blue" />
      <KpiCard label="待点评任务" value="18" trend="建议今日处理" icon="✍️" tone="orange" />
      <KpiCard label="风险学生" value="8" trend="连续两天未完成任务" icon="⚠️" tone="purple" />
      <KpiCard label="可生成周报" value="35" trend="家长端可见" icon="📮" tone="green" />
    </div>

    <div class="content-grid teacher-grid">
      <SoftCard title="学生列表" subtitle="按阶段、完成率和风险状态筛选。" tone="blue">
        <table class="data-table">
          <thead>
            <tr><th>学生</th><th>阶段</th><th>完成率</th><th>状态</th></tr>
          </thead>
          <tbody>
            <tr><td>李同学</td><td>基础补强</td><td>78%</td><td><span class="state-good">正常</span></td></tr>
            <tr><td>王同学</td><td>岗位技能</td><td>86%</td><td><span class="state-good">良好</span></td></tr>
            <tr><td>张同学</td><td>项目实战</td><td>92%</td><td><span class="state-good">优秀</span></td></tr>
            <tr><td>刘同学</td><td>就业冲刺</td><td>65%</td><td><span class="state-warn">需关注</span></td></tr>
            <tr><td>赵同学</td><td>基础补强</td><td>55%</td><td><span class="state-danger">风险</span></td></tr>
          </tbody>
        </table>
      </SoftCard>

      <SoftCard title="李同学 · 学生画像" subtitle="目标：成都系统运维 8K+" tone="green">
        <div class="student-profile-panel">
          <RadarChart :data="ability" :size="220" />
          <div class="profile-form">
            <label>任务类型<select><option>作业</option><option>实验</option><option>项目</option></select></label>
            <label>任务标题<input value="Docker Compose 实战" /></label>
            <label>截止时间<input value="2026-07-12" /></label>
            <button class="primary-btn">布置任务</button>
          </div>
        </div>
      </SoftCard>
    </div>

    <div class="content-grid three-col">
      <SoftCard title="作业点评" subtitle="Dockerfile 编写规范较好。" tone="blue">
        <p>建议补充镜像分层优化说明，并增加异常处理日志截图。</p>
      </SoftCard>
      <SoftCard title="实验点评" subtitle="实验环境搭建正确。" tone="orange">
        <p>未验证服务健康检查，建议补充 curl、日志和进程检查过程。</p>
      </SoftCard>
      <SoftCard title="周报生成" subtitle="2026-07-06 ~ 2026-07-12" tone="green">
        <div class="mini-stat"><strong>76%</strong><span>班级平均完成率</span></div>
        <button class="success-btn">生成周报</button>
      </SoftCard>
    </div>
  </AppLayout>
</template>
