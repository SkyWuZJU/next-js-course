这是一个通过 [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) 工具创建的 [Next.js](https://nextjs.org/) 项目。

## Next.js 是什么

Next.js 是由 Vercel 开发的开源 React 框架，专为构建现代 Web 应用而设计。它提供了服务器端渲染（SSR）、静态站点生成（SSG）、增量静态再生（ISR）、API 路由、基于文件的路由，以及针对图片、字体和性能的内置优化功能。通过预先处理应用程序中的大部分渲染、路由和部署相关复杂问题，Next.js 让开发者能够以最少的配置即可打造出快速、具备良好 SEO 效能且可扩展的网站及全栈应用。

## 快速开始

首先，启动开发服务器：

```bash
npm run dev
# 或者
yarn dev
# 或者
pnpm dev
# 或者
bun dev
```

在浏览器中访问 [http://localhost:3000](http://localhost:3000)，即可查看运行效果。

您可以通过修改 `pages/index.tsx` 文件来编辑页面内容。文件保存后页面会自动更新。

[API 路由](https://nextjs.org/docs/api-routes/introduction)可通过 [http://localhost:3000/api/hello](http://localhost:3000/api/hello) 进行访问。该端点对应的代码位于 `pages/api/hello.ts` 文件中。

`pages/api` 目录会被映射为 `/api/*`。此目录下的文件均被视为 [API 路由](https://nextjs.org/docs/api-routes/introduction)，而非普通的 React 页面。

本项目使用了 [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) 模块，它能自动优化并加载自定义的 Google 字体——Inter。

## 了解更多

若想深入了解 Next.js，可参考以下资源：

- [Next.js 文档](https://nextjs.org/docs)：了解 Next.js 的各项功能与 API。
- [Next.js 教程](https://nextjs.org/learn)：一个交互式的 Next.js 学习指南。

您也可以浏览 [Next.js 的 GitHub 仓库](https://github.com/vercel/next.js/)，我们非常欢迎您的反馈与贡献！

## 部署至 Vercel

想要轻松部署您的 Next.js 应用，推荐使用由 Next.js 开发团队打造的 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)。

更多部署相关信息，请参阅我们的 [Next.js 部署文档](https://nextjs.org/docs/deployment)。
