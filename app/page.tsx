import Link from 'next/link'

const categories = [
  { name: 'AI对话', icon: '💬', count: 12, slug: 'chatbot' },
  { name: 'AI写作', icon: '✍️', count: 8, slug: 'writing' },
  { name: 'AI绘画', icon: '🎨', count: 10, slug: 'image' },
  { name: 'AI视频', icon: '🎬', count: 9, slug: 'video' },
  { name: 'AI音频', icon: '🎵', count: 8, slug: 'audio' },
  { name: 'AI编程', icon: '💻', count: 9, slug: 'coding' },
  { name: 'AI设计', icon: '🎯', count: 8, slug: 'design' },
  { name: 'AI营销', icon: '📈', count: 8, slug: 'marketing' },
  { name: 'AI效率', icon: '⚡', count: 8, slug: 'productivity' },
  { name: 'AI数据', icon: '📊', count: 7, slug: 'data' },
  { name: 'AI教育', icon: '📚', count: 8, slug: 'education' },
  { name: 'AI搜索', icon: '🔍', count: 6, slug: 'search' },
  { name: 'AI翻译', icon: '🌐', count: 4, slug: 'translation' },
  { name: 'AI 3D', icon: '🧊', count: 4, slug: '3d' },
]

const featured = [
  { name: 'ChatGPT', desc: 'OpenAI 智能对话助手', icon: '💬', url: 'https://chat.openai.com', tags: ['对话', '多模态'] },
  { name: 'Claude', desc: 'Anthropic AI助手，200K上下文', icon: '💬', url: 'https://claude.ai', tags: ['对话', '长文本'] },
  { name: 'Gemini', desc: 'Google 多模态AI', icon: '💬', url: 'https://gemini.google.com', tags: ['多模态', '搜索'] },
  { name: 'DeepSeek', desc: '国产开源大模型', icon: '💬', url: 'https://chat.deepseek.com', tags: ['开源', '国产'] },
  { name: 'Midjourney', desc: '顶级AI绘画工具', icon: '🎨', url: 'https://www.midjourney.com', tags: ['绘画', '艺术'] },
  { name: 'Runway', desc: '专业AI视频生成', icon: '🎬', url: 'https://runwayml.com', tags: ['视频', '专业'] },
  { name: 'Suno', desc: 'AI音乐生成', icon: '🎵', url: 'https://suno.com', tags: ['音乐', '创作'] },
  { name: 'Cursor', desc: 'AI代码编辑器', icon: '💻', url: 'https://cursor.sh', tags: ['编辑器', '效率'] },
  { name: 'Gamma', desc: 'AI生成PPT', icon: '⚡', url: 'https://gamma.app', tags: ['PPT', '办公'] },
  { name: 'Perplexity', desc: 'AI搜索引擎', icon: '🔍', url: 'https://www.perplexity.ai', tags: ['搜索', '研究'] },
  { name: 'DeepL', desc: '全球最准确的AI翻译', icon: '🌐', url: 'https://www.deepl.com', tags: ['翻译', '高质量'] },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <span>🧭</span>
            <span>AI佩恩</span>
          </Link>
          <nav className="flex gap-6">
            <a href="#categories" className="hover:text-[#ff1744] transition">分类</a>
            <a href="#featured" className="hover:text-[#ff1744] transition">精选</a>
            <a href="#all" className="hover:text-[#ff1744] transition">全部工具</a>
            <a href="#submit" className="hover:text-[#ff1744] transition">提交工具</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">发现最好用的 AI工具</h1>
        <p className="text-[#888] max-w-2xl mx-auto">
          AI佩恩 — 精选全球优质AI工具，涵盖对话、绘画、写作、编程、视频、设计等 14 大分类， 收录 109+ 款工具，帮你找到最适合的AI助手。
        </p>
      </section>

      {/* Categories */}
      <section id="categories" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">📂 分类浏览</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map(cat => (
            <a
              key={cat.slug}
              href={`#cat-${cat.slug}`}
              className="bg-[#1e1e1e] hover:bg-[#262626] rounded-lg p-4 text-center transition"
            >
              <div className="text-2xl mb-2">{cat.icon}</div>
              <div className="font-medium">{cat.name}</div>
              <div className="text-sm text-[#888]">{cat.count} 个工具</div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section id="featured" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">⭐ 精选推荐</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map(tool => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener"
              className="bg-[#1e1e1e] hover:bg-[#262626] rounded-lg p-4 transition"
            >
              <div className="flex items-center gap-2 mb-2">
                <span>⭐</span>
                <span className="text-xl">{tool.icon}</span>
                <span className="font-bold">{tool.name}</span>
              </div>
              <p className="text-[#888] text-sm mb-2">{tool.desc}</p>
              <div className="flex gap-2">
                {tool.tags.map(tag => (
                  <span key={tag} className="text-xs bg-[#262626] px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* All Tools */}
      <section id="all" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">🤖 全部工具</h2>
        {categories.map(cat => (
          <div key={cat.slug} id={`cat-${cat.slug}`} className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              {cat.icon} {cat.name} ({cat.count})
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featured.filter(f => f.tags.includes(cat.name.replace('AI', ''))).map(tool => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener"
                  className="bg-[#1e1e1e] hover:bg-[#262626] rounded-lg p-4 transition"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span>{tool.icon}</span>
                    <span className="font-bold">{tool.name}</span>
                  </div>
                  <p className="text-[#888] text-sm">{tool.desc}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Submit */}
      <section id="submit" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">提交你的AI工具</h2>
        <p className="text-[#888] mb-4">如果你知道好用的AI工具但还没被收录，欢迎提交推荐！</p>
        <a href="mailto:submit@aipeien.cn" className="inline-block bg-[#ff1744] hover:bg-[#e01540] px-6 py-2 rounded-lg font-medium transition">
          📮 提交工具
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a2a2a] py-8 text-center text-[#888]">
        <p>© 2026 AI佩恩 (aipeien.cn) - 发现最好用的AI工具</p>
      </footer>
    </div>
  )
}
