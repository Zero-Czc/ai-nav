import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI佩恩 - 发现最好用的AI工具',
  description: '精选全球优质AI工具，涵盖对话、绘画、写作、编程、视频、设计等14大分类，收录109+款工具。',
  keywords: 'AI,人工智能,AI工具,ChatGPT,Claude,Midjourney,AI绘画,AI写作',
  openGraph: {
    type: 'website',
    title: 'AI佩恩 - 发现最好用的AI工具',
    description: '精选全球优质AI工具，涵盖14大分类，收录109+款工具。',
    siteName: 'AI佩恩',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI佩恩 - 发现最好用的AI工具',
    description: '精选全球优质AI工具，涵盖14大分类，收录109+款工具。',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
