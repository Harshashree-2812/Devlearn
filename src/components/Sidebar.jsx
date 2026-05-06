import styles from './Sidebar.module.css'
import { languages } from '../data/topics'

export default function Sidebar({ lang, activeTopic, onSelect }) {
  const meta   = languages.find(l => l.id === lang)
  const accent = `var(${meta.accentVar})`

  return (
    <aside className={styles.sidebar}>
      <div className={styles.label}>{lang.toUpperCase()}</div>
      {activeTopic.map((t, i) => {
        const active = t.id === activeTopic.find(x => x.active)?.id
        return null // filled below
      })}
      {activeTopic.map((t, i) => (
        <button
          key={t.id}
          onClick={() => onSelect(t.id)}
          className={`${styles.item} ${t.isActive ? styles.active : ''}`}
          style={t.isActive ? { borderLeftColor: accent, color: 'var(--text-primary)' } : {}}
        >
          <span
            className={styles.num}
            style={t.isActive ? { background: accent, color: meta.darkText ? '#000' : '#fff' } : {}}
          >
            {i + 1}
          </span>
          <span className={styles.itemLabel}>{t.label}</span>
        </button>
      ))}
    </aside>
  )
}
