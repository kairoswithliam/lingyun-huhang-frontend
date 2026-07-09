import type {
  CrmLead,
  EduCourse,
  EduGrowthReport,
  EduProjectPortfolio,
  EduStudent,
  EduStudyTask,
  EduTeacher,
  EduWeeklyReport,
  JobApplicationRecord,
  JobInterviewRecord,
  JobResume
} from '@/types/database'

export const mockStudents: EduStudent[] = [
  {
    id: 1,
    tenantId: 1,
    studentNo: 'LY202607001',
    realName: '李同学',
    gender: '男',
    birthYear: 2002,
    phone: '13800000001',
    city: '成都',
    education: '大专',
    major: '软件技术',
    school: '成都某职业学院',
    workYears: 0.5,
    currentPosition: '初级运维',
    currentSalary: 4500,
    targetCity: '成都',
    targetPosition: '系统运维 / 云计算运维',
    targetSalary: 8000,
    studentStatus: 'LEARNING',
    enrollmentDate: '2026-07-01'
  }
]

export const mockTeachers: EduTeacher[] = [
  { id: 1, tenantId: 1, teacherName: '凌校长', teacherType: '技术老师', specialty: 'Linux / 云计算 / 运维就业规划', status: 'ENABLED' },
  { id: 2, tenantId: 1, teacherName: 'Kairos 导师', teacherType: '就业老师', specialty: '简历优化 / 模拟面试 / 项目包装', status: 'ENABLED' }
]

export const mockCourses: EduCourse[] = [
  { id: 1, tenantId: 1, courseCode: 'LINUX-BASIC', courseName: 'Linux 基础补强', courseCategory: '基础补强课', direction: 'Linux', difficultyLevel: 'BASIC', suitablePeople: '零基础或命令行基础薄弱的学生', learningGoal: '掌握文件、权限、进程、服务、日志、网络排查基础', courseDesc: '围绕系统运维岗位的 Linux 必备能力设计。', status: 'PUBLISHED' },
  { id: 2, tenantId: 1, courseCode: 'DOCKER-BASIC', courseName: 'Docker 容器基础', courseCategory: '岗位技能课', direction: 'Docker', difficultyLevel: 'INTERMEDIATE', suitablePeople: '已掌握 Linux 基础，想进入云计算/DevOps 方向的学生', learningGoal: '能完成镜像构建、容器部署、Compose 编排与排障', courseDesc: '从部署到排障，构建可写入简历的容器实践。', status: 'PUBLISHED' },
  { id: 3, tenantId: 1, courseCode: 'K8S-OPS', courseName: 'K8s 运维强化', courseCategory: '岗位技能课', direction: 'K8s', difficultyLevel: 'INTERMEDIATE', suitablePeople: '掌握 Docker 基础，希望冲击云原生运维岗位的学生', learningGoal: '理解 Pod、Deployment、Service、Ingress、ConfigMap、PVC 与基础排障', courseDesc: '以企业测试环境搭建和应用发布为主线。', status: 'PUBLISHED' },
  { id: 4, tenantId: 1, courseCode: 'MONITOR-PROJECT', courseName: 'Prometheus + Grafana 监控项目', courseCategory: '项目实战课', direction: '监控', difficultyLevel: 'INTERMEDIATE', suitablePeople: '需要沉淀项目作品和监控经验的学生', learningGoal: '完成监控采集、指标展示、告警规则与 Dashboard 设计', courseDesc: '用于简历项目和面试讲解。', status: 'PUBLISHED' },
  { id: 5, tenantId: 1, courseCode: 'RESUME-OPT', courseName: '简历优化与项目表达', courseCategory: '就业冲刺课', direction: '就业', difficultyLevel: 'BASIC', suitablePeople: '准备投递或已工作想提升薪资的学生', learningGoal: '把学习证据转化为可面试、可解释的简历内容', courseDesc: '避免空泛包装，强调真实项目证据。', status: 'PUBLISHED' },
  { id: 6, tenantId: 1, courseCode: 'MOCK-INTERVIEW', courseName: '运维岗位模拟面试', courseCategory: '就业冲刺课', direction: '就业', difficultyLevel: 'INTERMEDIATE', suitablePeople: '进入投递和面试阶段的学生', learningGoal: '提升项目讲解、排障表达和岗位匹配度', courseDesc: '模拟真实面试并形成复盘报告。', status: 'PUBLISHED' }
]

export const mockTasks: EduStudyTask[] = [
  { id: 1, planId: 1, studentId: 1, taskTitle: 'Linux 文件权限复盘', taskType: 'LAB', taskContent: '完成 chmod/chown/ACL 实验并截图记录。', expectedOutput: '实验文档 + 命令截图', priority: 'HIGH', taskStatus: 'DONE', dueDate: '2026-07-09' },
  { id: 2, planId: 1, studentId: 1, taskTitle: 'Shell 巡检脚本练习', taskType: 'HOMEWORK', taskContent: '编写 CPU/内存/磁盘巡检脚本。', expectedOutput: 'Git 提交 + 运行截图', priority: 'HIGH', taskStatus: 'DOING', dueDate: '2026-07-10' },
  { id: 3, planId: 1, studentId: 1, taskTitle: 'Docker Compose 部署 Nginx', taskType: 'LAB', taskContent: '使用 Compose 启动 Nginx 并挂载静态页面。', expectedOutput: 'compose.yaml + 访问截图', priority: 'MEDIUM', taskStatus: 'TODO', dueDate: '2026-07-11' },
  { id: 4, planId: 1, studentId: 1, taskTitle: '简历项目第一版', taskType: 'RESUME', taskContent: '整理 Linux + Docker 项目经历。', expectedOutput: '简历 V1.1', priority: 'MEDIUM', taskStatus: 'SUBMITTED', dueDate: '2026-07-12' }
]

