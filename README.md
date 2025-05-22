# Mirko Romanelli 作品集网站复刻

这是一个使用Next.js和TailwindCSS复刻的Mirko Romanelli作品集网站。

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion (动画)

## 项目结构

```
/app
  /about            # 关于页面
  /contact          # 联系页面
  /works            # 作品集页面
    /[slug]         # 项目详情页面
  /components       # 组件
    /layout         # 布局组件
    /projects       # 项目相关组件
    /ui             # UI组件
  /data             # 数据文件
  globals.css       # 全局样式
  layout.tsx        # 根布局
  page.tsx          # 首页
/public
  /images           # 图片资源
    /projects       # 项目图片
```

## 功能特点

- 响应式设计
- 平滑过渡动画
- 项目筛选功能
- 联系表单
- 项目详情页面
- 项目间导航

## 运行项目

1. 安装依赖:

```bash
npm install
```

2. 启动开发服务器:

```bash
npm run dev
```

3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 构建生产版本

```bash
npm run build
```

## 部署

项目可以部署到Vercel、Netlify或其他支持Next.js的平台。

## 注意事项

- 项目图片需要放在`/public/images/projects/`目录下，并且文件名需要与项目数据中的`imageUrl`字段匹配。
- 项目使用了客户端组件，以便实现动画和交互效果。
