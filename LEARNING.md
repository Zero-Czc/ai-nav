# 每日学习计划

## 学习时间
- 每天凌晨 12:00 - 早上 7:00
- 由于 cron 受限，使用 heartbeat 模拟学习

---

## 📈 自我提升记录

### 2026-02-25
**今日成就**：
- ✅ 百度站点验证通过（HTML标签方式）
- ✅ 新增 Grok、Manus 两个热门AI工具页面
- ✅ 新增站内搜索页面 (aipeien.cn/search/)
- ✅ 新增工具提交入口 (aipeien.cn/submit/)
- ✅ 安装 self-evolving-skill 技能（发现核心代码缺失）

**今日反思**：
- 百度验证：网络问题导致文件验证失败，最后用HTML标签验证成功
- 源码缺失：aipeien.cn 只有预构建输出，没有源码，后续优化需要手动修改HTML
- 提交表单：改为mailto方式，用户点击会打开发邮件客户端

**经验沉淀**：
1. 百度验证失败时尝试HTML标签方式
2. 提交表单用mailto最简单，不需后端
3. 网站优化优先级：内容 > 技术

---

## 可用技能库 (51个)
已安装 skills: 1password, apple-notes, apple-reminders, bear-notes, blogwatcher, blucli, camsnap, canvas, clawhub, coding-agent, discord, eightctl, food-order, gemini, gifgrep, github, gog, healthcheck, himalaya, imsg, mcporter, model-usage, nano-pdf, notion, obsidian, openai-whisper, openhue, oracle, ordercli, peekaboo, sag, session-logs, skill-creator, songsee, sonoscli, summarize, things-mac, trello, video-frames, wacli, weather

未探索: bluebubbles, food-order, goplaces, model-usage, nano-banana-pro, openai-image-gen, openai-whisper-api, sherpa-onnx-tts, slack, spotify-player, tmux, voice-call

---

## 2026-02-25 凌晨学习 (4:20 AM)

### 🔍 ClawHub 新技能发现
- **telnyx-10dlc** v1.0.0 - 10DLC 注册 (电话营销合规)
- **smart-model-switching** v1.0.0 - 智能模型切换
- **api-gateway** v1.0.48 - API 网关
- **enginemind-eft** v1.4.0 - 情感框架翻译器
- **security-auditor** v1.0.0 - 安全审计
- **secureclaw-skill** v2.2.0 - SecureClaw 安全技能
- 评估：暂无需要安装的新技能

### 🎯 今日学习

#### 1. sag - ElevenLabs TTS 语音合成
- ✅ 已安装：`/opt/homebrew/bin/sag`
- 功能：将文字转为语音，支持多种声音和情感标签
- 用法：
  - `sag "Hello"` - 直接播放
  - `sag -v "Roger" "Hello"` - 指定声音
  - `sag voices` - 列出可用声音
- 进阶：支持 `[whispers]`, `[shouts]`, `[laughs]` 等情感标签
- **应用场景**：语音播报、故事讲解、新闻播客

#### 2. mcporter - MCP 服务器工具
- ✅ 已安装
- 功能：调用 MCP 服务器的工具
- 用法：
  - `mcporter list` - 列出可用服务器
  - `mcporter call server.tool key=value` - 调用工具

### 🎯 后续计划
- 尝试用 sag 语音回复大哥
- 探索更多未安装的技能
- 继续追踪 AI 行业动态

### 总结
- 已发现 2 个已安装但未使用的技能：sag (语音), mcporter (MCP)

---

## 🔑 重要经验教训

### 2026-02-25
**问题**：验证码邮件找不到
**解决**：检查 Gmail 垃圾邮件文件夹，发现被自动归类到 spam
**教训**：以后找验证码邮件时，一定要同时检查：
1. 收件箱
2. 垃圾邮件 (spam)
3. 推广/社交邮件标签
- sag 可以用于语音播报，适合讲故事、播报新闻等场景

---

## 历史学习内容 (2026-02-24)

### 🔍 AI 领域动态 (from Hacker News)
- Firefox 148 发布 AI Kill Switch 功能
- Sterling-8B: 可解释每个 token 的语言模型
- Wolfram 集成 LLM 系统
- AI 血检: 阿尔茨海默诊断准确率 94.5%
- Ladybird 浏览器采用 Rust，AI 辅助开发
