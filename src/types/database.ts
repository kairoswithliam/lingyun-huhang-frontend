export type ID = number

export type Status = 'ENABLED' | 'DISABLED'
export type PublishStatus = 'DRAFT' | 'PUBLISHED' | 'OFFLINE'
export type StudentStatus = 'LEARNING' | 'JOB_SEEKING' | 'EMPLOYED' | 'PAUSED'
export type TaskStatus = 'TODO' | 'DOING' | 'SUBMITTED' | 'REVIEWED' | 'DONE'
export type LeadStatus = 'NEW' | 'FOLLOWING' | 'CONVERTED' | 'LOST'
export type Visibility = 'STUDENT' | 'PARENT' | 'INTERNAL'

export interface BaseEntity {
  id: ID
  tenantId?: ID
  createdAt?: string
  updatedAt?: string
  createdBy?: ID
  updatedBy?: ID
  isDeleted?: 0 | 1
  remark?: string
}

export interface SysTenant extends BaseEntity {
  tenantCode: string
  tenantName: string
  contactName?: string
  contactPhone?: string
  status: Status
}

export interface SysUser extends BaseEntity {
  username: string
  nickname: string
  realName: string
  phone?: string
  email?: string
  avatarUrl?: string
  userType: 'ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT' | 'SALES'
  status: Status
  lastLoginAt?: string
}

export interface SysRole extends BaseEntity {
  roleCode: string
  roleName: string
  roleDesc?: string
  status: Status
}

export interface SysPermission extends BaseEntity {
  permissionCode: string
  permissionName: string
  permissionType: 'MENU' | 'BUTTON' | 'API'
  parentId?: ID
  routePath?: string
  apiPath?: string
  sortOrder: number
}

export interface CrmLead extends BaseEntity {
  leadName: string
  phone?: string
  wechat?: string
  city?: string
  education?: string
  currentStatus?: '在校' | '已毕业' | '已工作'
  currentSalary?: number
  targetPosition?: string
  targetSalary?: number
  sourceChannel?: string
  intentionLevel: 'A' | 'B' | 'C' | 'D'
  leadStatus: LeadStatus
  ownerId?: ID
  convertedStudentId?: ID
}

export interface CrmLeadFollowRecord extends BaseEntity {
  leadId: ID
  followUserId: ID
  followType: 'PHONE' | 'WECHAT' | 'MEETING'
  followContent: string
  nextFollowAt?: string
  result?: string
}

export interface EduAssessment extends BaseEntity {
  leadId?: ID
  studentId?: ID
  assessmentType: '入学测评' | '阶段测评'
  linuxScore: number
  networkScore: number
  databaseScore: number
  shellScore: number
  dockerScore: number
  k8sScore: number
  communicationScore: number
  totalScore: number
  level: 'BASIC' | 'NORMAL' | 'GOOD'
  assessorId?: ID
}

export interface EduAssessmentReport extends BaseEntity {
  assessmentId: ID
  studentId?: ID
  summary: string
  weaknessAnalysis: string
  learningSuggestion: string
  targetPath: string
  reportUrl?: string
}

export interface EduStudent extends BaseEntity {
  userId?: ID
  studentNo: string
  realName: string
  gender?: '男' | '女'
  birthYear?: number
  phone?: string
  city?: string
  education?: string
  major?: string
  school?: string
  workYears?: number
  currentCompany?: string
  currentPosition?: string
  currentSalary?: number
  targetCity?: string
  targetPosition?: string
  targetSalary?: number
  studentStatus: StudentStatus
  enrollmentDate?: string
  graduationDate?: string
}

export interface EduTeacher extends BaseEntity {
  userId?: ID
  teacherName: string
  teacherType: '技术老师' | '就业老师' | '班主任'
  specialty?: string
  introduction?: string
  status: Status
}

export interface EduParent extends BaseEntity {
  userId?: ID
  parentName: string
  phone?: string
  relationType: '父亲' | '母亲' | '其他'
}

