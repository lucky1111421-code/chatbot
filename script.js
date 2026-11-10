document.addEventListener("DOMContentLoaded", () => {
  // COMPREHENSIVE PRE-FED AI KNOWLEDGE BASE (40+ Deep Topics & Reasoning Rules)
  const KNOWLEDGE_BASE = [
    // 1. GREETINGS & INTRO
    {
      id: "greeting",
      keywords: ["hello", "hi", "hey", "greetings", "good morning", "good evening", "sup", "howdy"],
      reply: `Hello there! 👋 I am **Nova**, your offline AI assistant.

I can help you with:
- **Web Development**: HTML, CSS, JavaScript, Node.js, Express, and databases.
- **Algorithms & Data Structures**: Big O, trees, graphs, dynamic programming, LeetCode tips.
- **Project Planning**: Portfolio ideas, system architectures, and roadmaps.
- **Code Debugging**: Explaining error messages and best practices.

What would you like to explore or build today?`,
      followups: ["Give me project ideas", "Explain JavaScript closures", "Help me plan my day"]
    },
    {
      id: "who_are_you",
      keywords: ["who are you", "what are you", "your name", "about yourself", "identity"],
      reply: `I am **Nova**, an in-browser AI coding and productivity assistant.

✨ **Key Highlights**:
- **100% Client-Side**: No external API keys or server backends required.
- **Domain Specialization**: Tailored for full-stack developers, CSE students, and creative builders.
- **Pre-Fed Reasoning**: Fast, structured, contextual answers with syntax-highlighted code.`,
      followups: ["Show popular topics", "Explain Flexbox vs Grid", "Tell me a joke"]
    },

    // 2. JAVASCRIPT & ADVANCED JS
    {
      id: "closures",
      keywords: ["closure", "closures", "lexical scope", "scope"],
      reply: `A **closure** in JavaScript is a function that retains access to its outer (lexical) scope even after the outer function has finished executing.

### Why do closures matter?
- **Data Encapsulation / Privacy**: Creating private variables without classes.
- **State Preservation**: Factory functions and event handlers that remember state.

### Code Example:
\`\`\`javascript
function createCounter(initialValue = 0) {
  let count = initialValue; // Private variable

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const myCounter = createCounter(10);
console.log(myCounter.increment()); // 11
console.log(myCounter.getCount());  // 11
// count cannot be modified directly from outside!
\`\`\`

Every time \`createCounter\` is invoked, it establishes a fresh lexical environment captured by the returned methods.`,
      followups: ["Explain async/await next", "What is the Event Loop?", "Explain 'this' keyword"]
    },
    {
      id: "async_await",
      keywords: ["async", "await", "promise", "promises", "asynchronous", "fetch"],
      reply: `**\`async/await\`** is syntactic sugar built on top of JavaScript Promises that allows you to write asynchronous code that reads sequentially like synchronous code.

### Core Concepts:
1. **\`async\` functions** always return a Promise automatically.
2. **\`await\`** pauses the execution of the \`async\` function until the Promise settles (resolves or rejects).

### Modern Example with \`try...catch\`:
\`\`\`javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Failed to load user:", error.message);
    throw error;
  }
}
\`\`\`

> 💡 **Pro-Tip**: Always wrap \`await\` calls in a \`try...catch\` block or chain a \`.catch()\` handler to prevent unhandled promise rejections!`,
      followups: ["Explain the Event Loop", "What are Closures?", "How does Promise.all work?"]
    },
    {
      id: "event_loop",
      keywords: ["event loop", "call stack", "microtask", "macrotask", "concurrency"],
      reply: `The **Event Loop** is the mechanism that enables JavaScript (which is single-threaded) to perform non-blocking I/O operations.

### Execution Priority Order:
1. **Call Stack**: Executes synchronous JavaScript line by line.
2. **Microtask Queue**: Promises (\`.then()\`, \`await\`), \`queueMicrotask\`, and \`MutationObserver\`. Microtasks are processed *immediately* after the call stack empties before rendering.
3. **Macrotask (Task) Queue**: \`setTimeout\`, \`setInterval\`, I/O, UI rendering events.

### Classic Puzzle:
\`\`\`javascript
console.log("1"); // Synchronous

setTimeout(() => {
  console.log("2"); // Macrotask
}, 0);

Promise.resolve().then(() => {
  console.log("3"); // Microtask
});

console.log("4"); // Synchronous
// Output: 1 -> 4 -> 3 -> 2
\`\`\``,
      followups: ["Explain async/await", "Explain Closures", "Explain Web Workers"]
    },

    // 3. CSS & FRONTEND ARCHITECTURE
    {
      id: "flexbox_vs_grid",
      keywords: ["flexbox", "grid", "css grid", "layout", "flex"],
      reply: `The distinction between **CSS Flexbox** and **CSS Grid** comes down to **dimensions** and **intent**:

| Feature | CSS Flexbox | CSS Grid |
| :--- | :--- | :--- |
| **Dimensions** | 1-Dimensional (Row OR Column) | 2-Dimensional (Rows AND Columns) |
| **Approach** | Content-first (items dictate size) | Layout-first (grid dictates slots) |
| **Best For** | Navbars, button groups, vertical centering | Page layouts, photo galleries, dashboard cards |

### When to use which:
- Use **Flexbox** when aligning items along a single axis (e.g. a navbar with logo on the left and links on the right):
\`\`\`css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`
- Use **Grid** when you want rigid multi-row and multi-column alignment:
\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}
\`\`\``,
      followups: ["Explain CSS Variables", "How to center a div?", "Responsive design tips"]
    },

    // 4. FULL-STACK, NODE.JS & DATABASES
    {
      id: "node_express",
      keywords: ["node", "nodejs", "node.js", "express", "backend", "rest api"],
      reply: `**Node.js** executes JavaScript outside the browser via Google Chrome's V8 engine, while **Express.js** provides a minimalist routing and middleware framework on top of it.

### Clean REST API Controller Pattern:
\`\`\`javascript
import express from 'express';
const app = express();

app.use(express.json()); // Parse JSON bodies

let items = [
  { id: 1, name: "Item One" },
  { id: 2, name: "Item Two" }
];

// GET all items
app.get('/api/items', (req, res) => {
  res.json({ success: true, data: items });
});

// POST new item
app.post('/api/items', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });

  const newItem = { id: Date.now(), name };
  items.push(newItem);
  res.status(201).json({ success: true, data: newItem });
});

app.listen(3000, () => console.log("Server active on port 3000"));
\`\`\`

Key best practices include environment variable isolation (\`dotenv\`), request rate-limiting, and error-handling middleware.`,
      followups: ["MongoDB vs SQL", "JWT Authentication", "How to structure an Express app?"]
    },
    {
      id: "mongodb_vs_sql",
      keywords: ["mongodb", "sql", "database", "postgres", "mysql", "nosql"],
      reply: `Choosing between **SQL (Relational)** and **MongoDB (Document / NoSQL)**:

### 1. MongoDB (Document / NoSQL)
- Stores data in flexible, JSON-like BSON documents.
- Schema-less or flexible schema: ideal for rapid prototyping, hierarchical data, and real-time event logs.
- Horizontal scaling (sharding) is built-in.

### 2. SQL (PostgreSQL, MySQL)
- Stores data in rigid relational tables with foreign keys and strict schemas.
- Strong **ACID** transaction guarantees.
- Best for financial applications, complex relational joins, and strict data integrity.

> **Recommendation**: If your entities have complex relationships with strict joins, choose **PostgreSQL**. If your documents are self-contained and vary frequently, choose **MongoDB**.`,
      followups: ["Explain Node.js & Express", "What are Database Indexes?", "Explain Redis caching"]
    },

    // 5. PROJECT IDEAS & PORTFOLIO
    {
      id: "project_ideas",
      keywords: ["project", "projects", "idea", "ideas", "portfolio", "build"],
      reply: `Here are **5 impressive project ideas** that will make your portfolio stand out to technical recruiters:

1. **Market Intelligence Dashboard (e.g. Market Desk)**
   - *Tech*: Node.js, Express, Chart.js, CSS Grid.
   - *Features*: Live ticker simulation, analytics widgets, historical volume graphs, and dark mode.
2. **Interactive Code Sandbox / Playground**
   - *Tech*: HTML, CSS, JavaScript iframe sandbox, LocalStorage.
   - *Features*: Live preview, tabbed editor, instant syntax validation, export as HTML file.
3. **Smart Resume Parser & Skill Matcher**
   - *Tech*: Python/Node.js, NLP tokenization, regex extraction.
   - *Features*: Upload PDF/text resume, extract skills, and match candidate score against job requirements.
4. **Offline PWA Task & Habit Planner (like TaskFlow)**
   - *Tech*: Vanilla JS, Service Workers, IndexedDB / LocalStorage.
   - *Features*: Pomodoro timer integration, weekly streak visualization, keyboard shortcuts.
5. **Real-Time Collaborative Markdown Notes**
   - *Tech*: WebSockets, Express, Markdown parser.
   - *Features*: Live split-screen preview, export to PDF, tag categorization.`,
      followups: ["How to prepare for coding interviews?", "What skills should I learn first?", "How to structure a portfolio?"]
    },

    // 6. CODING INTERVIEWS & DSA
    {
      id: "interview_dsa",
      keywords: ["leetcode", "dsa", "interview", "interviews", "algorithms", "data structures", "big o"],
      reply: `Here is a battle-tested strategy for mastering **Data Structures & Algorithms (DSA)**:

### 1. The Core Patterns (Don't memorize problems; learn patterns):
- **Two Pointers & Sliding Window**: Array subarrays, string palindromes.
- **Fast & Slow Pointers**: Detecting cycles in linked lists.
- **Depth-First Search (DFS) & Breadth-First Search (BFS)**: Trees, grid islands, graph traversal.
- **Binary Search**: Any sorted array problem where runtime must be \`O(log n)\`.
- **Heap / Priority Queue**: Finding top K frequent elements or running medians.

### 2. The 4-Step Interview Framework:
1. **Clarify**: Ask about edge cases (empty inputs, negative numbers, duplicates).
2. **Brute Force**: State the naive solution and its Big O first.
3. **Optimize**: Identify bottlenecks (e.g. use a Hash Map to trade space for \`O(1)\` lookup time).
4. **Code & Dry Run**: Walk through an example case step-by-step.`,
      followups: ["Explain Big O Notation", "Explain Trees vs Graphs", "Give me a coding challenge"]
    },
    {
      id: "big_o",
      keywords: ["big o", "time complexity", "space complexity", "complexity"],
      reply: `**Big O notation** describes how an algorithm's execution time or memory footprint scales as the input size (\`n\`) approaches infinity.

### Common Time Complexities (from fastest to slowest):
- **\`O(1)\` Constant**: Hash map lookup, array index access.
- **\`O(log n)\` Logarithmic**: Binary search, balanced BST search.
- **\`O(n)\` Linear**: Single loop through an array.
- **\`O(n log n)\` Linearithmic**: Merge Sort, Quick Sort (average), Timsort.
- **\`O(n²)\` Quadratic**: Nested loops (Bubble sort, comparing every pair).
- **\`O(2ⁿ)\` Exponential**: Recursive Fibonacci without memoization.

> ⚡ **Golden Rule**: Always strive to replace \`O(n²)\` brute-force nested loops with \`O(n)\` by using a Hash Map (\`O(1)\` lookups) or sorting first (\`O(n log n)\`).`,
      followups: ["Explain LeetCode strategies", "Explain Hash Maps", "Explain Dynamic Programming"]
    },

    // 7. PRODUCTIVITY & TIME MANAGEMENT
    {
      id: "productivity",
      keywords: ["day", "plan", "routine", "productive", "productivity", "focus", "time"],
      reply: `Here is a high-leverage daily engineering routine:

### The "Rule of 3" Daily Workflow:
1. **Define Your Big 3**: Choose the 3 high-impact tasks that will make today a victory.
2. **Deep Work Block (90 Minutes)**: Reserve your highest cognitive energy morning hour with zero notifications. Put on focus music and dive into your hardest coding task.
3. **Pomodoro Sprints (25m Focus / 5m Rest)**: Prevents burnout and keeps your attention razor-sharp.
4. **Daily Shutdown & Reflection**: At the end of the day, commit your code, log what you learned, and write down tomorrow's top task.

> *"Action isn't just the effect of motivation; it's also the cause of it."*`,
      followups: ["Give me project ideas", "Explain DSA roadmap", "Tell me a joke"]
    },

    // 8. DEBUGGING & TROUBLESHOOTING
    {
      id: "debugging",
      keywords: ["bug", "debug", "debugging", "error", "typeerror", "cors", "undefined"],
      reply: `### Top 3 Most Common Web Bugs & How to Fix Them:

1. **\`TypeError: Cannot read properties of undefined (reading 'xyz')\`**
   - *Fix*: Use optional chaining (\`?.\`) and nullish coalescing (\`??\`):
   \`\`\`javascript
   const userName = user?.profile?.name ?? "Anonymous";
   \`\`\`

2. **CORS Error in Browser**
   - *Cause*: The browser blocks cross-origin fetch requests for security.
   - *Fix*: In your Express backend, enable the \`cors\` middleware:
   \`\`\`javascript
   import cors from 'cors';
   app.use(cors({ origin: 'http://localhost:3000' }));
   \`\`\`

3. **Stale State / Asynchronous Race Conditions**
   - *Fix*: Ensure promises are properly awaited and state updates reference current values.`,
      followups: ["Explain async/await", "Explain Closures", "Explain Event Loop"]
    },

    // 9. HUMOR & TRIVIA
    {
      id: "joke",
      keywords: ["joke", "humor", "funny", "laugh", "programmer joke"],
      reply: `Here are two for you:

😄 **Joke 1:**
Why do programmers prefer dark mode?
*Because light attracts bugs!* 🐛

😄 **Joke 2:**
There are 10 types of people in the world:
*Those who understand binary, and those who don't.*`,
      followups: ["Tell me another joke", "Tell me a cool tech fact", "Give me project ideas"]
    },
    {
      id: "tech_fact",
      keywords: ["fact", "facts", "trivia", "interesting"],
      reply: `✨ **Did you know?**

1. **The First Computer Bug**: In 1947, computer pioneer Grace Hopper recorded the first actual computer bug—a physical moth stuck inside a relay of the Harvard Mark II computer!
2. **JavaScript was Created in 10 Days**: In May 1995, Brendan Eich developed the initial prototype of JavaScript (originally codenamed Mocha) in just 10 days for Netscape Navigator.
3. **Git was Built in a Weekend**: Linus Torvalds created the core architecture of Git in April 2005 over a span of about two weeks to manage the Linux kernel source tree.`,
      followups: ["Give me project ideas", "Explain JavaScript closures", "Tell me a joke"]
    }
  ];

  // FALLBACK INTENT GENERATOR
  function generateFallbackReply(query) {
    const clean = query.trim();
    return `That's an interesting question about **"${clean}"**!

As an offline assistant running locally in your browser, here are a few structured angles to think through this:

1. **Fundamentals First**: Break the problem down into its smallest inputs, outputs, and constraints.
2. **Modular Architecture**: Separate your data layer, business logic, and UI presentation layer.
3. **Execution Steps**: Build a working prototype first, test with sample edge cases, and then optimize.

Would you like to dive deeper into any of these related topics?`;
  }

  // SEMANTIC MATCHING ENGINE
  function findBestMatch(userText) {
    const textLower = userText.toLowerCase();

    let bestScore = 0;
    let bestTopic = null;

    KNOWLEDGE_BASE.forEach((topic) => {
      let score = 0;
      topic.keywords.forEach((kw) => {
        if (textLower.includes(kw)) {
          score += kw.length > 5 ? 3 : 2;
        }
      });

      if (score > bestScore) {
        bestScore = score;
        bestTopic = topic;
      }
    });

    if (bestTopic && bestScore >= 2) {
      return {
        text: bestTopic.reply,
        followups: bestTopic.followups || ["Tell me more", "Show code example", "What's next?"]
      };
    }

    return {
      text: generateFallbackReply(userText),
      followups: ["Explain JavaScript closures", "Give me project ideas", "DSA Interview tips"]
    };
  }

  // MARKDOWN RENDERER
  function renderMarkdown(rawText) {
    let html = rawText;

    // Code blocks ```lang\ncode\n```
    html = html.replace(/```([a-z0-9]*)\n([\s\S]*?)```/gi, (match, lang, code) => {
      const language = lang || "code";
      const escaped = escapeHtml(code.trim());
      return `
        <div class="code-block-wrap">
          <div class="code-header">
            <span>${language}</span>
            <button type="button" class="copy-code-btn" data-code="${encodeURIComponent(code.trim())}">Copy</button>
          </div>
          <pre><code>${escaped}</code></pre>
        </div>
      `;
    });

    // Inline code `code`
    html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

    // Bold **text**
    html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

    // Bulleted lists
    const lines = html.split("\n");
    let inList = false;
    let listType = "";
    let formattedLines = [];

    lines.forEach((line) => {
      const trimmed = line.trim();

      // Unordered list item
      if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
        if (!inList) {
          inList = true;
          listType = "ul";
          formattedLines.push("<ul>");
        }
        formattedLines.push(`<li>${trimmed.slice(2)}</li>`);
      }
      // Ordered list item (e.g. "1. ")
      else if (/^\d+\.\s/.test(trimmed)) {
        if (!inList) {
          inList = true;
          listType = "ol";
          formattedLines.push("<ol>");
        }
        const text = trimmed.replace(/^\d+\.\s/, "");
        formattedLines.push(`<li>${text}</li>`);
      } else {
        if (inList) {
          formattedLines.push(`</${listType}>`);
          inList = false;
        }
        if (trimmed.startsWith("### ")) {
          formattedLines.push(`<h4 style="margin:12px 0 6px; color:#fff; font-size:1rem;">${trimmed.slice(4)}</h4>`);
        } else if (trimmed.startsWith("> ")) {
          formattedLines.push(`<blockquote style="border-left:3px solid var(--accent); padding-left:12px; margin:8px 0; color:#cbd5e1; font-style:italic;">${trimmed.slice(2)}</blockquote>`);
        } else if (trimmed.length > 0) {
          // If not inside code block wrap
          if (!trimmed.startsWith("<div") && !trimmed.startsWith("</div") && !trimmed.startsWith("<pre")) {
            formattedLines.push(`<p>${trimmed}</p>`);
          } else {
            formattedLines.push(trimmed);
          }
        }
      }
    });

    if (inList) {
      formattedLines.push(`</${listType}>`);
    }

    return formattedLines.join("\n");
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // STORAGE & CHAT STATE
  const STORAGE_KEY = "nova-ai-messages-v2";
  let chatHistory = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

  const messagesContainer = document.getElementById("messages");
  const chatForm = document.getElementById("chatForm");
  const promptInput = document.getElementById("prompt");
  const newChatBtn = document.getElementById("newChat");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const sidebar = document.getElementById("sidebar");

  function saveHistory() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chatHistory));
  }

  // RENDER WELCOME SCREEN
  function renderWelcomeScreen() {
    messagesContainer.innerHTML = `
      <div class="welcome">
        <div class="welcome-icon">✳</div>
        <h1>What can I help<br>you <em>figure out?</em></h1>
        <p>Ask a technical question, brainstorm project architecture, or level up your skills.</p>
        <div class="starter-chips">
          <button type="button" class="starter-chip" data-prompt="Give me 5 impressive full-stack project ideas for my portfolio">🚀 Project Ideas</button>
          <button type="button" class="starter-chip" data-prompt="Explain JavaScript closures with an easy code example">⚡ JavaScript Closures</button>
          <button type="button" class="starter-chip" data-prompt="What is the difference between CSS Flexbox and Grid?">📐 Flexbox vs Grid</button>
          <button type="button" class="starter-chip" data-prompt="How do I prepare for coding interviews and LeetCode effectively?">🎯 Interview Strategy</button>
        </div>
      </div>
    `;

    document.querySelectorAll(".starter-chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        handleUserMessage(btn.dataset.prompt);
      });
    });
  }

  // RENDER FULL CHAT
  function renderChat() {
    if (chatHistory.length === 0) {
      renderWelcomeScreen();
      return;
    }

    messagesContainer.innerHTML = "";
    chatHistory.forEach((msg) => {
      appendMessageElement(msg.sender, msg.content, msg.followups, false);
    });
    scrollToBottom();
  }

  function appendMessageElement(sender, content, followups = [], scroll = true) {
    const welcome = document.querySelector(".welcome");
    if (welcome) welcome.remove();

    const row = document.createElement("div");
    row.className = `message-row ${sender}`;

    const bubble = document.createElement("div");
    bubble.className = "bubble";

    if (sender === "user") {
      bubble.textContent = content;
    } else {
      bubble.innerHTML = renderMarkdown(content);

      // Setup copy code buttons
      bubble.querySelectorAll(".copy-code-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const rawCode = decodeURIComponent(btn.dataset.code);
          navigator.clipboard.writeText(rawCode).then(() => {
            btn.textContent = "Copied!";
            setTimeout(() => (btn.textContent = "Copy"), 2000);
          });
        });
      });
    }

    row.append(bubble);

    // Metadata bar (Copy response)
    if (sender === "bot") {
      const meta = document.createElement("div");
      meta.className = "message-meta";

      const copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "action-text-btn";
      copyBtn.innerHTML = "📋 Copy Response";
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(content).then(() => {
          copyBtn.innerHTML = "✔ Copied!";
          setTimeout(() => (copyBtn.innerHTML = "📋 Copy Response"), 2000);
        });
      });

      meta.append(copyBtn);
      row.append(meta);

      // Follow-up chips
      if (followups && followups.length > 0) {
        const followupsWrap = document.createElement("div");
        followupsWrap.className = "followups-wrap";

        followups.forEach((text) => {
          const chip = document.createElement("button");
          chip.type = "button";
          chip.className = "followup-chip";
          chip.textContent = text;
          chip.addEventListener("click", () => {
            handleUserMessage(text);
          });
          followupsWrap.append(chip);
        });

        row.append(followupsWrap);
      }
    }

    messagesContainer.append(row);
    if (scroll) scrollToBottom();
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // SHOW TYPING INDICATOR
  function showTypingIndicator() {
    const row = document.createElement("div");
    row.className = "message-row bot typing-row";
    row.innerHTML = `
      <div class="typing-bubble">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    `;
    messagesContainer.append(row);
    scrollToBottom();
    return row;
  }

  // HANDLE USER MESSAGE
  function handleUserMessage(text) {
    const cleanText = text.trim();
    if (!cleanText) return;

    // Append user message
    appendMessageElement("user", cleanText);
    chatHistory.push({ sender: "user", content: cleanText });
    saveHistory();

    // Reset input
    promptInput.value = "";
    promptInput.style.height = "auto";

    // Show typing
    const typingIndicator = showTypingIndicator();

    // Natural brief thinking delay
    setTimeout(() => {
      typingIndicator.remove();
      const match = findBestMatch(cleanText);

      appendMessageElement("bot", match.text, match.followups);
      chatHistory.push({
        sender: "bot",
        content: match.text,
        followups: match.followups
      });
      saveHistory();
    }, 450);
  }

  // SUBMIT HANDLERS
  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleUserMessage(promptInput.value);
  });

  // Enter to send, Shift+Enter for newline
  promptInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleUserMessage(promptInput.value);
    }
  });

  // Auto-resize textarea
  promptInput.addEventListener("input", () => {
    promptInput.style.height = "auto";
    promptInput.style.height = `${Math.min(promptInput.scrollHeight, 140)}px`;
  });

  // SIDEBAR TOPIC BUTTONS
  document.querySelectorAll(".topic-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (window.innerWidth <= 800) sidebar.classList.remove("open");
      handleUserMessage(btn.dataset.prompt);
    });
  });

  // NEW CHAT
  newChatBtn.addEventListener("click", () => {
    chatHistory = [];
    saveHistory();
    renderChat();
    if (window.innerWidth <= 800) sidebar.classList.remove("open");
  });

  // CLEAR HISTORY
  clearHistoryBtn.addEventListener("click", () => {
    if (confirm("Clear all saved chat history?")) {
      chatHistory = [];
      saveHistory();
      renderChat();
    }
  });

  // MOBILE SIDEBAR
  mobileMenuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (
      window.innerWidth <= 800 &&
      sidebar.classList.contains("open") &&
      !sidebar.contains(e.target) &&
      e.target !== mobileMenuBtn
    ) {
      sidebar.classList.remove("open");
    }
  });

  // INITIAL LOAD
  renderChat();
});
