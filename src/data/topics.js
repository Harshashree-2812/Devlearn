export const languages = [
  { id: 'html',  label: 'HTML',  accentVar: '--accent-html',  tagBgVar: '--tag-html-bg',  darkText: false },
  { id: 'css',   label: 'CSS',   accentVar: '--accent-css',   tagBgVar: '--tag-css-bg',   darkText: false },
  { id: 'js',    label: 'JS',    accentVar: '--accent-js',    tagBgVar: '--tag-js-bg',    darkText: true  },
  { id: 'react', label: 'React', accentVar: '--accent-react', tagBgVar: '--tag-react-bg', darkText: false },
]

export const topics = {
  html: [
    {
      id: 'structure', label: 'Page Structure',
      title: 'HTML Page Structure',
      body: `Every HTML page follows a standard skeleton. <code>&lt;!DOCTYPE html&gt;</code> tells the browser this is HTML5. <code>&lt;head&gt;</code> holds metadata and links, while <code>&lt;body&gt;</code> holds everything visible on screen.`,
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`,
      preview: `<h2 style="font-size:18px;margin:0 0 6px;">Hello World</h2><p style="margin:0;opacity:.7;">This is a paragraph.</p>`
    },
    {
      id: 'headings', label: 'Headings & Text',
      title: 'Headings & Text Tags',
      body: `Use <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> for headings — only one <code>&lt;h1&gt;</code> per page. <code>&lt;p&gt;</code> for paragraphs. <code>&lt;strong&gt;</code> for bold importance, <code>&lt;em&gt;</code> for emphasis.`,
      code: `<h1>Main Title — one per page</h1>
<h2>Section Heading</h2>
<h3>Sub-section</h3>

<p>A regular paragraph with
  <strong>bold text</strong> and
  <em>italic text</em>.
</p>`,
      preview: `<h1 style="font-size:22px;margin:0 0 3px;">Main Title</h1><h2 style="font-size:16px;margin:0 0 6px;opacity:.7;">Section Heading</h2><p style="margin:0;">Paragraph with <strong>bold</strong> and <em>italic</em>.</p>`
    },
    {
      id: 'links', label: 'Links & Images',
      title: 'Links & Images',
      body: `<code>&lt;a href=""&gt;</code> creates hyperlinks. Add <code>target="_blank"</code> to open in a new tab. <code>&lt;img src="" alt=""&gt;</code> embeds images — always include <code>alt</code> for accessibility and SEO.`,
      code: `<a href="https://devlearn.com">Visit DevLearn</a>

<a href="https://github.com" target="_blank">
  GitHub ↗
</a>

<img
  src="photo.jpg"
  alt="A landscape photo"
  width="400"
/>`,
      preview: `<div style="display:flex;flex-direction:column;gap:8px;"><a href="#" style="color:#f97316;text-decoration:none;font-weight:500;">Visit DevLearn</a><a href="#" style="color:#f97316;text-decoration:none;font-weight:500;">GitHub ↗</a><div style="width:200px;height:80px;background:linear-gradient(135deg,#f97316,#ef4444);border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;opacity:.85;">img preview</div></div>`
    },
    {
      id: 'lists', label: 'Lists',
      title: 'Ordered & Unordered Lists',
      body: `<code>&lt;ul&gt;</code> creates bullet lists. <code>&lt;ol&gt;</code> creates numbered lists. Both use <code>&lt;li&gt;</code> for each item. Lists can be nested — just put a new list inside an <code>&lt;li&gt;</code>.`,
      code: `<ul>
  <li>HTML — structure</li>
  <li>CSS  — style</li>
  <li>JS   — behaviour</li>
</ul>

<ol>
  <li>Learn HTML first</li>
  <li>Then CSS</li>
  <li>Then JavaScript</li>
</ol>`,
      preview: `<div style="display:flex;gap:32px;"><ul style="padding-left:18px;display:flex;flex-direction:column;gap:3px;"><li>HTML</li><li>CSS</li><li>JS</li></ul><ol style="padding-left:18px;display:flex;flex-direction:column;gap:3px;"><li>HTML first</li><li>Then CSS</li><li>Then JS</li></ol></div>`
    },
    {
      id: 'forms', label: 'Forms & Inputs',
      title: 'Forms & Input Elements',
      body: `<code>&lt;form&gt;</code> wraps all form controls. Pair <code>&lt;label for="id"&gt;</code> with matching <code>id</code> on inputs for accessibility. Common types: <code>text</code>, <code>email</code>, <code>password</code>, <code>checkbox</code>, <code>submit</code>.`,
      code: `<form>
  <label for="name">Name</label>
  <input type="text" id="name" placeholder="Your name" />

  <label for="email">Email</label>
  <input type="email" id="email" placeholder="you@email.com" />

  <button type="submit">Send</button>
</form>`,
      preview: `<div style="display:flex;flex-direction:column;gap:8px;"><input placeholder="Your name" style="padding:7px 11px;border:1px solid currentColor;border-radius:6px;background:transparent;color:inherit;font-size:13px;width:220px;opacity:.7;" /><input placeholder="you@email.com" style="padding:7px 11px;border:1px solid currentColor;border-radius:6px;background:transparent;color:inherit;font-size:13px;width:220px;opacity:.7;" /><button style="padding:8px 18px;background:#f97316;border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:13px;font-weight:500;width:fit-content;">Send</button></div>`
    },
    {
      id: 'semantic', label: 'Semantic HTML',
      title: 'Semantic HTML Tags',
      body: `Semantic tags communicate <em>meaning</em> to browsers and screen readers, not just visual structure. Always prefer them over generic <code>&lt;div&gt;</code> wrappers where a better tag exists.`,
      code: `<header>  <!-- site logo + nav --></header>
<nav>     <!-- navigation links --></nav>
<main>
  <article> <!-- standalone content --></article>
  <aside>   <!-- sidebar / related  --></aside>
</main>
<footer>  <!-- copyright, links   --></footer>`,
      preview: `<div style="display:flex;flex-direction:column;gap:4px;font-size:12px;font-family:monospace;"><div style="padding:5px 10px;border-radius:4px;background:#f97316;color:#fff;opacity:.85;">&lt;header&gt;</div><div style="padding:5px 10px;border-radius:4px;background:#3b82f6;color:#fff;opacity:.85;">&lt;main&gt;</div><div style="padding:5px 10px 5px 28px;border-radius:4px;background:#8b5cf6;color:#fff;opacity:.85;">&lt;article&gt; inside main</div><div style="padding:5px 10px;border-radius:4px;background:#14b8a6;color:#fff;opacity:.85;">&lt;footer&gt;</div></div>`
    },
  ],

  css: [
    {
      id: 'selectors', label: 'Selectors',
      title: 'CSS Selectors',
      body: `Selectors choose which elements to style. Tag selects all of that element. <code>.class</code> is reusable across many elements. <code>#id</code> targets exactly one element. Prefer classes over IDs for styling.`,
      code: `/* Tag selector */
p { color: #64748b; }

/* Class — reusable */
.card {
  background: #1e293b;
  border-radius: 8px;
  padding: 16px;
}

/* ID — unique element */
#hero { font-size: 48px; font-weight: 800; }

/* Descendant */
.card p { font-size: 13px; opacity: .7; }`,
      preview: `<div style="display:flex;flex-direction:column;gap:8px;"><p style="opacity:.6;margin:0;">tag → grey paragraph</p><div style="background:rgba(99,102,241,.15);border-radius:8px;padding:10px;font-size:12px;">.card → styled box<p style="font-size:11px;opacity:.6;margin:4px 0 0;">.card p → smaller text</p></div><p style="font-size:22px;font-weight:800;margin:0;">#hero → huge</p></div>`
    },
    {
      id: 'boxmodel', label: 'Box Model',
      title: 'The CSS Box Model',
      body: `Every element is a rectangular box with 4 layers: <strong>Content</strong> → <strong>Padding</strong> → <strong>Border</strong> → <strong>Margin</strong>. Always add <code>box-sizing: border-box</code> so padding doesn't expand the element beyond its set width.`,
      code: `/* Apply globally — always do this */
*, *::before, *::after {
  box-sizing: border-box;
}

.box {
  width: 200px;
  padding: 20px;          /* inner spacing */
  border: 2px solid #0ea5e9;
  margin: 24px auto;      /* outer spacing */
}`,
      preview: `<div style="display:inline-flex;padding:8px;border:1px dashed rgba(255,255,255,.3);border-radius:4px;font-size:10px;opacity:.8;"><div style="padding:8px;border:2px solid #3b82f6;border-radius:4px;font-size:10px;color:#93c5fd;"><div style="background:#1e3a5f;padding:10px 14px;border-radius:3px;color:#bfdbfe;font-size:11px;white-space:nowrap;">content 200×60</div></div></div>`
    },
    {
      id: 'flexbox', label: 'Flexbox',
      title: 'CSS Flexbox',
      body: `Flexbox lays out items in a <strong>single row or column</strong>. Set <code>display: flex</code> on the parent. <code>justify-content</code> aligns horizontally, <code>align-items</code> vertically. The most-used layout tool day-to-day.`,
      code: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;      /* items wrap on small screens */
}

.item { flex: 1; }     /* each item gets equal width */`,
      preview: `<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;border:1px dashed rgba(59,130,246,.5);padding:12px;border-radius:8px;"><div style="flex:1;background:#3b82f6;color:#fff;padding:10px;border-radius:6px;text-align:center;font-size:12px;">A</div><div style="flex:1;background:#6366f1;color:#fff;padding:10px;border-radius:6px;text-align:center;font-size:12px;">B</div><div style="flex:1;background:#8b5cf6;color:#fff;padding:10px;border-radius:6px;text-align:center;font-size:12px;">C</div></div>`
    },
    {
      id: 'grid', label: 'CSS Grid',
      title: 'CSS Grid Layout',
      body: `Grid is a <strong>2D layout system</strong> — rows and columns together. <code>fr</code> is a flexible fraction unit. <code>grid-column: span 2</code> makes an item stretch across columns.`,
      code: `.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}

/* Span across columns */
.featured {
  grid-column: span 2;
}`,
      preview: `<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px;"><div style="background:#3b82f6;color:#fff;padding:9px;border-radius:5px;text-align:center;font-size:11px;grid-column:span 2;">span 2</div><div style="background:#6366f1;color:#fff;padding:9px;border-radius:5px;text-align:center;font-size:11px;">3</div><div style="background:#8b5cf6;color:#fff;padding:9px;border-radius:5px;text-align:center;font-size:11px;">4</div><div style="background:#a855f7;color:#fff;padding:9px;border-radius:5px;text-align:center;font-size:11px;">5</div><div style="background:#ec4899;color:#fff;padding:9px;border-radius:5px;text-align:center;font-size:11px;">6</div></div>`
    },
    {
      id: 'variables', label: 'CSS Variables',
      title: 'CSS Custom Properties',
      body: `CSS variables store reusable values. Define on <code>:root</code> to access globally. Changing one variable updates every element that uses it — essential for theming.`,
      code: `:root {
  --color-primary: #0ea5e9;
  --color-bg:      #0f172a;
  --radius:        8px;
  --space-md:      16px;
}

.button {
  background:    var(--color-primary);
  border-radius: var(--radius);
  padding:       var(--space-md);
}`,
      preview: `<div style="display:flex;gap:8px;flex-wrap:wrap;"><button style="padding:8px 16px;background:#3b82f6;border:none;border-radius:8px;color:#fff;font-size:12px;cursor:pointer;">--primary</button><button style="padding:8px 16px;background:#6366f1;border:none;border-radius:8px;color:#fff;font-size:12px;cursor:pointer;">--accent</button><button style="padding:8px 16px;background:#22c55e;border:none;border-radius:8px;color:#fff;font-size:12px;cursor:pointer;">--success</button></div>`
    },
    {
      id: 'responsive', label: 'Responsive Design',
      title: 'Responsive Design & Media Queries',
      body: `Write styles for mobile first, then use <code>@media (min-width:...)</code> to layer on styles for larger screens. This keeps mobile CSS lean and avoids overriding a pile of desktop styles.`,
      code: `/* Mobile — default */
.grid { grid-template-columns: 1fr; }

/* Tablet 768px + */
@media (min-width: 768px) {
  .grid { grid-template-columns: 1fr 1fr; }
}

/* Desktop 1024px + */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}`,
      preview: `<div style="display:flex;flex-direction:column;gap:6px;font-size:12px;"><div style="background:rgba(239,68,68,.15);border-radius:6px;padding:8px 12px;border-left:3px solid #ef4444;">📱 &lt;768px — 1 column</div><div style="background:rgba(245,158,11,.15);border-radius:6px;padding:8px 12px;border-left:3px solid #f59e0b;">💻 768px+ — 2 columns</div><div style="background:rgba(34,197,94,.15);border-radius:6px;padding:8px 12px;border-left:3px solid #22c55e;">🖥 1024px+ — 3 columns</div></div>`
    },
  ],

  js: [
    {
      id: 'variables', label: 'Variables & Types',
      title: 'Variables & Data Types',
      body: `Use <code>const</code> by default — change to <code>let</code> only when the value must change later. Never use <code>var</code>. JS has 6 primitive types: <strong>string, number, boolean, null, undefined, symbol</strong>.`,
      code: `const name  = "Thamizh";   // string
const age   = 21;           // number
const isDev = true;         // boolean
const empty = null;         // intentional empty

let count = 0;              // needs to change
count += 1;                 // count is now 1

console.log(typeof name);   // "string"
console.log(typeof age);    // "number"`,
      preview: `<div style="background:rgba(0,0,0,.3);border-radius:8px;padding:12px;font-family:monospace;font-size:12px;"><span style="opacity:.5;">typeof results</span><br/><span style="color:#facc15;">typeof</span> <span style="color:#f97316;">"Thamizh"</span> → <span style="color:#22c55e;">"string"</span><br/><span style="color:#facc15;">typeof</span> <span style="color:#f97316;">21</span> → <span style="color:#22c55e;">"number"</span><br/><span style="color:#facc15;">typeof</span> <span style="color:#f97316;">true</span> → <span style="color:#22c55e;">"boolean"</span></div>`
    },
    {
      id: 'functions', label: 'Functions',
      title: 'Functions & Arrow Functions',
      body: `Functions group reusable logic. Arrow functions <code>=&gt;</code> are shorter and don't have their own <code>this</code>. A single-expression arrow function can skip <code>return</code> and curly braces.`,
      code: `// Regular function
function greet(name) {
  return "Hello, " + name;
}

// Arrow function — preferred
const add = (a, b) => a + b;

// One-liner implicit return
const double = n => n * 2;

console.log(greet("Thamizh")); // "Hello, Thamizh"
console.log(add(4, 6));        // 10
console.log(double(7));        // 14`,
      preview: `<div style="background:rgba(0,0,0,.3);border-radius:8px;padding:12px;font-family:monospace;font-size:12px;"><span style="color:#38bdf8;">greet</span>("Thamizh") → <span style="color:#22c55e;">"Hello, Thamizh"</span><br/><span style="color:#38bdf8;">add</span>(4, 6) → <span style="color:#22c55e;">10</span><br/><span style="color:#38bdf8;">double</span>(7) → <span style="color:#22c55e;">14</span></div>`
    },
    {
      id: 'arrays', label: 'Arrays & Methods',
      title: 'Arrays & Array Methods',
      body: `The 4 essential array methods: <code>map()</code> transforms every item, <code>filter()</code> keeps matching items, <code>find()</code> returns the first match, <code>reduce()</code> collapses to a single value. These replace most loops.`,
      code: `const nums = [1, 2, 3, 4, 5];

const doubled = nums.map(n => n * 2);
// [2, 4, 6, 8, 10]

const evens = nums.filter(n => n % 2 === 0);
// [2, 4]

const first = nums.find(n => n > 3);
// 4

const sum = nums.reduce((acc, n) => acc + n, 0);
// 15`,
      preview: `<div style="background:rgba(0,0,0,.3);border-radius:8px;padding:12px;font-family:monospace;font-size:12px;"><span style="opacity:.5;">map →</span>    <span style="color:#22c55e;">[2, 4, 6, 8, 10]</span><br/><span style="opacity:.5;">filter →</span> <span style="color:#22c55e;">[2, 4]</span><br/><span style="opacity:.5;">find →</span>   <span style="color:#22c55e;">4</span><br/><span style="opacity:.5;">reduce →</span> <span style="color:#22c55e;">15</span></div>`
    },
    {
      id: 'objects', label: 'Objects',
      title: 'Objects & Destructuring',
      body: `Objects store key-value pairs. Use destructuring to pull out values cleanly. The spread operator <code>...</code> copies or merges objects without mutating the original — essential for React state.`,
      code: `const user = {
  name: "Thamizh",
  age:  21,
  role: "developer",
};

// Destructuring
const { name, role } = user;

// Spread — copy + override
const updated = { ...user, age: 22 };

console.log(name);        // "Thamizh"
console.log(updated.age); // 22`,
      preview: `<div style="background:rgba(0,0,0,.3);border-radius:8px;padding:12px;font-family:monospace;font-size:12px;"><span style="color:#facc15;">name</span> → <span style="color:#22c55e;">"Thamizh"</span><br/><span style="color:#facc15;">role</span> → <span style="color:#22c55e;">"developer"</span><br/><span style="color:#facc15;">updated.age</span> → <span style="color:#22c55e;">22</span></div>`
    },
    {
      id: 'dom', label: 'DOM & Events',
      title: 'DOM Manipulation & Events',
      body: `The DOM lets JS control the HTML page. <code>querySelector</code> selects elements. <code>addEventListener</code> listens for user actions. Update <code>.textContent</code>, <code>.style</code>, or <code>.classList</code> to reflect changes.`,
      code: `const btn = document.querySelector("#myBtn");
const box = document.querySelector(".output");

btn.addEventListener("click", () => {
  box.textContent = "Button was clicked!";
  box.classList.add("active");
  box.style.color = "#0ea5e9";
});

// Remove listener when done
btn.removeEventListener("click", handler);`,
      preview: `<div style="display:flex;flex-direction:column;gap:10px;"><div id="dom-demo" style="padding:10px 14px;border:1px solid rgba(255,255,255,.2);border-radius:6px;font-size:13px;min-height:40px;display:flex;align-items:center;">Original text</div><button onclick="const d=document.getElementById('dom-demo');d.textContent='Button was clicked! ✓';d.style.color='#38bdf8';d.style.borderColor='#38bdf8';" style="padding:8px 16px;background:#facc15;border:none;border-radius:6px;color:#000;cursor:pointer;font-size:13px;font-weight:600;width:fit-content;">Click me</button></div>`
    },
    {
      id: 'async', label: 'Async & Fetch',
      title: 'Async JS & Fetch API',
      body: `<code>async/await</code> makes async code read like synchronous code. <code>fetch()</code> sends HTTP requests. Always <code>await res.json()</code> to parse the response body. Wrap in <code>try/catch</code> to handle network errors gracefully.`,
      code: `async function getUser(id) {
  try {
    const res  = await fetch(\`/api/users/\${id}\`);

    if (!res.ok) throw new Error("Not found");

    const data = await res.json();
    console.log(data.name);
  } catch (err) {
    console.error("Failed:", err.message);
  }
}

getUser(1);`,
      preview: `<div style="background:rgba(0,0,0,.3);border-radius:8px;padding:12px;font-family:monospace;font-size:12px;line-height:1.8;"><span style="opacity:.5;">// Flow</span><br/><span style="color:#facc15;">1.</span> fetch() → sends request<br/><span style="color:#facc15;">2.</span> await → waits for response<br/><span style="color:#facc15;">3.</span> res.json() → parse body<br/><span style="color:#facc15;">4.</span> <span style="color:#22c55e;">use the data ✓</span></div>`
    },
  ],

  react: [
    {
      id: 'components', label: 'Components',
      title: 'React Components',
      body: `A component is a JS function that returns JSX. The name must start with a <strong>capital letter</strong>. Keep each component focused on one job, then compose them together to build complex UIs.`,
      code: `// A simple functional component
function Card({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Compose multiple times
export default function App() {
  return (
    <>
      <Card title="HTML" description="Structure" />
      <Card title="CSS"  description="Style"     />
    </>
  );
}`,
      preview: `<div style="display:flex;flex-direction:column;gap:8px;"><div style="border-left:3px solid #f97316;padding:10px 14px;border-radius:0 8px 8px 0;background:rgba(249,115,22,.08);"><strong style="font-size:13px;">HTML</strong><p style="margin:3px 0 0;font-size:11px;opacity:.6;">Structure</p></div><div style="border-left:3px solid #3b82f6;padding:10px 14px;border-radius:0 8px 8px 0;background:rgba(59,130,246,.08);"><strong style="font-size:13px;">CSS</strong><p style="margin:3px 0 0;font-size:11px;opacity:.6;">Style</p></div></div>`
    },
    {
      id: 'props', label: 'Props',
      title: 'Props — Passing Data',
      body: `Props pass data from parent to child. They are <strong>read-only</strong> — a child never modifies props. Destructure them in the parameter. Provide default values for optional props.`,
      code: `function Button({
  label,
  color   = "#0ea5e9",  // default value
  onClick,
}) {
  return (
    <button
      style={{ background: color }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

<Button label="Save"   color="#22c55e" onClick={save} />
<Button label="Delete" color="#ef4444" onClick={del}  />`,
      preview: `<div style="display:flex;gap:8px;"><button style="padding:8px 18px;background:#22c55e;border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:13px;font-weight:500;">Save</button><button style="padding:8px 18px;background:#ef4444;border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:13px;font-weight:500;">Delete</button></div>`
    },
    {
      id: 'state', label: 'useState',
      title: 'useState — Component State',
      body: `State is data that changes over time and triggers a re-render. Always update state via the <strong>setter function</strong> — never mutate directly. Pass the initial value into <code>useState(initial)</code>.`,
      code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`,
      preview: `<div style="text-align:center;padding:4px;"><p style="font-size:36px;font-weight:800;margin:0 0 14px;font-family:monospace;" id="sc">0</p><div style="display:flex;gap:8px;justify-content:center;"><button onclick="document.getElementById('sc').textContent=+document.getElementById('sc').textContent-1" style="padding:8px 16px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:6px;color:inherit;cursor:pointer;font-size:16px;">−1</button><button onclick="document.getElementById('sc').textContent=0" style="padding:8px 14px;background:transparent;border:1px solid rgba(255,255,255,.2);border-radius:6px;color:inherit;cursor:pointer;font-size:12px;">Reset</button><button onclick="document.getElementById('sc').textContent=+document.getElementById('sc').textContent+1" style="padding:8px 16px;background:#38bdf8;border:none;border-radius:6px;color:#000;cursor:pointer;font-size:16px;font-weight:700;">+1</button></div></div>`
    },
    {
      id: 'useeffect', label: 'useEffect',
      title: 'useEffect — Side Effects',
      body: `useEffect runs <strong>after render</strong>. An empty <code>[]</code> means run once on mount. Pass values in the array to re-run when they change. Return a cleanup function to cancel timers or subscriptions.`,
      code: `import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(id); // cleanup
  }, []); // [] → run once on mount

  return <p>Elapsed: {seconds}s</p>;
}`,
      preview: `<div style="text-align:center;padding:8px;"><p style="font-size:20px;font-weight:700;color:#38bdf8;margin:0 0 10px;" id="td">Elapsed: 0s</p><div style="display:flex;gap:8px;justify-content:center;"><button onclick="if(this.dataset.on==='1'){clearInterval(window._tid);this.textContent='Start';this.dataset.on='0';}else{window._tid=setInterval(()=>{let v=parseInt(document.getElementById('td').textContent.match(/\d+/)[0]);document.getElementById('td').textContent='Elapsed: '+(v+1)+'s';},1000);this.textContent='Stop';this.dataset.on='1';}" data-on="0" style="padding:7px 18px;background:#6366f1;border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:13px;">Start</button><button onclick="clearInterval(window._tid);document.getElementById('td').textContent='Elapsed: 0s';if(document.querySelector('[data-on]'))document.querySelector('[data-on]').dataset.on='0',document.querySelector('[data-on]').textContent='Start';" style="padding:7px 14px;background:transparent;border:1px solid rgba(255,255,255,.2);border-radius:6px;color:inherit;cursor:pointer;font-size:13px;">Reset</button></div></div>`
    },
    {
      id: 'lists', label: 'Lists & Keys',
      title: 'Rendering Lists with Keys',
      body: `Use <code>.map()</code> to render arrays of JSX. Always add a <strong>unique <code>key</code> prop</strong> so React can track which items changed. Never use the array index as key if the list can be reordered or filtered.`,
      code: `const skills = [
  { id: 1, name: "HTML",       color: "#f97316" },
  { id: 2, name: "CSS",        color: "#3b82f6" },
  { id: 3, name: "JavaScript", color: "#facc15" },
  { id: 4, name: "React",      color: "#38bdf8" },
];

