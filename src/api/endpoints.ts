export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    profile: '/auth/profile'
  },
  cms: {
    banners: '/cms/banners',
    articles: '/cms/articles',
    cases: '/cms/cases'
  },
  crm: {
    leads: '/crm/leads',
    leadFollowRecords: (leadId: number) => `/crm/leads/${leadId}/follow-records`,
    assessmentSubmit: '/edu/assessments',
    assessmentReport: (assessmentId: number) => `/edu/assessments/${assessmentId}/report`
  },
  edu: {
    students: '/edu/students',
    teachers: '/edu/teachers',
    parents: '/edu/parents',
    courses: '/edu/courses',
    courseDetail: (courseId: number) => `/edu/courses/${courseId}`,
    studyPlans: '/edu/study-plans',
    studyTasks: '/edu/study-tasks',
    taskSubmission: '/edu/task-submissions',
    comments: '/edu/teacher-comments',
    labs: '/edu/lab-records',
    projectTemplates: '/edu/project-templates',
    portfolios: '/edu/project-portfolios',
    weeklyReports: '/edu/weekly-reports',
    growthReports: '/edu/growth-reports'
  },
  job: {
    targets: '/job/targets',
    resumes: '/job/resumes',
    resumeReviews: '/job/resume-reviews',
    jdMatches: '/job/jd-matches',
    applications: '/job/applications',
    interviews: '/job/interviews',
    offers: '/job/offers'
  },
  admin: {
    dashboard: '/admin/dashboard',
    users: '/admin/users',
    roles: '/admin/roles',
    permissions: '/admin/permissions'
  }
} as const

export type ApiResponse<T> = {
  code: number
  message: string
  data: T
  traceId?: string
}

export type PageResult<T> = {
  records: T[]
  total: number
  page: number
  pageSize: number
}
