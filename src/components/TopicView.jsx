import styles from './TopicView.module.css'
import { languages } from '../data/topics'
import PracticeEditor from './PracticeEditor'
import DiagramView from './DiagramView'

export default function TopicView({ lang, topic, topicList, onNavigate, onComplete, isComplete }) {
  const meta    = languages.find(l => l.id === lang)
  const accent  = `var(${meta.accentVar})`
  const tagBg   = `var(${meta.tagBgVar})`
  const idx     = topicList.findIndex(t => t.id === topic.id)
  const total   = topicList.length
  const hasPrev = idx > 0
  const hasNext = idx < total - 1

  return (
    <article className={styles.wrap}>
      {/* Title row */}
      <div className={styles.titleRow}>
        <span
          className={styles.langTag}
          style={{ color: accent, background: tagBg }}
        >
          {lang.toUpperCase()}
        </span>
        <h1 className={styles.title}>{topic.title}</h1>
        <span className={styles.progress}>{idx + 1} / {total}</span>
      </div>

      {/* Explanation */}
      <div
        className={styles.body}
        dangerouslySetInnerHTML={{ __html: topic.body }}
      />

      {/* Code */}
      <DiagramView lang={lang} topicId={topic.id} />
      <div className={styles.codeLabel}>Code Example</div>
      <pre className={styles.code}>{topic.code}</pre>

      {/* Output */}
      <div className={styles.output}>
        <div className={styles.outputBar}>
          <div className={styles.dots}>
            <span style={{ background: '#ff5f57' }} />
            <span style={{ background: '#febc2e' }} />
            <span style={{ background: '#28c840' }} />
          </div>
          <span className={styles.outputLabel}>Output Preview</span>
        </div>
        <div
          className={styles.outputBody}
          dangerouslySetInnerHTML={{ __html: topic.preview }}
        />
      </div>
      {/* Practice Editor */}
      <div className={styles.practiceLabel}>
        <span className={styles.practiceBadge}>✏️ Practice</span>
        <span className={styles.practiceHint}>Edit the code & click Run!</span>
      </div>
      <PracticeEditor
        key={`${lang}-${topic.id}`}
        defaultCode={topic.code}
        lang={lang}
        accent={accent}
        darkText={meta.darkText}
      />
      {/* Mark Complete Button */}
      <div className={styles.completeRow}>
        <button
          className={styles.completeBtn}
          onClick={() => onComplete(topic.id)}
          disabled={isComplete(topic.id)}
          style={
            isComplete(topic.id)
              ? { background: '#22c55e', color: '#fff', cursor: 'default' }
              : { background: accent, color: meta.darkText ? '#000' : '#fff' }
          }
        >
          {isComplete(topic.id) ? '✅ Completed!' : 'Mark as Complete'}
        </button>
      </div>

      

      {/* Navigation */}
      <div className={styles.nav}>
        <button
          className={styles.navBtn}
          onClick={() => hasPrev && onNavigate(-1)}
          disabled={!hasPrev}
        >
          ← Prev
        </button>

        <div className={styles.dots2}>
          {topicList.map((_, i) => (
            <span
              key={i}
              className={styles.dot}
              style={i === idx ? { background: accent, width: '18px', borderRadius: '4px' } : {}}
            />
          ))}
        </div>

        <button
          className={styles.navBtnPrimary}
          onClick={() => hasNext && onNavigate(1)}
          disabled={!hasNext}
          style={hasNext ? { background: accent, color: meta.darkText ? '#000' : '#fff' } : {}}
        >
          Next →
        </button>
      </div>
    </article>
  )
}
