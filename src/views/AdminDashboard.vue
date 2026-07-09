<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import KpiCard from '@/components/KpiCard.vue'
import SoftCard from '@/components/SoftCard.vue'
import { usePlatformStore } from '@/stores/platform'

const store = usePlatformStore()
</script>

<template>
  <AppLayout active="/admin" title="管理后台 / 轻量运营后台" subtitle="线索、学生、课程、案例、网站内容和数据看板" role="运营管理入口">
    <div class="dashboard-grid kpi-row">
      <KpiCard label="新增线索" value="128" trend="较昨日 +10%" icon="📩" tone="blue" />
      <KpiCard label="活跃学生" value="56" trend="本周 +8" icon="🎒" tone="green" />
      <KpiCard label="课程学习人数" value="642" trend="较昨日 +12%" icon="📚" tone="purple" />
      <KpiCard label="就业签约数" value="23" trend="本月累计" icon="🚀" tone="orange" />
    </div>

    <div class="content-grid two-thirds">
      <SoftCard title="咨询线索池" subtitle="对应 crm_lead 与 crm_lead_follow_record。" tone="blue">
        <table class="data-table">
          <thead><tr><th>姓名</th><th>城市</th><th>目标方向</th><th>意向</th><th>状态</th></tr></thead>
          <tbody>
            <tr v-for="lead in store.leads" :key="lead.id">
              <td>{{ lead.leadName }}</td>
              <td>{{ lead.city }}</td>
              <td>{{ lead.targetPosition }}</td>
              <td><span class="state-good">{{ lead.intentionLevel }}</span></td>
              <td>{{ lead.leadStatus }}</td>
            </tr>
          </tbody>
        </table>
      </SoftCard>
      <SoftCard title="快捷操作" subtitle="第一版后台建议先轻量。" tone="green">
        <div class="quick-actions">
          <RouterLink to="/assessment" class="mini-btn">新增测评</RouterLink>
          <RouterLink to="/courses" class="mini-btn">课程管理</RouterLink>
          <RouterLink to="/teacher" class="mini-btn">学生诊断</RouterLink>
          <RouterLink to="/growth" class="mini-btn">成长报告</RouterLink>
        </div>
        <ul class="check-list">
          <li>用户管理：管理员 / 老师 / 学生 / 家长</li>
          <li>课程管理：课程、章节、课时、作业</li>
          <li>案例管理：匿名展示学生成长案例</li>
          <li>网站内容：Banner、文章、服务说明</li>
        </ul>
      </SoftCard>
    </div>

    <div class="content-grid three-col">
      <SoftCard title="用户增长趋势" subtitle="近 7 天" tone="blue">
        <div class="fake-chart line-chart"><i v-for="n in 14" :key="n" :style="{ height: `${20 + (n % 5) * 16}px` }" /></div>
      </SoftCard>
      <SoftCard title="课程学习趋势" subtitle="近 7 天" tone="purple">
        <div class="fake-chart area-chart"><i v-for="n in 14" :key="n" :style="{ height: `${30 + (n % 6) * 12}px` }" /></div>
      </SoftCard>
      <SoftCard title="线索来源分布" subtitle="官网测评 / 私域 / 合作渠道" tone="orange">
        <div class="donut-chart"><span>45%</span></div>
      </SoftCard>
    </div>
  </AppLayout>
</template>
