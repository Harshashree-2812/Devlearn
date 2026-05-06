import styles from './DiagramView.module.css'

const diagrams = {
  // ─── HTML ───────────────────────────────────────────────
  'html-structure': () => (
    <svg width="100%" viewBox="0 0 680 320" className={styles.svg}>
      <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
      {/* DOCTYPE */}
      <rect x="40" y="20" width="600" height="50" rx="8" className={styles.boxGray}/>
      <text x="340" y="50" textAnchor="middle" className={styles.label}>&lt;!DOCTYPE html&gt;</text>
      <text x="340" y="64" textAnchor="middle" className={styles.sub}>Browser-ku HTML5 solludhu</text>
      {/* html */}
      <rect x="60" y="90" width="560" height="50" rx="8" className={styles.boxPurple}/>
      <text x="340" y="120" textAnchor="middle" className={styles.label}>&lt;html lang="en"&gt;</text>
      <text x="340" y="134" textAnchor="middle" className={styles.sub}>Root element</text>
      {/* head & body */}
      <rect x="80" y="162" width="240" height="50" rx="8" className={styles.boxTeal}/>
      <text x="200" y="185" textAnchor="middle" className={styles.label}>&lt;head&gt;</text>
      <text x="200" y="200" textAnchor="middle" className={styles.sub}>Meta, title, CSS links</text>
      <rect x="360" y="162" width="240" height="50" rx="8" className={styles.boxCoral}/>
      <text x="480" y="185" textAnchor="middle" className={styles.label}>&lt;body&gt;</text>
      <text x="480" y="200" textAnchor="middle" className={styles.sub}>Visible content ellam</text>
      {/* children */}
      <rect x="80" y="234" width="100" height="40" rx="6" className={styles.boxTeal}/>
      <text x="130" y="258" textAnchor="middle" className={styles.sub}>&lt;title&gt;</text>
      <rect x="200" y="234" width="100" height="40" rx="6" className={styles.boxTeal}/>
      <text x="250" y="258" textAnchor="middle" className={styles.sub}>&lt;meta&gt;</text>
      <rect x="360" y="234" width="100" height="40" rx="6" className={styles.boxCoral}/>
      <text x="410" y="258" textAnchor="middle" className={styles.sub}>&lt;header&gt;</text>
      <rect x="480" y="234" width="100" height="40" rx="6" className={styles.boxCoral}/>
      <text x="530" y="258" textAnchor="middle" className={styles.sub}>&lt;main&gt;</text>
      {/* arrows */}
      <line x1="340" y1="70" x2="340" y2="90" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="340" y1="140" x2="200" y2="162" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="340" y1="140" x2="480" y2="162" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="130" y1="212" x2="130" y2="234" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="250" y1="212" x2="250" y2="234" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="410" y1="212" x2="410" y2="234" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="530" y1="212" x2="530" y2="234" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
    </svg>
  ),

  'html-semantic': () => (
    <svg width="100%" viewBox="0 0 680 300" className={styles.svg}>
      <rect x="40" y="20" width="600" height="46" rx="8" className={styles.boxCoral}/>
      <text x="340" y="40" textAnchor="middle" className={styles.label}>&lt;header&gt;</text>
      <text x="340" y="56" textAnchor="middle" className={styles.sub}>Logo, site name, navigation</text>
      <rect x="40" y="78" width="600" height="36" rx="8" className={styles.boxPurple}/>
      <text x="340" y="100" textAnchor="middle" className={styles.label}>&lt;nav&gt; — navigation links</text>
      <text x="120" y="136" textAnchor="middle" className={styles.sub}>&lt;main&gt;</text>
      <rect x="40" y="126" width="380" height="100" rx="8" className={styles.boxBlue}/>
      <text x="230" y="155" textAnchor="middle" className={styles.label}>&lt;article&gt;</text>
      <text x="230" y="171" textAnchor="middle" className={styles.sub}>Standalone content</text>
      <text x="230" y="186" textAnchor="middle" className={styles.sub}>Blog post, news item</text>
      <rect x="440" y="126" width="200" height="100" rx="8" className={styles.boxTeal}/>
      <text x="540" y="155" textAnchor="middle" className={styles.label}>&lt;aside&gt;</text>
      <text x="540" y="171" textAnchor="middle" className={styles.sub}>Sidebar</text>
      <text x="540" y="186" textAnchor="middle" className={styles.sub}>Related content</text>
      <rect x="40" y="240" width="600" height="40" rx="8" className={styles.boxGray}/>
      <text x="340" y="264" textAnchor="middle" className={styles.label}>&lt;footer&gt; — copyright, links</text>
    </svg>
  ),

  'html-forms': () => (
    <svg width="100%" viewBox="0 0 680 290" className={styles.svg}>
      <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
      <rect x="190" y="20" width="300" height="44" rx="8" className={styles.boxPurple}/>
      <text x="340" y="40" textAnchor="middle" className={styles.label}>&lt;form action="/submit"&gt;</text>
      <text x="340" y="56" textAnchor="middle" className={styles.sub}>Form wrapper</text>
      <line x1="280" y1="64" x2="160" y2="100" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="340" y1="64" x2="340" y2="100" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="400" y1="64" x2="510" y2="100" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <rect x="60" y="100" width="190" height="54" rx="8" className={styles.boxTeal}/>
      <text x="155" y="122" textAnchor="middle" className={styles.label}>&lt;label for="n"&gt;</text>
      <text x="155" y="138" textAnchor="middle" className={styles.sub}>Accessibility pairing</text>
      <rect x="270" y="100" width="140" height="54" rx="8" className={styles.boxTeal}/>
      <text x="340" y="122" textAnchor="middle" className={styles.label}>&lt;input&gt;</text>
      <text x="340" y="138" textAnchor="middle" className={styles.sub}>id matches label</text>
      <rect x="430" y="100" width="160" height="54" rx="8" className={styles.boxCoral}/>
      <text x="510" y="122" textAnchor="middle" className={styles.label}>&lt;button&gt; Submit</text>
      <text x="510" y="138" textAnchor="middle" className={styles.sub}>type="submit"</text>
      <line x1="340" y1="154" x2="340" y2="188" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <rect x="180" y="188" width="320" height="54" rx="8" className={styles.boxGreen}/>
      <text x="340" y="210" textAnchor="middle" className={styles.label}>Form submit → server</text>
      <text x="340" y="226" textAnchor="middle" className={styles.sub}>GET or POST request goadhu</text>
    </svg>
  ),

  // ─── CSS ────────────────────────────────────────────────
  'css-boxmodel': () => (
    <svg width="100%" viewBox="0 0 680 310" className={styles.svg}>
      <rect x="40" y="20" width="600" height="270" rx="16" className={styles.boxGray}/>
      <text x="80" y="48" className={styles.sub}>Margin</text>
      <rect x="90" y="60" width="500" height="190" rx="12" className={styles.boxAmber}/>
      <text x="130" y="84" className={styles.sub}>Border</text>
      <rect x="140" y="100" width="400" height="110" rx="8" className={styles.boxTeal}/>
      <text x="178" y="122" className={styles.sub}>Padding</text>
      <rect x="200" y="130" width="280" height="56" rx="6" className={styles.boxPurple}/>
      <text x="340" y="156" textAnchor="middle" className={styles.label}>Content — width × height</text>
      <text x="580" y="48" textAnchor="end" className={styles.sub}>margin: 24px auto</text>
      <text x="578" y="84" textAnchor="end" className={styles.sub}>border: 2px solid</text>
      <text x="526" y="122" textAnchor="end" className={styles.sub}>padding: 20px</text>
      <text x="340" y="296" textAnchor="middle" className={styles.sub}>box-sizing: border-box — padding included in width</text>
    </svg>
  ),

  'css-flexbox': () => (
    <svg width="100%" viewBox="0 0 680 280" className={styles.svg}>
      <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
      <rect x="40" y="30" width="600" height="160" rx="12" className={styles.boxBlue}/>
      <text x="60" y="54" className={styles.sub}>display: flex — container</text>
      <rect x="70" y="66" width="140" height="100" rx="8" className={styles.boxPurple}/>
      <text x="140" y="118" textAnchor="middle" className={styles.label}>A</text>
      <text x="140" y="134" textAnchor="middle" className={styles.sub}>flex: 1</text>
      <rect x="270" y="66" width="140" height="100" rx="8" className={styles.boxTeal}/>
      <text x="340" y="118" textAnchor="middle" className={styles.label}>B</text>
      <text x="340" y="134" textAnchor="middle" className={styles.sub}>flex: 1</text>
      <rect x="470" y="66" width="140" height="100" rx="8" className={styles.boxCoral}/>
      <text x="540" y="118" textAnchor="middle" className={styles.label}>C</text>
      <text x="540" y="134" textAnchor="middle" className={styles.sub}>flex: 1</text>
      <line x1="40" y1="240" x2="630" y2="240" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.5"/>
      <line x1="340" y1="268" x2="340" y2="228" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.5"/>
      <text x="340" y="257" textAnchor="middle" className={styles.sub}>justify-content — main axis →</text>
      <text x="28" y="116" textAnchor="middle" className={styles.sub} transform="rotate(-90,28,116)">align-items ↕</text>
    </svg>
  ),

  'css-grid': () => (
    <svg width="100%" viewBox="0 0 680 260" className={styles.svg}>
      <text x="40" y="22" className={styles.sub}>grid-template-columns: 1fr 1fr 1fr</text>
      <rect x="40" y="36" width="380" height="64" rx="8" className={styles.boxBlue}/>
      <text x="230" y="64" textAnchor="middle" className={styles.label}>grid-column: span 2</text>
      <text x="230" y="80" textAnchor="middle" className={styles.sub}>2 columns occupy pannudhu</text>
      <rect x="440" y="36" width="200" height="64" rx="8" className={styles.boxPurple}/>
      <text x="540" y="64" textAnchor="middle" className={styles.label}>Item 2</text>
      <text x="540" y="80" textAnchor="middle" className={styles.sub}>1fr</text>
      <rect x="40" y="116" width="185" height="64" rx="8" className={styles.boxTeal}/>
      <text x="132" y="152" textAnchor="middle" className={styles.label}>Item 3</text>
      <rect x="245" y="116" width="185" height="64" rx="8" className={styles.boxCoral}/>
      <text x="337" y="152" textAnchor="middle" className={styles.label}>Item 4</text>
      <rect x="450" y="116" width="190" height="64" rx="8" className={styles.boxAmber}/>
      <text x="545" y="152" textAnchor="middle" className={styles.label}>Item 5</text>
      <text x="340" y="226" textAnchor="middle" className={styles.sub}>gap: 16px — items-ku naduvule spacing</text>
    </svg>
  ),

  'css-responsive': () => (
    <svg width="100%" viewBox="0 0 680 260" className={styles.svg}>
      <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
      <rect x="40" y="30" width="160" height="180" rx="12" className={styles.boxCoral}/>
      <text x="120" y="86" textAnchor="middle" className={styles.label}>Mobile</text>
      <text x="120" y="104" textAnchor="middle" className={styles.sub}>&lt;768px</text>
      <text x="120" y="124" textAnchor="middle" className={styles.sub}>1 column</text>
      <text x="120" y="142" textAnchor="middle" className={styles.sub}>Default CSS</text>
      <rect x="250" y="50" width="180" height="140" rx="12" className={styles.boxAmber}/>
      <text x="340" y="102" textAnchor="middle" className={styles.label}>Tablet</text>
      <text x="340" y="118" textAnchor="middle" className={styles.sub}>768px+</text>
      <text x="340" y="136" textAnchor="middle" className={styles.sub}>2 columns</text>
      <rect x="480" y="70" width="160" height="100" rx="12" className={styles.boxTeal}/>
      <text x="560" y="112" textAnchor="middle" className={styles.label}>Desktop</text>
      <text x="560" y="128" textAnchor="middle" className={styles.sub}>1024px+</text>
      <text x="560" y="144" textAnchor="middle" className={styles.sub}>3 columns</text>
      <line x1="200" y1="120" x2="250" y2="120" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.5"/>
      <line x1="430" y1="120" x2="480" y2="120" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.5"/>
      <text x="340" y="238" textAnchor="middle" className={styles.sub}>Mobile first — @media (min-width:...) add pannu</text>
    </svg>
  ),

  // ─── JS ─────────────────────────────────────────────────
  'js-async': () => (
    <svg width="100%" viewBox="0 0 680 290" className={styles.svg}>
      <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
      <rect x="220" y="20" width="240" height="44" rx="8" className={styles.boxPurple}/>
      <text x="340" y="42" textAnchor="middle" className={styles.label}>async function call</text>
      <line x1="340" y1="64" x2="340" y2="88" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <rect x="160" y="88" width="360" height="44" rx="8" className={styles.boxBlue}/>
      <text x="340" y="108" textAnchor="middle" className={styles.label}>fetch('/api/data')</text>
      <text x="340" y="124" textAnchor="middle" className={styles.sub}>HTTP request send pannudhu</text>
      <line x1="340" y1="132" x2="340" y2="156" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <rect x="160" y="156" width="360" height="44" rx="8" className={styles.boxTeal}/>
      <text x="340" y="176" textAnchor="middle" className={styles.label}>await res.json()</text>
      <text x="340" y="192" textAnchor="middle" className={styles.sub}>Response parse pannudhu</text>
      <line x1="200" y1="178" x2="130" y2="216" stroke="#E24B4A" strokeWidth="1" markerEnd="url(#arr)" opacity="0.7"/>
      <line x1="480" y1="178" x2="540" y2="216" stroke="#1D9E75" strokeWidth="1" markerEnd="url(#arr)" opacity="0.7"/>
      <rect x="40" y="216" width="170" height="50" rx="8" className={styles.boxRed}/>
      <text x="125" y="236" textAnchor="middle" className={styles.label}>catch(err)</text>
      <text x="125" y="252" textAnchor="middle" className={styles.sub}>Error handle</text>
      <rect x="470" y="216" width="170" height="50" rx="8" className={styles.boxGreen}/>
      <text x="555" y="236" textAnchor="middle" className={styles.label}>Data use pannu</text>
      <text x="555" y="252" textAnchor="middle" className={styles.sub}>UI update</text>
    </svg>
  ),

  'js-dom': () => (
    <svg width="100%" viewBox="0 0 680 260" className={styles.svg}>
      <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
      <rect x="40" y="20" width="600" height="50" rx="8" className={styles.boxGray}/>
      <text x="340" y="42" textAnchor="middle" className={styles.label}>document.querySelector('#btn')</text>
      <text x="340" y="58" textAnchor="middle" className={styles.sub}>HTML element-a JS-la select pannudhu</text>
      <line x1="340" y1="70" x2="340" y2="96" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <rect x="100" y="96" width="480" height="50" rx="8" className={styles.boxPurple}/>
      <text x="340" y="116" textAnchor="middle" className={styles.label}>addEventListener('click', handler)</text>
      <text x="340" y="132" textAnchor="middle" className={styles.sub}>User click-ku wait pannudhu</text>
      <line x1="240" y1="146" x2="160" y2="184" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="340" y1="146" x2="340" y2="184" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="440" y1="146" x2="520" y2="184" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <rect x="60" y="184" width="180" height="50" rx="8" className={styles.boxTeal}/>
      <text x="150" y="205" textAnchor="middle" className={styles.label}>textContent</text>
      <text x="150" y="221" textAnchor="middle" className={styles.sub}>Text maathu</text>
      <rect x="260" y="184" width="160" height="50" rx="8" className={styles.boxCoral}/>
      <text x="340" y="205" textAnchor="middle" className={styles.label}>classList.add</text>
      <text x="340" y="221" textAnchor="middle" className={styles.sub}>Class add</text>
      <rect x="440" y="184" width="160" height="50" rx="8" className={styles.boxAmber}/>
      <text x="520" y="205" textAnchor="middle" className={styles.label}>style.color</text>
      <text x="520" y="221" textAnchor="middle" className={styles.sub}>CSS change</text>
    </svg>
  ),

  'js-arrays': () => (
    <svg width="100%" viewBox="0 0 680 240" className={styles.svg}>
      <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
      <rect x="40" y="20" width="110" height="188" rx="8" className={styles.boxGray}/>
      <text x="95" y="50" textAnchor="middle" className={styles.label}>Input</text>
      <text x="95" y="74" textAnchor="middle" className={styles.sub}>[1, 2,</text>
      <text x="95" y="90" textAnchor="middle" className={styles.sub}>3, 4, 5]</text>
      {[
        { y: 20, box: styles.boxPurple, name: '.map()', desc: 'Transform each', result: '[2,4,6,8,10]' },
        { y: 68, box: styles.boxTeal,   name: '.filter()', desc: 'Keep matching', result: '[2, 4]' },
        { y: 116, box: styles.boxCoral, name: '.find()', desc: 'First match', result: '4 (first >3)' },
        { y: 164, box: styles.boxAmber, name: '.reduce()', desc: 'Collapse all', result: '15 (sum)' },
      ].map(({ y, box, name, desc, result }) => (
        <g key={name}>
          <rect x="180" y={y} width="130" height="44" rx="8" className={box}/>
          <text x="245" y={y+20} textAnchor="middle" className={styles.label}>{name}</text>
          <text x="245" y={y+35} textAnchor="middle" className={styles.sub}>{desc}</text>
          <rect x="360" y={y} width="280" height="44" rx="8" className={box}/>
          <text x="500" y={y+22} textAnchor="middle" className={styles.label}>{result}</text>
          <line x1="150" y1={y+22} x2="180" y2={y+22} stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
          <line x1="310" y1={y+22} x2="360" y2={y+22} stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
        </g>
      ))}
    </svg>
  ),

  // ─── REACT ──────────────────────────────────────────────
  'react-state': () => (
    <svg width="100%" viewBox="0 0 680 290" className={styles.svg}>
      <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
      <rect x="190" y="20" width="300" height="50" rx="8" className={styles.boxTeal}/>
      <text x="340" y="42" textAnchor="middle" className={styles.label}>const [count, setCount]</text>
      <text x="340" y="58" textAnchor="middle" className={styles.sub}>= useState(0)</text>
      <line x1="340" y1="70" x2="340" y2="96" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <rect x="120" y="96" width="440" height="50" rx="8" className={styles.boxBlue}/>
      <text x="340" y="118" textAnchor="middle" className={styles.label}>JSX render — count show pannudhu</text>
      <text x="340" y="134" textAnchor="middle" className={styles.sub}>&lt;p&gt;Count: &#123;count&#125;&lt;/p&gt;</text>
      <line x1="260" y1="146" x2="160" y2="186" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="420" y1="146" x2="500" y2="186" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <rect x="40" y="186" width="280" height="50" rx="8" className={styles.boxPurple}/>
      <text x="180" y="206" textAnchor="middle" className={styles.label}>User click → setCount(c+1)</text>
      <text x="180" y="222" textAnchor="middle" className={styles.sub}>Setter function call</text>
      <rect x="370" y="186" width="270" height="50" rx="8" className={styles.boxCoral}/>
      <text x="505" y="206" textAnchor="middle" className={styles.label}>State update</text>
      <text x="505" y="222" textAnchor="middle" className={styles.sub}>React re-render trigger</text>
      <path d="M 180 186 Q 180 158 260 146" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr)" opacity="0.4"/>
      <text x="340" y="270" textAnchor="middle" className={styles.sub}>State change → Re-render → New UI ↻</text>
    </svg>
  ),

  'react-useeffect': () => (
    <svg width="100%" viewBox="0 0 680 310" className={styles.svg}>
      <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
      <rect x="230" y="20" width="220" height="44" rx="8" className={styles.boxPurple}/>
      <text x="340" y="38" textAnchor="middle" className={styles.label}>Component mount</text>
      <text x="340" y="54" textAnchor="middle" className={styles.sub}>First render</text>
      <line x1="340" y1="64" x2="340" y2="90" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <rect x="170" y="90" width="340" height="50" rx="8" className={styles.boxTeal}/>
      <text x="340" y="110" textAnchor="middle" className={styles.label}>useEffect runs</text>
      <text x="340" y="126" textAnchor="middle" className={styles.sub}>After render complete</text>
      <line x1="210" y1="115" x2="120" y2="160" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="470" y1="115" x2="550" y2="160" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <rect x="40" y="160" width="170" height="54" rx="8" className={styles.boxAmber}/>
      <text x="125" y="180" textAnchor="middle" className={styles.label}>[ ] empty deps</text>
      <text x="125" y="196" textAnchor="middle" className={styles.sub}>Runs once only</text>
      <rect x="470" y="160" width="170" height="54" rx="8" className={styles.boxBlue}/>
      <text x="555" y="180" textAnchor="middle" className={styles.label}>[dep] deps array</text>
      <text x="555" y="196" textAnchor="middle" className={styles.sub}>dep change = re-run</text>
      <rect x="180" y="246" width="320" height="44" rx="8" className={styles.boxCoral}/>
      <text x="340" y="264" textAnchor="middle" className={styles.label}>return () =&gt; cleanup()</text>
      <text x="340" y="280" textAnchor="middle" className={styles.sub}>Unmount-la run aagum</text>
      <line x1="340" y1="140" x2="340" y2="246" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr)" opacity="0.4"/>
    </svg>
  ),

  'react-components': () => (
    <svg width="100%" viewBox="0 0 680 270" className={styles.svg}>
      <defs><marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></marker></defs>
      <rect x="230" y="20" width="220" height="50" rx="8" className={styles.boxPurple}/>
      <text x="340" y="42" textAnchor="middle" className={styles.label}>&lt;App /&gt;</text>
      <text x="340" y="58" textAnchor="middle" className={styles.sub}>Root component</text>
      <line x1="300" y1="70" x2="130" y2="110" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="340" y1="70" x2="340" y2="110" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="380" y1="70" x2="550" y2="110" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <rect x="40" y="110" width="170" height="50" rx="8" className={styles.boxTeal}/>
      <text x="125" y="132" textAnchor="middle" className={styles.label}>&lt;Header /&gt;</text>
      <text x="125" y="148" textAnchor="middle" className={styles.sub}>props: theme</text>
      <rect x="255" y="110" width="170" height="50" rx="8" className={styles.boxBlue}/>
      <text x="340" y="132" textAnchor="middle" className={styles.label}>&lt;Main /&gt;</text>
      <text x="340" y="148" textAnchor="middle" className={styles.sub}>props: data</text>
      <rect x="470" y="110" width="170" height="50" rx="8" className={styles.boxCoral}/>
      <text x="555" y="132" textAnchor="middle" className={styles.label}>&lt;Footer /&gt;</text>
      <text x="555" y="148" textAnchor="middle" className={styles.sub}>no props</text>
      <line x1="310" y1="160" x2="240" y2="200" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="340" y1="160" x2="340" y2="200" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <line x1="370" y1="160" x2="430" y2="200" stroke="currentColor" strokeWidth="1" markerEnd="url(#arr)" opacity="0.4"/>
      <rect x="195" y="200" width="90" height="36" rx="6" className={styles.boxBlue}/>
      <text x="240" y="222" textAnchor="middle" className={styles.sub}>&lt;Card /&gt;</text>
      <rect x="295" y="200" width="90" height="36" rx="6" className={styles.boxBlue}/>
      <text x="340" y="222" textAnchor="middle" className={styles.sub}>&lt;List /&gt;</text>
      <rect x="395" y="200" width="90" height="36" rx="6" className={styles.boxBlue}/>
      <text x="440" y="222" textAnchor="middle" className={styles.sub}>&lt;Button /&gt;</text>
      <text x="340" y="256" textAnchor="middle" className={styles.sub}>Props flow down ↓ — Data always parent → child</text>
    </svg>
  ),
}

export default function DiagramView({ lang, topicId }) {
  const key = `${lang}-${topicId}`
  const Diagram = diagrams[key]
  if (!Diagram) return null
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span className={styles.badge}>Diagram</span>
        <span className={styles.hint}>Visual overview</span>
      </div>
      <Diagram />
    </div>
  )
}