export interface EduCourse extends BaseEntity {
  courseCode: string
  courseName: string
  courseCategory: '基础补强课' | '岗位技能课' | '项目实战课' | '就业冲刺课'
  direction: 'Linux' | 'Docker' | 'K8s' | 'DevOps' | '监控' | '就业'
  difficultyLevel: 'BASIC' | 'INTERMEDIATE' | 'ADVANCED'
  coverUrl?: string
  suitablePeople: string
  learningGoal: string
  courseDesc: string
  status: PublishStatus
}

export interface EduCourseChapter extends BaseEntity {
  courseId: ID
  chapterTitle: string
  chapterDesc?: string
  sortOrder: number
  status: Status
}

export interface EduLesson extends BaseEntity {
  chapterId: ID
  courseId: ID
  lessonTitle: string
  lessonType: 'VIDEO' | 'LIVE' | 'TEXT' | 'LAB'
  videoUrl?: string
  content?: string
  durationMinutes?: number
  sortOrder: number
  status: Status
}

export interface EduCourseEnrollment extends BaseEntity {
  studentId: ID
  courseId: ID
  enrollmentStatus: 'LEARNING' | 'COMPLETED' | 'PAUSED'
  progressPercent: number
  enrolledAt?: string
  completedAt?: string
}

export interface EduStudyPlan extends BaseEntity {
  studentId: ID
  planName: string
  planType: '入学计划' | '阶段计划' | '就业冲刺计划'
  targetPosition?: string
  startDate: string
  endDate: string
  planStatus: 'DRAFT' | 'ACTIVE' | 'COMPLETED' | 'PAUSED'
  summary?: string
}

export interface EduStudyTask extends BaseEntity {
  planId: ID
  studentId: ID
  taskTitle: string
  taskType: 'COURSE' | 'HOMEWORK' | 'LAB' | 'PROJECT' | 'RESUME' | 'INTERVIEW'
  relatedCourseId?: ID
  relatedLessonId?: ID
  taskContent: string
  expectedOutput?: string
  startDate?: string
  dueDate?: string
  priority: 'LOW' | 'MEDIUM' | 'HIGH'
  taskStatus: TaskStatus
}

export interface EduTeacherComment extends BaseEntity {
  studentId: ID
  teacherId: ID
  targetType: 'STUDENT' | 'TASK' | 'HOMEWORK' | 'LAB' | 'PROJECT' | 'RESUME' | 'INTERVIEW'
  targetId: ID
  score?: number
  commentContent: string
  improvementSuggestion?: string
  visibility: Visibility
}

export interface EduLabRecord extends BaseEntity {
  studentId: ID
  taskId?: ID
  labTitle: string
  labType: 'Linux' | 'Docker' | 'K8s' | 'MySQL' | 'CI/CD' | '监控'
  labEnv?: string
  labSteps?: string
  problemRecord?: string
  solutionRecord?: string
  conclusion?: string
  evidenceFileId?: ID
  gitUrl?: string
  status: 'DRAFT' | 'SUBMITTED' | 'REVIEWED'
}

export interface EduProjectTemplate extends BaseEntity {
  templateName: string
  projectDirection: 'Linux' | 'DevOps' | 'K8s' | 'Monitor'
  difficultyLevel: 'BASIC' | 'INTERMEDIATE' | 'ADVANCED'
  projectBackground: string
  projectGoal: string
  techStack: string
  resumeDescription?: string
  interviewPoints?: string
  status: PublishStatus
}

export interface EduProjectPortfolio extends BaseEntity {
  studentId: ID
  templateId?: ID
  projectName: string
  projectRole: string
  projectBackground: string
  techStack: string
  implementationProcess?: string
  problemSolution?: string
  projectResult?: string
  gitUrl?: string
  documentUrl?: string
  resumeText?: string
  status: 'DRAFT' | 'SUBMITTED' | 'REVIEWED' | 'APPROVED'
}

export interface EduFileAsset extends BaseEntity {
  ownerUserId?: ID
  fileName: string
  fileType: 'PDF' | 'DOCX' | 'PNG' | 'ZIP' | 'MD' | 'OTHER'
  bizType: 'RESUME' | 'HOMEWORK' | 'LAB' | 'PROJECT' | 'REPORT' | 'COURSE'
  storageType: 'LOCAL' | 'MINIO' | 'OSS'
  storagePath: string
  fileSize?: number
}