export const mockPortfolios: EduProjectPortfolio[] = [
  { id: 1, studentId: 1, templateId: 1, projectName: '自动化运维部署平台', projectRole: '个人独立完成', projectBackground: '模拟企业内部运维部署场景，完成脚本化部署、日志记录和状态检查。', techStack: 'Linux / Shell / Docker / Jenkins', projectResult: '形成部署脚本、运行手册、异常复盘和 Git 仓库。', gitUrl: 'https://github.com/example/ops-deploy', status: 'REVIEWED' },
  { id: 2, studentId: 1, templateId: 2, projectName: '容器化服务发布实践', projectRole: '项目负责人', projectBackground: '使用 Docker Compose 发布 Nginx + Redis 示例服务。', techStack: 'Docker / Compose / Nginx / Redis', projectResult: '完成环境编排、服务检查、故障定位记录。', status: 'SUBMITTED' }
]

export const mockResumes: JobResume[] = [
  { id: 1, studentId: 1, resumeName: '李同学_系统运维_原始简历', versionNo: 'V1', resumeType: '原始版', targetPosition: '系统运维', completionPercent: 42, status: 'REVIEWED' },
  { id: 2, studentId: 1, resumeName: '李同学_云计算运维_优化版', versionNo: 'V2', resumeType: '优化版', targetPosition: '云计算运维', completionPercent: 76, status: 'REVIEWED' },
  { id: 3, studentId: 1, resumeName: '李同学_K8s运维_投递版', versionNo: 'V3', resumeType: '投递版', targetPosition: 'K8s 运维', completionPercent: 88, status: 'FINAL' }
]

export const mockApplications: JobApplicationRecord[] = [
  { id: 1, studentId: 1, resumeId: 3, companyName: '成都云科', positionName: 'Linux 运维工程师', city: '成都', salaryRange: '7K-10K', applyChannel: 'Boss', applyStatus: 'INTERVIEW', appliedAt: '2026-07-05' },
  { id: 2, studentId: 1, resumeId: 3, companyName: '川蜀智云', positionName: '云计算运维', city: '成都', salaryRange: '8K-12K', applyChannel: '内推', applyStatus: 'APPLIED', appliedAt: '2026-07-07' },
  { id: 3, studentId: 1, resumeId: 2, companyName: '西南数智', positionName: 'DevOps 助理工程师', city: '成都', salaryRange: '8K-13K', applyChannel: '猎聘', applyStatus: 'TO_APPLY' }
]

export const mockInterviews: JobInterviewRecord[] = [
  { id: 1, studentId: 1, applicationId: 1, interviewType: '模拟面试', interviewTime: '2026-07-08 20:00', interviewer: 'Kairos 导师', questionRecord: 'Linux 权限、Docker 镜像、服务排障、项目讲解。', answerReview: 'Linux 基础较稳，Docker 镜像分层表达需要加强。', problemSummary: '项目背景表达略空，需要补充业务场景。', improvementSuggestion: '用“问题-动作-结果”结构重写项目描述。', result: 'PENDING', reviewedBy: 2 }
]

export const mockWeeklyReport: EduWeeklyReport = {
  id: 1,
  studentId: 1,
  weekStartDate: '2026-07-06',
  weekEndDate: '2026-07-12',
  completedTaskCount: 18,
  unfinishedTaskCount: 5,
  studySummary: '本周完成 Linux 权限、Shell 巡检、Docker Compose 初步实践，学习节奏稳定。',
  teacherComment: '执行力较好，但项目表达还需要更贴近岗位场景。',
  problemSummary: 'Docker 网络和容器日志排查掌握不够熟练。',
  nextWeekPlan: '补强 Docker 网络、完成简历项目 V2、进行一次模拟面试。',
  visibleToParent: true,
  generatedAt: '2026-07-09'
}

export const mockGrowthReport: EduGrowthReport = {
  id: 1,
  studentId: 1,
  reportTitle: '李同学 7 月阶段成长报告',
  reportType: '阶段报告',
  abilitySnapshot: { Linux: 78, 网络: 62, 数据库: 58, Shell: 72, Docker: 65, K8s: 35, 表达能力: 60 },
  learningResult: '完成基础补强阶段 70% 内容。',
  projectResult: '沉淀 2 个可讲解项目。',
  resumeResult: '简历从原始 V1 优化到投递 V3。',
  interviewResult: '完成 1 次模拟面试，形成复盘建议。',
  teacherSummary: '具备系统运维初级岗位投递基础，建议继续补强 Docker/K8s 和项目表达。',
  visibleToParent: true
}

export const mockLeads: CrmLead[] = [
  { id: 1, tenantId: 1, leadName: '刘同学', phone: '13800000002', wechat: 'liuxuexi', city: '成都', education: '大专', currentStatus: '已工作', currentSalary: 4200, targetPosition: '系统运维', targetSalary: 8000, sourceChannel: '凌校长私域', intentionLevel: 'A', leadStatus: 'FOLLOWING', ownerId: 1 },
  { id: 2, tenantId: 1, leadName: '王同学', phone: '13800000003', city: '重庆', education: '本科', currentStatus: '在校', targetPosition: '云计算运维', targetSalary: 9000, sourceChannel: '官网测评', intentionLevel: 'B', leadStatus: 'NEW', ownerId: 1 }
]
