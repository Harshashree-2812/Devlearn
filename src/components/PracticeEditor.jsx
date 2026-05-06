import { useState, useRef, useEffect } from 'react'
import styles from './PracticeEditor.module.css'

export default function PracticeEditor({ defaultCode, lang, accent, darkText }) {
  const [code, setCode] = useState(defaultCode)
  const [ran, setRan]   = useState(false)
  const iframeRef       = useRef(null)

  function buildHTML(userCode) {
    if (lang === 'html') {
      return `<!DOCTYPE html><html><head><style>
        body { font-family: 'Segoe UI', sans-serif; padding: 16px; margin: 0; background: #fff; color: #1a1f2e; }
        * { box-sizing: border-box; }
      </style></head><body>${userCode}</body></html>`
    }
    if (lang === 'css') {
      return `<!DOCTYPE html><html><head><style>
        body { font-family: 'Segoe UI', sans-serif; padding: 16px; margin: 0; background: #fff; color: #1a1f2e; }
        * { box-sizing: border-box; }
        ${userCode}
      </style></head><body>
        <h1 class="title">Hello World</h1>
        <p class="text">This is a paragraph to style.</p>
        <div class="box">A box element</div>
        <button class="btn">A Button</button>
      </body></html>`
    }
    if (lang === 'js') {
  return `<!DOCTYPE html>
<html>
<head>
<style>
body { font-family: sans-serif; padding: 16px; margin: 0; background: #fff; color: #111; }
#output { background: #f0f2f5; border-radius: 8px; padding: 12px; font-family: monospace; font-size: 13px; min-height: 60px; white-space: pre-wrap; border: 1px solid #ddd; }
#output.error { color: #ef4444; }
</style>
</head>
<body>
<div id="output">Running...</div>
<script>
(function() {
  var out = document.getElementById('output');
  out.textContent = '';
  var lines = [];
  console.log = function() {
    var args = Array.from(arguments);
    lines.push(args.map(function(a) {
      return typeof a === 'object' ? JSON.stringify(a) : String(a);
    }).join(' '));
    out.textContent = lines.join('\\n');
  };
  try {
    ${code}
  } catch(e) {
    out.className = 'error';
    out.textContent = 'Error: ' + e.message;
  }
})();
<\/script>
</body>
</html>`

    }
     if (lang === 'react') {
      return `<!DOCTYPE html><html><head><style>
        body { font-family: sans-serif; padding: 16px; margin: 0; background: #fff; }
        #note { background: #eff6ff; border-left: 3px solid #3b82f6; padding: 12px 16px; border-radius: 6px; font-size: 13px; color: #1e40af; }
      </style></head><body>
        <div id="note">⚛️ React needs a build tool to run.<br/>Use the code above as reference in your project!</div>
      </body></html>`
    }
  }

  function runCode() {
    const html = buildHTML(code)
    setRan(true)
    setTimeout(() => {
      if (iframeRef.current) {
        iframeRef.current.srcdoc = html
      }
    }, 50)
  }

  function resetCode() {
    setCode(defaultCode)
    if (iframeRef.current) iframeRef.current.srcdoc = ''
    setRan(false)
  }

  useEffect(() => {
    setCode(defaultCode)
    setRan(false)
    if (iframeRef.current) iframeRef.current.srcdoc = ''
  }, [defaultCode])

  const handleTab = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const ta = e.target
      const start = ta.selectionStart
      const end = ta.selectionEnd
      const newVal = ta.value.substring(0, start) + '  ' + ta.value.substring(end)
      setCode(newVal)
      setTimeout(() => { ta.selectionStart = ta.selectionEnd = start + 2 }, 0)
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.icon}>✏️</span>
          <span className={styles.title}>Try it Yourself</span>
          <span className={styles.hint}>Edit the code and click Run</span>
        </div>
        <div className={styles.actions}>
          <button className={styles.resetBtn} onClick={resetCode}>↺ Reset</button>
          <button
            className={styles.runBtn}
            onClick={runCode}
            style={{ background: accent, color: darkText ? '#000' : '#fff' }}
          >
            ▶ Run
          </button>
        </div>
      </div>

      <div className={styles.editor}>
        <div className={styles.codePane}>
          <div className={styles.paneLabel}>
            <span className={styles.dot} style={{ background: '#ff5f57' }} />
            <span className={styles.dot} style={{ background: '#febc2e' }} />
            <span className={styles.dot} style={{ background: '#28c840' }} />
            <span className={styles.paneName}>code.{lang === 'react' ? 'jsx' : lang}</span>
          </div>
          <div className={styles.editorWrap}>
            <div className={styles.lineNums}>
              {code.split('\n').map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <textarea
              className={styles.textarea}
              value={code}
              onChange={e => setCode(e.target.value)}
              onKeyDown={handleTab}
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
            />
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.previewPane}>
          <div className={styles.paneLabel}>
            <span className={styles.dot} style={{ background: '#ff5f57' }} />
            <span className={styles.dot} style={{ background: '#febc2e' }} />
            <span className={styles.dot} style={{ background: '#28c840' }} />
            <span className={styles.paneName}>preview</span>
          </div>
          {ran ? (
            <iframe
              ref={iframeRef}
              className={styles.iframe}
              sandbox="allow-scripts"
              title="preview"
            />
          ) : (
            <div className={styles.placeholder}>
              <div className={styles.placeholderIcon}>▶</div>
              <p>Click <strong>Run</strong> to see output</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}