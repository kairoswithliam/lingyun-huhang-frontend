# 凌云护航学习成长平台 · 接口设计草案

## 1. 通用响应结构

```ts
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
```

## 2. 鉴权接口

| 方法 | 路径 | 说明 |
|---|---|---|
| POST | `/api/auth/login` | 登录 |
| GET | `/api/auth/profile` | 当前用户信息 |

## 3. 官网 CMS

| 方法 | 路径 | 对应表 | 说明 |
|---|---|---|---|
| GET | `/api/cms/banners` | `cms_banner` | 首页 Banner |
| GET | `/api/cms/articles` | `cms_article` | 文章列表 |
| GET | `/api/cms/cases` | `cms_case` | 成长案例 |

## 4. 招生 CRM

| 方法 | 路径 | 对应表 | 说明 |
|---|---|---|---|
| GET | `/api/crm/leads` | `crm_lead` | 线索列表 |
| POST | `/api/crm/leads` | `crm_lead` | 新增线索 |
| GET | `/api/crm/leads/{leadId}/follow-records` | `crm_lead_follow_record` | 跟进记录 |
| POST | `/api/edu/assessments` | `edu_assessment` | 提交测评 |
| GET | `/api/edu/assessments/{assessmentId}/report` | `edu_assessment_report` | 测评报告 |

## 5. 教学交付

| 方法 | 路径 | 对应表 | 说明 |
|---|---|---|---|
| GET | `/api/edu/students` | `edu_student` | 学生列表 |
| GET | `/api/edu/teachers` | `edu_teacher` | 老师列表 |
| GET | `/api/edu/courses` | `edu_course` | 课程列表 |
| GET | `/api/edu/courses/{courseId}` | `edu_course` / `edu_course_chapter` / `edu_lesson` | 课程详情 |
| GET | `/api/edu/study-plans` | `edu_study_plan` | 学习计划 |
| GET | `/api/edu/study-tasks` | `edu_study_task` | 学习任务 |
| POST | `/api/edu/task-submissions` | `edu_task_submission` | 提交任务 |
| POST | `/api/edu/teacher-comments` | `edu_teacher_comment` | 老师点评 |
| GET | `/api/edu/lab-records` | `edu_lab_record` | 实验记录 |
| GET | `/api/edu/project-portfolios` | `edu_project_portfolio` | 项目作品 |
| GET | `/api/edu/weekly-reports` | `edu_weekly_report` | 学习周报 |
| GET | `/api/edu/growth-reports` | `edu_growth_report` | 成长报告 |

## 6. 就业陪跑

| 方法 | 路径 | 对应表 | 说明 |
|---|---|---|---|
| GET | `/api/job/targets` | `job_target` | 目标岗位 |
| GET | `/api/job/resumes` | `job_resume` | 简历版本 |
| POST | `/api/job/resume-reviews` | `job_resume_review` | 简历点评 |
| GET | `/api/job/jd-matches` | `job_jd_match` | JD 匹配 |
| GET | `/api/job/applications` | `job_application_record` | 投递记录 |
| GET | `/api/job/interviews` | `job_interview_record` | 面试记录 |
| GET | `/api/job/offers` | `job_offer_record` | Offer 记录 |

## 7. 运营后台

| 方法 | 路径 | 对应表 | 说明 |
|---|---|---|---|
| GET | `/api/admin/dashboard` | 聚合统计 | 数据看板 |
| GET | `/api/admin/users` | `sys_user` | 用户管理 |
| GET | `/api/admin/roles` | `sys_role` | 角色管理 |
| GET | `/api/admin/permissions` | `sys_permission` | 权限管理 |
