/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true,  // 静态导出时需要禁用图片优化
  },
  trailingSlash: true, // 添加尾部斜杠，这对于静态导出很重要
};

module.exports = nextConfig; 