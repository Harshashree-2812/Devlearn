import { useState, useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import { topics } from './data/topics'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import TopicView from './components/TopicView'
import styles from './App.module.css'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import Auth from './components/Auth'
import Roadmap from './components/Roadmap'
import { useProgress } from './hooks/useProgress'
import Profile from './components/Profile'

export default function App() {
  const { theme, toggleTheme }        = useTheme()
  const [lang, setLang]               = useState('html')
  const [topicId, setTopicId]         = useState('structure')
  const [user, setUser]               = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [showRoadmap, setShowRoadmap] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const { completed, markComplete, isComplete } = useProgress(user?.uid)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setAuthLoading(false)
    })
    return unsub
  }, [])

  const list    = topics[lang]
  const current = list.find(t => t.id === topicId) || list[0]

  function handleLangChange(newLang) {
    setLang(newLang)
    setTopicId(topics[newLang][0].id)
  }

  function handleNavigate(dir) {
    const idx  = list.findIndex(t => t.id === topicId)
    const next = list[idx + dir]
    if (next) setTopicId(next.id)
  }

  const sidebarItems = list.map(t => ({ ...t, isActive: t.id === topicId }))

  if (authLoading) return (
    <div style={{ height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'var(--bg)', color:'var(--text-primary)', fontFamily:'var(--font-body)' }}>
      Loading...
    </div>
  )

  if (!user) return <Auth onLogin={() => {}} />

  return (
    <div className={styles.app}>
      <Header
  theme={theme}
  toggleTheme={toggleTheme}
  activeLang={lang}
  onLangChange={handleLangChange}
  onRoadmap={() => setShowRoadmap(true)}
  onProfile={() => setShowProfile(true)}
  user={user}
/>
      <div className={styles.body}>
        <Sidebar
          lang={lang}
          activeTopic={sidebarItems}
          onSelect={id => setTopicId(id)}
        />
        <main className={styles.main}>
        
<TopicView
  key={`${lang}-${topicId}`}
  lang={lang}
  topic={current}
  topicList={list}
  onNavigate={handleNavigate}
  onComplete={(topicId) => markComplete(lang, topicId)}  // ✅ Add
  isComplete={(topicId) => isComplete(lang, topicId)}    // ✅ Add
/>
        </main>
      </div>

      {showRoadmap && (
        <Roadmap
          completed={completed}
          onClose={() => setShowRoadmap(false)}
          onNavigate={(newLang, newTopicId) => {
            handleLangChange(newLang)
            setTopicId(newTopicId)
            setShowRoadmap(false)
          }}
        />
      )}
      {showProfile && (
  <Profile
    user={user}
    completed={completed}
    onClose={() => setShowProfile(false)}
  />
)}
    </div>
  )
}