export interface JobTarget extends BaseEntity {
  studentId: ID
  targetCity: string
  targetPosition: string
  targetSalaryMin?: number
  targetSalaryMax?: number
  direction: 'Linux' | '云计算' | 'DevOps' | 'K8s'
  targetDesc?: string
  status: 'ACTIVE' | 'CLOSED'
}

export interface JobResume extends BaseEntity {
  studentId: ID
  resumeName: string
  versionNo: string
  resumeType: '原始版' | '优化版' | '投递版'
  fileAssetId?: ID
  contentJson?: Record<string, unknown>
  targetPosition?: string
  completionPercent: number
  status: 'DRAFT' | 'REVIEWED' | 'FINAL'
}

export interface JobResumeReview extends BaseEntity {
  resumeId: ID
  studentId: ID
  reviewerId: ID
  score: number
  problemSummary: string
  optimizationSuggestion: string
  projectSuggestion?: string
  interviewRisk?: string
  reviewedAt?: string
}

export interface JobJdMatch extends BaseEntity {
  studentId: ID
  jobTargetId: ID
  companyName: string
  jdTitle: string
  jdUrl?: string
  jdContent?: string
  matchScore: number
  matchedSkills?: string
  missingSkills?: string
  suggestion?: string
}

export interface JobApplicationRecord extends BaseEntity {
  studentId: ID
  jdMatchId?: ID
  resumeId?: ID
  companyName: string
  positionName: string
  city?: string
  salaryRange?: string
  applyChannel?: string
  applyStatus: 'TO_APPLY' | 'APPLIED' | 'INTERVIEW' | 'REJECTED' | 'OFFER'
  appliedAt?: string
  followNote?: string
}

export interface JobInterviewRecord extends BaseEntity {
  studentId: ID
  applicationId?: ID
  interviewType: '模拟面试' | '一面' | '二面' | 'HR 面'
  interviewTime?: string
  interviewer?: string
  questionRecord?: string
  answerReview?: string
  problemSummary?: string
  improvementSuggestion?: string
  result: 'PASS' | 'FAILED' | 'PENDING'
  reviewedBy?: ID
}

export interface JobOfferRecord extends BaseEntity {
  studentId: ID
  applicationId?: ID
  companyName: string
  positionName: string
  city?: string
  salaryMonthly?: number
  salaryStructure?: string
  offerStatus: 'RECEIVED' | 'ACCEPTED' | 'REJECTED'
  onboardDate?: string
  note?: string
}

export interface EduWeeklyReport extends BaseEntity {
  studentId: ID
  weekStartDate: string
  weekEndDate: string
  completedTaskCount: number
  unfinishedTaskCount: number
  studySummary: string
  teacherComment: string
  problemSummary?: string
  nextWeekPlan?: string
  visibleToParent: boolean
  generatedAt?: string
}

export interface EduGrowthReport extends BaseEntity {
  studentId: ID
  reportTitle: string
  reportType: '月报' | '阶段报告' | '结课报告'
  abilitySnapshot: Record<string, number>
  learningResult?: string
  projectResult?: string
  resumeResult?: string
  interviewResult?: string
  teacherSummary?: string
  reportFileId?: ID
  visibleToParent: boolean
}

export interface CmsBanner extends BaseEntity {
  title: string
  subtitle?: string
  imageUrl?: string
  linkUrl?: string
  sortOrder: number
  status: Status
}

export interface CmsArticle extends BaseEntity {
  title: string
  category: string
  summary?: string
  content: string
  coverUrl?: string
  authorId?: ID
  publishStatus: 'DRAFT' | 'PUBLISHED'
  publishedAt?: string
}

export interface CmsCase extends BaseEntity {
  studentId?: ID
  caseTitle: string
  studentBackground: string
  originalProblem: string
  learningPath: string
  projectResult: string
  resumeResult?: string
  jobResult?: string
  isAnonymous: boolean
  publishStatus: 'DRAFT' | 'PUBLISHED'
  publishedAt?: string
}
