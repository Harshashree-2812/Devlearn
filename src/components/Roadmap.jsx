import styles from './Roadmap.module.css'
import { topics } from '../data/topics'

const langMeta = [
  { id: 'html',  label: 'HTML',  color: '#f97316', icon: '🌐' },
  { id: 'css',   label: 'CSS',   color: '#3b82f6', icon: '🎨' },
  { id: 'js',    label: 'JS',    color: '#facc15', icon: '⚡' },
  { id: 'react', label: 'React', color: '#38bdf8', icon: '⚛️' },
]

export default function Roadmap({ completed, onClose, onNavigate }) {
  const totalTopics = Object.values(topics).flat().length
  const doneCount   = Object.keys(completed).length
  const percent     = Math.round((doneCount / totalTopics) * 100)

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>

        {/* Header */}
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>🗺️ Learning Roadmap</h2>
            <p className={styles.sub}>Track your learning progress</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>

        {/* Overall Progress */}
        <div className={styles.overallProgress}>
          <div className={styles.progressInfo}>
            <span>Overall Progress</span>
            <span className={styles.progressPercent}>{percent}%</span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${percent}%` }}
            />
          </div>
          <p className={styles.progressCount}>{doneCount} / {totalTopics} topics completed</p>
        </div>

        {/* Language Cards */}
        <div className={styles.langs}>
          {langMeta.map((lang, langIdx) => {
            const langTopics  = topics[lang.id]
            const langDone    = langTopics.filter(t => completed[`${lang.id}_${t.id}`]).length
            const langPercent = Math.round((langDone / langTopics.length) * 100)

            return (
              <div key={lang.id} className={styles.langCard}>
                {/* Lang Header */}
                <div className={styles.langHeader}>
                  <div className={styles.langInfo}>
                    <span className={styles.langIcon}>{lang.icon}</span>
                    <span className={styles.langLabel} style={{ color: lang.color }}>
                      {lang.label}
                    </span>
                  </div>
                  <span className={styles.langCount} style={{ color: lang.color }}>
                    {langDone}/{langTopics.length}
                  </span>
                </div>

                {/* Lang Progress */}
                <div className={styles.langBar}>
                  <div
                    className={styles.langFill}
                    style={{ width: `${langPercent}%`, background: lang.color }}
                  />
                </div>

                {/* Topics */}
                <div className={styles.topicList}>
                  {langTopics.map((topic, i) => {
                    const done = !!completed[`${lang.id}_${topic.id}`]
                    return (
                      <div
                        key={topic.id}
                        className={`${styles.topicItem} ${done ? styles.done : ''}`}
                        onClick={() => onNavigate(lang.id, topic.id)}
                      >
                        <div className={styles.topicLeft}>
                          <div
                            className={styles.topicDot}
                            style={done ? { background: lang.color, borderColor: lang.color } : {}}
                          >
                            {done ? '✓' : i + 1}
                          </div>
                          <span className={styles.topicName}>{topic.label}</span>
                        </div>
                        {done && <span className={styles.doneBadge}>Done ✅</span>}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}