<script setup lang="ts">
import PublicLayout from '@/layouts/PublicLayout.vue'
import KpiCard from '@/components/KpiCard.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import SoftCard from '@/components/SoftCard.vue'

const painPoints = ['学了很多课，但不知道自己会不会', '简历项目太空，面试一问就露馅', 'Linux / 网络 / 数据库基础不扎实', '家长不知道孩子到底学得怎么样']
const serviceSteps = [
  { title: '基础测评', text: '从 Linux、网络、数据库、Docker、表达能力等维度判断短板。', icon: '🔎' },
  { title: '分层路线', text: '按学生基础、城市、学历和岗位竞争度定制补强路线。', icon: '🧭' },
  { title: '项目沉淀', text: '通过实验文档、Git 提交、故障复盘形成可展示作品集。', icon: '🗂️' },
  { title: '就业陪跑', text: '简历优化、JD 匹配、模拟面试、真实面试复盘。', icon: '🚀' }
]
const flow = ['入学测评', '能力诊断', '学习计划', '任务执行', '项目作品', '简历优化', '模拟面试', '就业跟踪']
</script>

<template>
  <PublicLayout>
    <section class="hero-section">
      <div class="hero-content">
        <p class="eyebrow">凌校长 · IT 就业陪跑计划</p>
        <h1>为基础薄弱的 IT 学生，提供从学习补强到就业落地的全流程陪跑</h1>
        <p class="hero-desc">不承诺包就业，但承诺过程负责、能力交付、证据沉淀。让学生知道每天补什么，让家长看见每一步进步。</p>
        <div class="hero-actions">
          <RouterLink class="primary-btn" to="/assessment">免费测评</RouterLink>
          <RouterLink class="success-btn" to="/courses">查看学习路径</RouterLink>
          <RouterLink class="orange-btn" to="/student">体验学生端</RouterLink>
        </div>
        <div class="hero-kpis">
          <KpiCard label="陪跑闭环" value="8 步" icon="🔁" tone="blue" />
          <KpiCard label="证据沉淀" value="6 类" icon="🧾" tone="green" />
          <KpiCard label="角色协同" value="4 端" icon="🤝" tone="purple" />
        </div>
      </div>
      <div class="hero-illustration">
        <div class="floating-card card-a">学习计划<br /><strong>78%</strong></div>
        <div class="floating-card card-b">就业准备度<br /><strong>65%</strong></div>
        <div class="teacher-illustration">👩‍🏫</div>
        <div class="student-illustration">👨‍💻</div>
        <div class="soft-mountain">⛰️</div>
      </div>
    </section>

    <section class="section-wrap two-col" id="service">
      <SoftCard title="学生常见问题" subtitle="先把真实痛点说清楚，再设计学习路径。">
        <div class="pill-list">
          <span v-for="item in painPoints" :key="item">{{ item }}</span>
        </div>
      </SoftCard>
      <SoftCard title="家长可视化" subtitle="家长不用懂技术，也能看见孩子每天有没有进步。" tone="green">
        <ProgressBar label="本周学习进度" :value="78" tone="green" />
        <ProgressBar label="项目作品完成度" :value="62" tone="blue" />
        <ProgressBar label="就业准备度" :value="65" tone="orange" />
      </SoftCard>
    </section>

    <section class="section-wrap">
      <div class="section-heading">
        <p class="eyebrow">核心服务</p>
        <h2>诊断、补强、沉淀、就业，形成可执行闭环</h2>
      </div>
      <div class="service-grid">
        <SoftCard v-for="step in serviceSteps" :key="step.title" :title="step.title" tone="blue">
          <div class="service-icon">{{ step.icon }}</div>
          <p>{{ step.text }}</p>
        </SoftCard>
      </div>
    </section>

    <section class="section-wrap glass-panel flow-panel">
      <div class="section-heading compact">
        <p class="eyebrow">教学闭环流程</p>
        <h2>不是把课丢给学生，而是陪学生一步一步把能力做出来</h2>
      </div>
      <div class="flow-line">
        <div v-for="(item, index) in flow" :key="item" class="flow-step">
          <span>{{ index + 1 }}</span>
          <strong>{{ item }}</strong>
        </div>
      </div>
    </section>

    <section class="section-wrap case-section">
      <div class="section-heading">
        <p class="eyebrow">成长案例</p>
        <h2>每个案例都围绕背景、问题、路径、证据和阶段成果记录</h2>
      </div>
      <div class="case-grid">
        <SoftCard title="基础薄弱型" subtitle="Linux 基础薄弱 → 运维岗位入门" tone="blue">
          <p>通过 8 周基础补强，完成 Linux、Shell、Docker 三类实验，沉淀 1 个自动化部署项目。</p>
        </SoftCard>
        <SoftCard title="已工作低薪型" subtitle="成都 4K+ → 目标 8K+ 系统运维" tone="orange">
          <p>围绕岗位要求补强系统排障、监控和项目表达，简历从经历罗列升级为项目驱动。</p>
        </SoftCard>
        <SoftCard title="临近毕业焦虑型" subtitle="无项目 → 可讲解作品集" tone="purple">
          <p>用实验记录、Git 提交、截图证据形成项目档案，降低面试时“说不清”的风险。</p>
        </SoftCard>
      </div>
    </section>
  </PublicLayout>
</template>