function SkillList() {
  return (
    <ul>
      {skills.map(skill => (
        <li key={skill.id} style={{ color: skill.color }}>
          {skill.name}
        </li>
      ))}
    </ul>
  );
}`,
      preview: `<ul style="list-style:none;display:flex;flex-direction:column;gap:6px;padding:0;"><li style="display:flex;align-items:center;gap:8px;font-size:13px;"><span style="width:8px;height:8px;border-radius:50%;background:#f97316;flex-shrink:0;"></span>HTML <span style="opacity:.4;font-size:11px;font-family:monospace;">key=1</span></li><li style="display:flex;align-items:center;gap:8px;font-size:13px;"><span style="width:8px;height:8px;border-radius:50%;background:#3b82f6;flex-shrink:0;"></span>CSS <span style="opacity:.4;font-size:11px;font-family:monospace;">key=2</span></li><li style="display:flex;align-items:center;gap:8px;font-size:13px;"><span style="width:8px;height:8px;border-radius:50%;background:#facc15;flex-shrink:0;"></span>JavaScript <span style="opacity:.4;font-size:11px;font-family:monospace;">key=3</span></li><li style="display:flex;align-items:center;gap:8px;font-size:13px;"><span style="width:8px;height:8px;border-radius:50%;background:#38bdf8;flex-shrink:0;"></span>React <span style="opacity:.4;font-size:11px;font-family:monospace;">key=4</span></li></ul>`
    },
    {
      id: 'customhooks', label: 'Custom Hooks',
      title: 'Custom Hooks',
      body: `Custom hooks extract and share stateful logic between components without sharing UI. A custom hook is just a function whose name starts with <code>use</code> and can call other hooks inside.`,
      code: `// Reusable data-fetching hook
function useFetch(url) {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    fetch(url)
      .then(r => r.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Use in any component
const { data, loading } = useFetch("/api/posts");`,
      preview: `<div style="background:rgba(0,0,0,.3);border-radius:8px;padding:12px;font-family:monospace;font-size:12px;line-height:1.9;"><span style="opacity:.4;">// Common custom hooks</span><br/><span style="color:#38bdf8;">useFetch</span>       → fetches API data<br/><span style="color:#38bdf8;">useLocalStorage</span> → persists to browser<br/><span style="color:#38bdf8;">useDebounce</span>    → delays fast input<br/><span style="color:#38bdf8;">useWindowSize</span>  → tracks screen width</div>`
    },
  ],
}
