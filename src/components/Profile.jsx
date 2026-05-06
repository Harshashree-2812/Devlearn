import styles from './Profile.module.css'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { topics } from '../data/topics'

const langMeta = [
  { id: 'html',  label: 'HTML',  color: '#f97316' },
  { id: 'css',   label: 'CSS',   color: '#3b82f6' },
  { id: 'js',    label: 'JS',    color: '#facc15' },
  { id: 'react', label: 'React', color: '#38bdf8' },
]

export default function Profile({ user, completed, onClose }) {
  const totalTopics = Object.values(topics).flat().length
  const doneCount   = Object.keys(completed).length
  const percent     = Math.round((doneCount / totalTopics) * 100)

  const joinDate = user.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString('en-IN', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    : 'N/A'

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>

        {/* Close */}
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        {/* Avatar + Info */}
        <div className={styles.avatarSection}>
         
           <div className={styles.avatarFallback}>
  {user.displayName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || '?'}
</div>
        
          <h2 className={styles.name}>
            {user.displayName || 'Developer'}
          </h2>
          <p className={styles.email}>{user.email}</p>
          <p className={styles.joinDate}>Member since {joinDate}</p>
        </div>

        {/* Overall Progress */}
        <div className={styles.progressCard}>
          <div className={styles.progressTop}>
            <span className={styles.progressLabel}>Overall Progress</span>
            <span className={styles.progressPercent}>{percent}%</span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className={styles.progressSub}>{doneCount} / {totalTopics} topics completed</p>
        </div>

        {/* Per Language Stats */}
        <div className={styles.langStats}>
          {langMeta.map(lang => {
            const langTopics = topics[lang.id]
            const done = langTopics.filter(t => completed[`${lang.id}_${t.id}`]).length
            const pct  = Math.round((done / langTopics.length) * 100)
            return (
              <div key={lang.id} className={styles.langStat}>
                <div className={styles.langStatTop}>
                  <span className={styles.langStatLabel} style={{ color: lang.color }}>
                    {lang.label}
                  </span>
                  <span className={styles.langStatCount}>{done}/{langTopics.length}</span>
                </div>
                <div className={styles.langStatBar}>
                  <div
                    className={styles.langStatFill}
                    style={{ width: `${pct}%`, background: lang.color }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Logout */}
        <button
          className={styles.logoutBtn}
          onClick={() => signOut(auth)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Logout
        </button>

      </div>
    </div>
  )
}