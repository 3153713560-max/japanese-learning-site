import '../styles/pages.css'

interface PracticeProps {
  onNavigate: (page: 'home' | 'wordbook' | 'practice') => void
}

export default function Practice({ onNavigate }: PracticeProps) {
  return (
    <div className="page">
      <div className="page-container">
        <h2>JFT-Basic 练习</h2>
        <p className="page-subtitle">选择练习类型</p>
        
        <div className="practice-options">
          <div className="practice-card">
            <div className="practice-icon">📝</div>
            <h3>单词理解</h3>
            <p>选择正确的中文意思</p>
            <button className="btn btn-small">开始练习</button>
          </div>
          
          <div className="practice-card">
            <div className="practice-icon">💬</div>
            <h3>会话理解</h3>
            <p>日常生活会话练习</p>
            <button className="btn btn-small">开始练习</button>
          </div>
          
          <div className="practice-card">
            <div className="practice-icon">📖</div>
            <h3>阅读理解</h3>
            <p>短文和段落理解</p>
            <button className="btn btn-small">开始练习</button>
          </div>
        </div>
      </div>
    </div>
  )
}
