# JFT-Basic 学习助手

一个为准备 JFT-Basic 考试和申请日本特定技能1号签证的学习者设计的 Web 应用。

## 🌟 功能

### 第一阶段（当前版本）
- ✅ 响应式首页
- ✅ 导航栏（首页、单词本、练习）
- ✅ 中文界面
- ✅ 手机端优先设计

### 即将推出
- 📖 单词学习系统
- ✍️ 练习题库
- 📊 学习进度追踪
- 💾 本地数据保存（localStorage）

## 🛠 技术栈

- **前端框架**: React 18
- **语言**: TypeScript
- **构建工具**: Vite
- **样式**: CSS3 + Responsive Design
- **浏览器存储**: localStorage

## 📋 项目结构

```
japanese-learning-site/
├── src/
│   ├── pages/
│   │   ├── Home.tsx          # 首页
│   │   ├── WordBook.tsx      # 单词本
│   │   └── Practice.tsx      # 练习页面
│   ├── styles/
│   │   └── pages.css         # 页面样式
│   ├── App.tsx               # 主应用组件
│   ├── App.css               # 应用样式
│   ├── index.css             # 全局样式
│   └── main.tsx              # 应用入口
├── index.html                # HTML 入口
├── package.json              # 依赖配置
├── tsconfig.json             # TypeScript 配置
├── vite.config.ts            # Vite 配置
└── .gitignore                # Git 忽略规则
```

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/3153713560-max/japanese-learning-site.git
cd japanese-learning-site
```

### 2. 安装依赖
```bash
npm install
```

### 3. 开发服务器
```bash
npm run dev
```

浏览器会自动打开 http://localhost:5173

### 4. 构建项目
```bash
npm run build
```

构建后的文件在 `dist` 目录中。

## 📱 响应式设计

- **手机端**: 320px - 767px
- **平板及以上**: 768px+
- 底部导航栏固定
- 所有按钮针对触摸优化

## 🎨 设计特点

- 清爽的紫蓝色主题
- 大按钮便于手机点击
- 卡片式布局
- 流畅的过渡动画

## 📝 项目路线图

### 第二阶段
- [ ] 单词库数据（100+ 词汇）
- [ ] 单词卡片学习
- [ ] 日语语音朗读
- [ ] localStorage 数据保存

### 第三阶段
- [ ] 30+ 练习题
- [ ] 练习题解答
- [ ] 错题本
- [ ] 正确率统计

### 第四阶段
- [ ] 学习进度面板
- [ ] 30天学习计划
- [ ] 连续学习天数统计
- [ ] 官方资源链接

## ⚠️ 免责声明

本项目为学习工具，不是官方考试资源。所有考试信息以日本官方机构公告为准。

## 📖 官方资源

- [JFT-Basic 官方网站](https://www.jpf.go.jp/jft-basic/)
- [いろどり 生活日語教材](https://www.irodori.jpf.go.jp/)
- [特定技能信息](https://www.ssw.go.jp/)

## 📧 反馈与贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT
