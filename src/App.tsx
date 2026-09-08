import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import WordBook from './pages/WordBook'
import Practice from './pages/Practice'

type Page = 'home' | 'wordbook' | 'practice'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  return (
    <div className="app">
      <header className="app-header">
        <h1>JFT-Basic 学习助手</h1>
      </header>
      
      <main className="app-main">
        {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
        {currentPage === 'wordbook' && <WordBook onNavigate={setCurrentPage} />}
        {currentPage === 'practice' && <Practice onNavigate={setCurrentPage} />}
      </main>

      <nav className="app-nav">
        <button 
          className={`nav-btn ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          首页
        </button>
        <button 
          className={`nav-btn ${currentPage === 'wordbook' ? 'active' : ''}`}
          onClick={() => setCurrentPage('wordbook')}
        >
          单词本
        </button>
        <button 
          className={`nav-btn ${currentPage === 'practice' ? 'active' : ''}`}
          onClick={() => setCurrentPage('practice')}
        >
          练习
        </button>
      </nav>
    </div>
  )
}

export default App
