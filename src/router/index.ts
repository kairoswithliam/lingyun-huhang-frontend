import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  { path: '/', name: 'home', component: () => import('@/views/PublicHome.vue'), meta: { title: '官网首页' } },
  { path: '/assessment', name: 'assessment', component: () => import('@/views/AssessmentView.vue'), meta: { title: '免费测评' } },
  { path: '/courses', name: 'courses', component: () => import('@/views/CoursesView.vue'), meta: { title: '课程中心' } },
  { path: '/student', name: 'student', component: () => import('@/views/StudentDashboard.vue'), meta: { title: '学生工作台' } },
  { path: '/teacher', name: 'teacher', component: () => import('@/views/TeacherDashboard.vue'), meta: { title: '老师工作台' } },
  { path: '/parent', name: 'parent', component: () => import('@/views/ParentDashboard.vue'), meta: { title: '家长看板' } },
  { path: '/job', name: 'job', component: () => import('@/views/JobCoaching.vue'), meta: { title: '就业陪跑' } },
  { path: '/growth', name: 'growth', component: () => import('@/views/GrowthArchive.vue'), meta: { title: '学生成长档案' } },
  { path: '/admin', name: 'admin', component: () => import('@/views/AdminDashboard.vue'), meta: { title: '运营后台' } }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = `${to.meta.title || '平台'} - 凌云护航`
})
