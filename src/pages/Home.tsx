import '../styles/pages.css'

interface HomeProps {
  onNavigate: (page: 'home' | 'wordbook' | 'practice') => void
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="page">
      <div className="home-container">
        <div className="welcome-card">
          <div className="welcome-icon">📚</div>
          <h2>欢迎使用</h2>
          <p>JFT-Basic 学习助手</p>
          <p className="subtitle">准备日本语基础测试，轻松获得特定技能签证</p>
        </div>

        <div className="quick-stats">
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">已学单词</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">连续天数</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">0%</div>
            <div className="stat-label">正确率</div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="btn btn-primary" onClick={() => onNavigate('wordbook')}>
            📖 开始学习单词
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('practice')}>
            ✍️ JFT-Basic 练习
          </button>
        </div>

        <div className="info-card">
          <h3>📌 今日建议</h3>
          <p>建议从基础生活词汇开始，每天学习 20-30 个单词。</p>
          <p>坚持练习，30天内可以有效提升日语水平！</p>
        </div>
      </div>
    </div>
  )
}
