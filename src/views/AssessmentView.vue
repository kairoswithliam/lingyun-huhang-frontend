<script setup lang="ts">
import { ref } from 'vue'
import PublicLayout from '@/layouts/PublicLayout.vue'
import RadarChart from '@/components/RadarChart.vue'
import SoftCard from '@/components/SoftCard.vue'
import { usePlatformStore } from '@/stores/platform'

const store = usePlatformStore()
const submitted = ref(false)
const ability = { Linux: 62, 网络: 48, 数据库: 42, Shell: 58, Docker: 35, K8s: 22, 表达能力: 55 }

function submit() {
  store.submitAssessment()
  submitted.value = true
}
</script>

<template>
  <PublicLayout>
    <section class="page-hero slim">
      <p class="eyebrow">官网转化入口</p>
      <h1>免费测评，先找短板，再定路线</h1>
      <p>测评不是为了制造焦虑，而是为了让学生、老师、家长都知道下一步该补什么。</p>
    </section>

    <section class="assessment-grid section-wrap">
      <SoftCard title="科学测评维度" subtitle="建议用于入学前沟通、阶段复盘和家长汇报。" tone="blue">
        <ul class="check-list">
          <li>7 大能力维度：Linux、网络、数据库、Shell、Docker、K8s、表达能力</li>
          <li>10 分钟快速测评，结合老师沟通判断真实水平</li>
          <li>生成能力诊断报告，自动推荐分层学习路线</li>
          <li>与后续学习计划、项目作品、简历优化联动</li>
        </ul>
        <div class="radar-wrap">
          <RadarChart :data="ability" />
        </div>
      </SoftCard>

      <SoftCard title="免费测评信息" subtitle="提交后进入 CRM 线索池，老师可继续跟进。" tone="green">
        <form class="form-grid" @submit.prevent="submit">
          <label>
            姓名
            <input v-model="store.assessmentForm.name" placeholder="请输入学生姓名" />
          </label>
          <label>
            手机号 / 微信
            <input v-model="store.assessmentForm.contact" placeholder="方便老师联系" />
          </label>
          <label>
            学历
            <select v-model="store.assessmentForm.education">
              <option value="">请选择</option>
              <option>中专</option>
              <option>大专</option>
              <option>本科</option>
            </select>
          </label>
          <label>
            当前状态
            <select v-model="store.assessmentForm.status">
              <option value="">请选择</option>
              <option>在校</option>
              <option>已毕业</option>
              <option>已工作</option>
            </select>
          </label>
          <label>
            所在城市
            <input v-model="store.assessmentForm.city" placeholder="例如：成都" />
          </label>
          <label>
            目标方向
            <select v-model="store.assessmentForm.direction">
              <option value="">请选择</option>
              <option>Linux 运维</option>
              <option>云计算运维</option>
              <option>DevOps</option>
              <option>K8s 运维</option>
              <option>暂不确定</option>
            </select>
          </label>
          <label class="span-2">
            当前基础自评
            <select v-model="store.assessmentForm.foundation">
              <option value="">请选择</option>
              <option>几乎零基础</option>
              <option>会基础命令</option>
              <option>做过简单项目</option>
              <option>已工作但想提升</option>
            </select>
          </label>
          <label class="span-2">
            备注
            <textarea v-model="store.assessmentForm.note" placeholder="可以补充当前薪资、目标薪资、学习时间等" />
          </label>
          <button class="primary-btn span-2" type="submit">立即提交测评</button>
        </form>
      </SoftCard>
    </section>

    <section v-if="submitted" class="section-wrap">
      <SoftCard title="能力诊断报告预览" subtitle="已模拟生成一条 CRM 线索，后端接口可对应 crm_lead 与 edu_assessment。" tone="orange">
        <div class="report-preview">
          <div>
            <strong>综合评估：62 分</strong>
            <p>建议从 Linux / Shell 基础补强开始，同时逐步加入 Docker 项目实践。</p>
          </div>
          <div class="tag-group">
            <span>优势：Linux、Shell</span>
            <span>待提升：Docker、网络</span>
            <span>薄弱：K8s、数据库</span>
          </div>
        </div>
      </SoftCard>
    </section>
  </PublicLayout>
</template>
