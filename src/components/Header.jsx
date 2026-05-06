import styles from './Header.module.css'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

export default function Header({ theme, toggleTheme, activeLang, onLangChange, onRoadmap, onProfile, user }) {
  const langs = [
    { id: 'html',  label: 'HTML',  color: '#f97316' },
    { id: 'css',   label: 'CSS',   color: '#3b82f6' },
    { id: 'js',    label: 'JS',    color: '#facc15' },
    { id: 'react', label: 'React', color: '#38bdf8' },
  ]

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <div className={styles.logoIcon}>D</div>
        <span className={styles.logoText}>DevLearn</span>
      </div>

      {/* Language Tabs */}
      <nav className={styles.tabs}>
        {langs.map(l => (
          <button
            key={l.id}
            onClick={() => onLangChange(l.id)}
            className={styles.tab}
            style={
              activeLang === l.id
                ? { background: l.color, color: l.id === 'js' ? '#000' : '#fff', borderColor: l.color }
                : {}
            }
          >
            {l.label}
          </button>
        ))}
      </nav>
      <button className={styles.themeBtn} onClick={onRoadmap} title="Roadmap">
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6"/>
    <line x1="8" y1="12" x2="21" y2="12"/>
    <line x1="8" y1="18" x2="21" y2="18"/>
    <line x1="3" y1="6" x2="3.01" y2="6"/>
    <line x1="3" y1="12" x2="3.01" y2="12"/>
    <line x1="3" y1="18" x2="3.01" y2="18"/>
  </svg>
  <span>Roadmap</span>
</button>
{/* Theme Toggle */}
      <button className={styles.themeBtn} onClick={toggleTheme} title="Toggle theme">
        ...
        <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </button>

      <button className={styles.profileBtn} onClick={onProfile}>
  <div className={styles.profileAvatar}>
    {user?.displayName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || '?'}
  </div>
  <span>{user?.displayName?.split(' ')[0] || 'Profile'}</span>
</button>
    </header>
      
    
  )
}
