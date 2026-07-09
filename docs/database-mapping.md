# 数据库对象与前端类型映射

核心数据库对象已映射在：

```text
src/types/database.ts
```

## 模块映射

| 模块 | 数据库表 | 前端类型 |
|---|---|---|
| 系统基础 | `sys_tenant` | `SysTenant` |
| 系统基础 | `sys_user` | `SysUser` |
| 系统基础 | `sys_role` | `SysRole` |
| 系统基础 | `sys_permission` | `SysPermission` |
| 招生线索 | `crm_lead` | `CrmLead` |
| 招生线索 | `crm_lead_follow_record` | `CrmLeadFollowRecord` |
| 入学测评 | `edu_assessment` | `EduAssessment` |
| 入学测评 | `edu_assessment_report` | `EduAssessmentReport` |
| 学生档案 | `edu_student` | `EduStudent` |
| 老师档案 | `edu_teacher` | `EduTeacher` |
| 家长档案 | `edu_parent` | `EduParent` |
| 课程中心 | `edu_course` | `EduCourse` |
| 课程中心 | `edu_course_chapter` | `EduCourseChapter` |
| 课程中心 | `edu_lesson` | `EduLesson` |
| 学习计划 | `edu_study_plan` | `EduStudyPlan` |
| 学习任务 | `edu_study_task` | `EduStudyTask` |
| 老师点评 | `edu_teacher_comment` | `EduTeacherComment` |
| 实验记录 | `edu_lab_record` | `EduLabRecord` |
| 项目作品 | `edu_project_template` | `EduProjectTemplate` |
| 项目作品 | `edu_project_portfolio` | `EduProjectPortfolio` |
| 文件资产 | `edu_file_asset` | `EduFileAsset` |
| 就业目标 | `job_target` | `JobTarget` |
| 简历版本 | `job_resume` | `JobResume` |
| 简历点评 | `job_resume_review` | `JobResumeReview` |
| JD 匹配 | `job_jd_match` | `JobJdMatch` |
| 投递记录 | `job_application_record` | `JobApplicationRecord` |
| 面试记录 | `job_interview_record` | `JobInterviewRecord` |
| Offer 记录 | `job_offer_record` | `JobOfferRecord` |
| 周报成长 | `edu_weekly_report` | `EduWeeklyReport` |
| 成长报告 | `edu_growth_report` | `EduGrowthReport` |
| 官网内容 | `cms_banner` | `CmsBanner` |
| 官网内容 | `cms_article` | `CmsArticle` |
| 官网内容 | `cms_case` | `CmsCase` |

## 当前 Mock 数据

第一版 Mock 数据在：

```text
src/api/mock.ts
```

覆盖对象：

- 学生：`mockStudents`
- 老师：`mockTeachers`
- 课程：`mockCourses`
- 学习任务：`mockTasks`
- 项目作品：`mockPortfolios`
- 简历版本：`mockResumes`
- 投递记录：`mockApplications`
- 面试记录：`mockInterviews`
- 周报：`mockWeeklyReport`
- 成长报告：`mockGrowthReport`
- CRM 线索：`mockLeads`
