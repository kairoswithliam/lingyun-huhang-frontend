<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import SoftCard from '@/components/SoftCard.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import { usePlatformStore } from '@/stores/platform'

const store = usePlatformStore()
const pipeline = ['目标岗位', '简历优化', 'JD 匹配', '投递申请', '模拟面试', 'Offer 跟踪']
const statusText: Record<string, string> = {
  TO_APPLY: '待投递',
  APPLIED: '已投递',
  INTERVIEW: '面试中',
  REJECTED: '未通过',
  OFFER: '已 Offer'
}
</script>

<template>
  <AppLayout active="/job" title="就业陪跑" subtitle="目标岗位、简历版本、投递记录、面试复盘和 Offer 跟踪" role="就业闭环入口">
    <SoftCard title="就业陪跑流程" subtitle="不是只看最终 Offer，而是记录完整就业动作。" tone="orange">
      <div class="job-pipeline">
        <div v-for="(item, index) in pipeline" :key="item" class="pipeline-step">
          <span>{{ index + 1 }}</span>
          <strong>{{ item }}</strong>
        </div>
      </div>
    </SoftCard>

    <div class="content-grid two-thirds">
      <SoftCard title="简历版本管理" subtitle="每一版简历都保留点评和用途。" tone="blue">
        <div class="resume-grid">
          <article v-for="resume in store.activeStudentResumes" :key="resume.id" class="resume-card">
            <span>{{ resume.versionNo }}</span>
            <h3>{{ resume.resumeType }}</h3>
            <p>{{ resume.resumeName }}</p>
            <ProgressBar label="完善度" :value="resume.completionPercent" tone="blue" />
          </article>
        </div>
      </SoftCard>
      <SoftCard title="目标岗位" subtitle="按城市、薪资和岗位竞争度分层。" tone="green">
        <div class="target-box">
          <h3>成都 · 系统运维 / 云计算运维</h3>
          <p>目标薪资：8K - 12K</p>
          <p>核心补强：Linux 排障、Docker 项目、监控平台、项目表达</p>
        </div>
      </SoftCard>
    </div>

    <SoftCard title="投递记录" subtitle="投递不是撒网，而是基于 JD 匹配和简历版本选择。" tone="purple">
      <table class="data-table">
        <thead>
          <tr><th>公司</th><th>岗位</th><th>城市</th><th>薪资</th><th>渠道</th><th>状态</th></tr>
        </thead>
        <tbody>
          <tr v-for="item in store.activeStudentApplications" :key="item.id">
            <td>{{ item.companyName }}</td>
            <td>{{ item.positionName }}</td>
            <td>{{ item.city }}</td>
            <td>{{ item.salaryRange }}</td>
            <td>{{ item.applyChannel }}</td>
            <td><span class="state-good">{{ statusText[item.applyStatus] }}</span></td>
          </tr>
        </tbody>
      </table>
    </SoftCard>

    <SoftCard title="最近一次面试复盘" subtitle="用复盘驱动下一轮补强。" tone="orange">
      <div v-for="item in store.interviews" :key="item.id" class="interview-review">
        <h3>{{ item.interviewType }} · {{ item.interviewTime }}</h3>
        <p><strong>问题记录：</strong>{{ item.questionRecord }}</p>
        <p><strong>回答复盘：</strong>{{ item.answerReview }}</p>
        <p><strong>改进建议：</strong>{{ item.improvementSuggestion }}</p>
      </div>
    </SoftCard>
  </AppLayout>
</template>
