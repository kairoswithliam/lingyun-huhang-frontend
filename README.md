# 凌云护航学习成长平台 · 前端工程

技术栈：Vue 3 + TypeScript + Vite + Pinia + Vue Router + Axios。

> 本工程已按「官网招生 + 课程教学 + 学习交付 + 就业陪跑 + 家长可视化 + 运营后台」完成第一版前端原型，可直接启动查看。

## 1. 环境要求

推荐使用：

```bash
node -v   # v24.x
npm -v    # v11.x
```

## 2. 启动

```bash
npm install
npm run dev
```

默认访问：

```text
http://localhost:5173
```

## 3. 构建

```bash
npm run build
npm run preview
```

## 4. 页面路由

| 路由 | 页面 | 说明 |
|---|---|---|
| `/` | 官网首页 | 品牌官网、服务体系、转化入口 |
| `/assessment` | 免费测评 | 测评表单、能力雷达图、CRM 线索模拟 |
| `/courses` | 课程中心 | 基础补强课、岗位技能课、项目实战课、就业冲刺课 |
| `/student` | 学生工作台 | 学习任务、进度、项目证据、老师点评 |
| `/teacher` | 老师工作台 | 学生列表、能力画像、布置任务、周报生成 |
| `/parent` | 家长看板 | 家长可视化、学习进展、成长时间线 |
| `/job` | 就业陪跑 | 简历版本、投递记录、面试复盘 |
| `/growth` | 学生成长档案 | 测评、计划、作业、实验、项目、简历、面试归档 |
| `/admin` | 运营后台 | 线索、用户、课程、案例、内容、数据看板 |

## 5. 工程结构

```text
src/
├── api/                 # 接口地址、Axios 封装、Mock 数据
├── components/          # 通用 UI 组件
├── layouts/             # 官网布局、后台布局
├── router/              # 前端路由
├── stores/              # Pinia 数据状态
├── styles/              # 全局样式
├── types/               # 数据库对象映射的 TypeScript 类型
└── views/               # 页面视图
```

## 6. 数据库与接口对应

- `src/types/database.ts`：把前面设计的数据库核心表映射成 TypeScript Interface。
- `src/api/endpoints.ts`：按模块设计 RESTful API 路径。
- `src/api/mock.ts`：提供第一版可演示数据，方便无后端时完整预览。
- `src/stores/platform.ts`：集中管理学生、课程、任务、简历、就业、周报等业务状态。

## 7. 后端对接方式

开发期默认启用 Mock：

```env
VITE_ENABLE_MOCK=true
VITE_API_BASE_URL=/api
```

后续接入 FastAPI 后端时，将 `.env.production` 或 `.env.development` 中的：

```env
VITE_ENABLE_MOCK=false
VITE_API_BASE_URL=/api
```

再按 `docs/api-design.md` 对齐接口即可。

## 8. 设计原则

- 浅色、简约、柔美、教育陪跑感；
- 以学生成长档案为核心主线；
- 所有学习动作尽量形成证据；
- 家长端弱化技术术语，强调可理解的成长记录；
- 老师端强调诊断、布置、点评、复盘；
- 就业端强调完整动作闭环，而不是只记录最终 Offer。

## Windows / 企业网络安装依赖排错

如果安装时报 `ETIMEDOUT`，请确认项目内 `.npmrc` 已使用国内镜像源：

```bash
npm config get registry
```

推荐清理后重新安装：

```powershell
# 在项目目录执行
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm cache verify
npm install --registry=https://registry.npmmirror.com/
npm run dev
```

如果仍然提示 `EPERM: operation not permitted`，通常是 VSCode、终端、杀毒软件或资源管理器占用了 `node_modules`，关闭相关程序后重试，或使用管理员 PowerShell 执行上面的清理命令。
