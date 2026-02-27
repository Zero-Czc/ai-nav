/** @type {import('next').NextConfig} */
const nextConfig = {
  // 必须开启纯静态导出，这样才能生成 GitHub Pages 认识的纯静态文件
  output: 'export',
  
  // 禁用图片动态优化（GitHub Pages 不支持服务端动态处理图片）
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig