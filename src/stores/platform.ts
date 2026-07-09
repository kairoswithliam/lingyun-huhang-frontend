import { defineStore } from 'pinia'
import {
  mockApplications,
  mockCourses,
  mockGrowthReport,
  mockInterviews,
  mockLeads,
  mockPortfolios,
  mockResumes,
  mockStudents,
  mockTasks,
  mockTeachers,
  mockWeeklyReport
} from '@/api/mock'

export const usePlatformStore = defineStore('platform', {
  state: () => ({
    currentTenant: '凌云护航',
    currentUser: {
      id: 1,
      name: '凌校长',
      role: '机构管理员',
      avatar: '凌'
    },
    activeStudentId: 1,
    students: mockStudents,
    teachers: mockTeachers,
    courses: mockCourses,
    tasks: mockTasks,
    portfolios: mockPortfolios,
    resumes: mockResumes,
    applications: mockApplications,
    interviews: mockInterviews,
    leads: mockLeads,
    weeklyReport: mockWeeklyReport,
    growthReport: mockGrowthReport,
    assessmentForm: {
      name: '',
      contact: '',
      education: '',
      status: '',
      city: '',
      direction: '',
      foundation: '',
      note: ''
    }
  }),
  getters: {
    activeStudent(state) {
      return state.students.find((item) => item.id === state.activeStudentId) || state.students[0]
    },
    studentTasks(state) {
      return state.tasks.filter((item) => item.studentId === state.activeStudentId)
    },
    completedTaskCount(): number {
      return this.studentTasks.filter((item) => item.taskStatus === 'DONE' || item.taskStatus === 'REVIEWED').length
    },
    weeklyCompletionRate(): number {
      if (!this.studentTasks.length) return 0
      return Math.round((this.completedTaskCount / this.studentTasks.length) * 100)
    },
    activeStudentPortfolios(state) {
      return state.portfolios.filter((item) => item.studentId === state.activeStudentId)
    },
    activeStudentResumes(state) {
      return state.resumes.filter((item) => item.studentId === state.activeStudentId)
    },
    activeStudentApplications(state) {
      return state.applications.filter((item) => item.studentId === state.activeStudentId)
    }
  },
  actions: {
    submitAssessment() {
      const lead = {
        id: this.leads.length + 1,
        tenantId: 1,
        leadName: this.assessmentForm.name || '官网测评用户',
        phone: this.assessmentForm.contact,
        wechat: this.assessmentForm.contact,
        city: this.assessmentForm.city,
        education: this.assessmentForm.education,
        currentStatus: this.assessmentForm.status as '在校' | '已毕业' | '已工作',
        targetPosition: this.assessmentForm.direction,
        sourceChannel: '官网测评',
        intentionLevel: 'B' as const,
        leadStatus: 'NEW' as const,
        ownerId: 1,
        createdAt: new Date().toISOString()
      }
      this.leads.unshift(lead)
      return lead
    }
  }
})
