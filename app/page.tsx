import Link from 'next/link'

// 分类数据
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

// 工具数据 - 按分类分组
const toolsByCategory: Record<string, Array<{name: string, desc: string, icon: string, url: string}>> = {
  chatbot: [
    { name: 'ChatGPT', desc: 'OpenAI 智能对话助手', icon: '💬', url: 'https://chat.openai.com' },
    { name: 'Claude', desc: 'Anthropic AI助手，200K上下文', icon: '💬', url: 'https://claude.ai' },
    { name: 'Gemini', desc: 'Google 多模态AI', icon: '💬', url: 'https://gemini.google.com' },
    { name: 'DeepSeek', desc: '国产开源大模型', icon: '💬', url: 'https://chat.deepseek.com' },
    { name: 'Kimi', desc: '月之暗面 AI助手', icon: '💬', url: 'https://kimi.moonshot.cn' },
    { name: '通义千问', desc: '阿里AI助手', icon: '💬', url: 'https://tongyi.aliyun.com' },
    { name: '文心一言', desc: '百度AI助手', icon: '💬', url: 'https://yiyan.baidu.com' },
    { name: '智谱清言', desc: '智谱AI助手', icon: '💬', url: 'https://www.zhipuai.cn' },
    { name: 'Character.AI', desc: '角色扮演AI', icon: '💬', url: 'https://character.ai' },
    { name: 'Poe', desc: '多模型AI聊天平台', icon: '💬', url: 'https://poe.com' },
    { name: 'Grok', desc: 'xAI 推出的AI助手', icon: '💬', url: 'https://grok.x.ai' },
    { name: 'Devv', desc: '编程专用AI助手', icon: '💬', url: 'https://devv.ai' },
  ],
  writing: [
    { name: 'Notion AI', desc: '笔记AI写作助手', icon: '✍️', url: 'https://notion.so' },
    { name: 'Copy.ai', desc: '营销文案生成', icon: '✍️', url: 'https://www.copy.ai' },
    { name: 'Jasper', desc: 'AI内容创作平台', icon: '✍️', url: 'https://www.jasper.ai' },
    { name: 'Rytr', desc: 'AI写作助手', icon: '✍️', url: 'https://rytr.me' },
    { name: 'Writesonic', desc: 'AI文章写作', icon: '✍️', url: 'https://writesonic.com' },
    { name: 'Quillbot', desc: 'AI改写润色', icon: '✍️', url: 'https://quillbot.com' },
    { name: 'Wordtune', desc: 'AI句子重写', icon: '✍️', url: 'https://www.wordtune.com' },
    { name: 'Grammarly', desc: 'AI语法检查', icon: '✍️', url: 'https://www.grammarly.com' },
  ],
  image: [
    { name: 'Midjourney', desc: '顶级AI绘画工具', icon: '🎨', url: 'https://www.midjourney.com' },
    { name: 'DALL-E 3', desc: 'OpenAI绘画模型', icon: '🎨', url: 'https://openai.com/dall-e-3' },
    { name: 'Stable Diffusion', desc: '开源AI绘画', icon: '🎨', url: 'https://stability.ai' },
    { name: 'Leonardo', desc: 'AI创作平台', icon: '🎨', url: 'https://leonardo.ai' },
    { name: 'Ideogram', desc: 'AI图像生成', icon: '🎨', url: 'https://ideogram.ai' },
    { name: 'Flux', desc: '新一代AI图像生成', icon: '🎨', url: 'https://flux.ai' },
    { name: 'Liblib', desc: '国产AI绘画', icon: '🎨', url: 'https://www.liblib.art' },
    { name: '通义万相', desc: '阿里AI绘画', icon: '🎨', url: 'https://tongyi.aliyun.com/wanxiang' },
    { name: '文心一格', desc: '百度AI绘画', icon: '🎨', url: 'https://yige.baidu.com' },
    { name: '剪映AI', desc: '字节AI绘画', icon: '🎨', url: 'https://www.capcut.cn' },
  ],
  video: [
    { name: 'Runway', desc: '专业AI视频生成', icon: '🎬', url: 'https://runwayml.com' },
    { name: 'Pika', desc: 'AI视频生成', icon: '🎬', url: 'https://pika.art' },
    { name: 'Suno', desc: 'AI音乐视频', icon: '🎵', url: 'https://suno.com' },
    { name: 'HeyGen', desc: 'AI数字人视频', icon: '🎬', url: 'https://heygen.com' },
    { name: 'Synthesia', desc: 'AI视频生成平台', icon: '🎬', url: 'https://synthesia.io' },
    { name: 'Luma AI', desc: 'AI视频生成', icon: '🎬', url: 'https://lumalabs.ai' },
    { name: 'Kling', desc: '快手AI视频', icon: '🎬', url: 'https://klingai.com' },
    { name: 'Viggle', desc: 'AI视频生成', icon: '🎬', url: 'https://viggle.ai' },
    { name: 'Runway Gen-2', desc: 'AI视频生成', icon: '🎬', url: 'https://runwayml.com' },
  ],
  audio: [
    { name: 'ElevenLabs', desc: 'AI语音合成', icon: '🎵', url: 'https://elevenlabs.io' },
    { name: 'Murf AI', desc: 'AI人声合成', icon: '🎵', url: 'https://murf.ai' },
    { name: 'Lalal AI', desc: 'AI音频处理', icon: '🎵', url: 'https://lalal.ai' },
    { name: 'Speechify', desc: 'AI语音朗读', icon: '🎵', url: 'https://speechify.com' },
    { name: 'Adobe Podcast', desc: 'AI音频增强', icon: '🎵', url: 'https://podcast.adobe.com' },
    { name: 'Otter AI', desc: 'AI会议记录', icon: '🎵', url: 'https://otter.ai' },
    { name: 'Descript', desc: 'AI音频编辑', icon: '🎵', url: 'https://descript.com' },
    { name: 'Fireflies', desc: 'AI会议助理', icon: '🎵', url: 'https://fireflies.ai' },
  ],
  coding: [
    { name: 'Cursor', desc: 'AI代码编辑器', icon: '💻', url: 'https://cursor.sh' },
    { name: 'GitHub Copilot', desc: 'AI编程助手', icon: '💻', url: 'https://github.com/features/copilot' },
    { name: 'Tabnine', desc: 'AI代码补全', icon: '💻', url: 'https://tabnine.com' },
    { name: 'Codeium', desc: 'AI编程助手', icon: '💻', url: 'https://codeium.com' },
    { name: 'Replit', desc: '在线AI编程', icon: '💻', url: 'https://replit.com' },
    { name: 'Devin', desc: 'AI软件工程师', icon: '💻', url: 'https://devin.ai' },
    { name: 'v0', desc: 'Vercel AI前端生成', icon: '💻', url: 'https://v0.dev' },
    { name: 'Bolt.new', desc: 'AI全栈开发', icon: '💻', url: 'https://bolt.new' },
    { name: 'Phind', desc: 'AI编程搜索引擎', icon: '💻', url: 'https://www.phind.com' },
  ],
  design: [
    { name: 'Figma AI', desc: 'AI设计工具', icon: '🎯', url: 'https://www.figma.com' },
    { name: 'Canva AI', desc: '在线AI设计', icon: '🎯', url: 'https://www.canva.com' },
    { name: 'Galileo AI', desc: 'AI界面设计', icon: '🎯', url: 'https://galileo.ai' },
    { name: 'Uizard', desc: 'AI设计工具', icon: '🎯', url: 'https://uizard.io' },
    { name: 'Looka', desc: 'AI Logo设计', icon: '🎯', url: 'https://looka.com' },
    { name: 'Brandmark', desc: 'AI品牌设计', icon: '🎯', url: 'https://brandmark.io' },
    { name: 'Remove.bg', desc: 'AI抠图工具', icon: '🎯', url: 'https://www.remove.bg' },
    { name: 'Napkin', desc: 'AI可视化设计', icon: '🎯', url: 'https://napkin.ai' },
  ],
  marketing: [
    { name: 'HubSpot AI', desc: 'AI营销平台', icon: '📈', url: 'https://www.hubspot.com' },
    { name: 'Semrush AI', desc: 'AI SEO工具', icon: '📈', url: 'https://www.semrush.com' },
    { name: 'Surfer SEO', desc: 'AI内容优化', icon: '📈', url: 'https://surferseo.com' },
    { name: 'Jasper AI', desc: 'AI营销内容', icon: '📈', url: 'https://www.jasper.ai' },
    { name: 'Predis', desc: 'AI社交媒体', icon: '📈', url: 'https://predis.ai' },
    { name: 'AdCreative.ai', desc: 'AI广告创意', icon: '📈', url: 'https://www.adcreative.ai' },
    { name: 'Copy.ai', desc: 'AI营销文案', icon: '📈', url: 'https://www.copy.ai' },
    { name: 'Writesonic', desc: 'AI营销内容', icon: '📈', url: 'https://writesonic.com' },
  ],
  productivity: [
    { name: 'Gamma', desc: 'AI生成PPT', icon: '⚡', url: 'https://gamma.app' },
    { name: 'Tome', desc: 'AI PPT生成', icon: '⚡', url: 'https://tome.app' },
    { name: 'Notion AI', desc: 'AI笔记助手', icon: '⚡', url: 'https://notion.so' },
    { name: 'Taskade', desc: 'AI任务管理', icon: '⚡', url: 'https://taskade.com' },
    { name: 'Reclaim', desc: 'AI时间管理', icon: '⚡', url: 'https://reclaim.ai' },
    { name: 'Mem', desc: 'AI笔记工具', icon: '⚡', url: 'https://mem.ai' },
    { name: 'Otter AI', desc: 'AI会议记录', icon: '⚡', url: 'https://otter.ai' },
    { name: 'Clockwise', desc: 'AI日程安排', icon: '⚡', url: 'https://www.clockwise.ink' },
  ],
  data: [
    { name: 'Tableau AI', desc: 'AI数据分析', icon: '📊', url: 'https://www.tableau.com' },
    { name: 'Pandas AI', desc: 'AI数据分析库', icon: '📊', url: 'https://pandas.ai' },
    { name: 'Obviously AI', desc: 'AI预测分析', icon: '📊', url: 'https://www.obviously.ai' },
    { name: 'Polymer', desc: 'AI电子表格', icon: '📊', url: 'https://www.polymersearch.com' },
    { name: 'Rows', desc: 'AI表格工具', icon: '📊', url: 'https://rows.com' },
    { name: 'Akkio', desc: 'AI机器学习', icon: '📊', url: 'https://akkio.com' },
    { name: 'Julius AI', desc: 'AI数据分析', icon: '📊', url: 'https://julius.ai' },
  ],
  education: [
    { name: 'Coursera AI', desc: 'AI课程平台', icon: '📚', url: 'https://www.coursera.org' },
    { name: 'Duolingo Max', desc: 'AI语言学习', icon: '📚', url: 'https://www.duolingo.com' },
    { name: 'Khan Academy AI', desc: 'AI教育助手', icon: '📚', url: 'https://www.khanacademy.org' },
    { name: 'Quizlet AI', desc: 'AI学习工具', icon: '📚', url: 'https://quizlet.com' },
    { name: 'Socratic', desc: 'AI作业助手', icon: '📚', url: 'https://socratic.org' },
    { name: 'Carnegie Learning', desc: 'AI数学学习', icon: '📚', url: 'https://www.carnegielearning.com' },
    { name: 'ELSA Speak', desc: 'AI英语口语', icon: '📚', url: 'https://elsaspeak.com' },
    { name: 'Century', desc: 'AI教育平台', icon: '📚', url: 'https://www.century.tech' },
  ],
  search: [
    { name: 'Perplexity', desc: 'AI搜索引擎', icon: '🔍', url: 'https://www.perplexity.ai' },
    { name: 'You.com', desc: 'AI搜索助手', icon: '🔍', url: 'https://you.com' },
    { name: 'Arc Search', desc: 'Arc浏览器AI搜索', icon: '🔍', url: 'https://arc.net' },
    { name: 'Brave AI', desc: 'Brave搜索AI', icon: '🔍', url: 'https://search.brave.com' },
    { name: 'Consensus', desc: 'AI学术搜索', icon: '🔍', url: 'https://consensus.app' },
    { name: 'Elicit', desc: 'AI研究助手', icon: '🔍', url: 'https://elicit.org' },
  ],
  translation: [
    { name: 'DeepL', desc: '全球最准确的AI翻译', icon: '🌐', url: 'https://www.deepl.com' },
    { name: 'Google Translate', desc: 'Google AI翻译', icon: '🌐', url: 'https://translate.google.com' },
    { name: '沉浸式翻译', desc: 'AI双语翻译', icon: '🌐', url: 'https://immersivetranslate.com' },
    { name: '火山翻译', desc: '字节AI翻译', icon: '🌐', url: 'https://translate.volcengine.io' },
  ],
  '3d': [
    { name: 'Spline AI', desc: 'AI 3D设计', icon: '🧊', url: 'https://spline.ai' },
    { name: 'Meshy', desc: 'AI 3D生成', icon: '🧊', url: 'https://meshy.ai' },
    { name: 'Tripo', desc: 'AI 3D模型生成', icon: '🧊', url: 'https://tripo3d.ai' },
    { name: 'Kaedim', desc: 'AI 3D内容生成', icon: '🧊', url: 'https://www.kaedim3d.com' },
  ],
}

// 精选推荐
const featured = [
  toolsByCategory.chatbot[0],
  toolsByCategory.chatbot[1],
  toolsByCategory.chatbot[2],
  toolsByCategory.chatbot[3],
  toolsByCategory.image[0],
  toolsByCategory.video[0],
  toolsByCategory.audio[0],
  toolsByCategory.coding[0],
  toolsByCategory.productivity[0],
  toolsByCategory.search[0],
  toolsByCategory.translation[0],
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <img src="/logo.svg" alt="AI佩恩" className="w-8 h-8" />
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
                <span className="text-xl">{tool.icon}</span>
                <span className="font-bold">{tool.name}</span>
              </div>
              <p className="text-[#888] text-sm">{tool.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* All Tools */}
      <section id="all" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">🤖 全部工具</h2>
        {categories.map(cat => {
          const tools = toolsByCategory[cat.slug] || []
          return (
            <div key={cat.slug} id={`cat-${cat.slug}`} className="mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                {cat.icon} {cat.name} ({tools.length})
              </h3>
              {tools.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tools.map(tool => (
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
              ) : (
                <p className="text-[#666]">暂无数据</p>
              )}
            </div>
          )
        })}
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
