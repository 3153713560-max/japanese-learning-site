import '../styles/pages.css'

interface WordBookProps {
  onNavigate: (page: 'home' | 'wordbook' | 'practice') => void
}

export default function WordBook({ onNavigate }: WordBookProps) {
  return (
    <div className="page">
      <div className="page-container">
        <h2>单词本</h2>
        <p className="page-subtitle">点击下方分类开始学习</p>
        
        <div className="category-list">
          <div className="category-card">
            <div className="category-icon">🏠</div>
            <h3>生活日语</h3>
            <p>日常生活场景词汇</p>
            <button className="btn btn-small">开始学习</button>
          </div>
          
          <div className="category-card">
            <div className="category-icon">🏨</div>
            <h3>宿泊业</h3>
            <p>酒店/旅馆专用词汇</p>
            <button className="btn btn-small">开始学习</button>
          </div>
          
          <div className="category-card">
            <div className="category-icon">🏭</div>
            <h3>食品制造</h3>
            <p>食品工业专用词汇</p>
            <button className="btn btn-small">开始学习</button>
          </div>
        </div>
      </div>
    </div>
  )
}
