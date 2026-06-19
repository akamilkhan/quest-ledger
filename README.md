# ⚔️ Quest Ledger — Co-Op Budget RPG

Quest Ledger is a gamified, co-operative budgeting Progressive Web Application (PWA) designed like a multiplayer Role-Playing Game (RPG). It turns financial tracking into cooperative quests where players manage spending together to maintain "Budget HP", gain "XP", level up, and unlock achievements.

The entire application is self-contained in a single, high-fidelity HTML file: [index.html](file:///d:/repos/quest-ledger/index.html).

---

## 🎮 RPG & Gamification Features

- **❤️ Category HP Bars**: Monthly budget categories (e.g., Housing, Groceries, Dining out) act as player/party HP. Spending money deals "damage" to that category's HP bar. Reaching limit thresholds or going over budget triggers critical states and changes visual themes.
- **✨ XP & Levels**: Logging expense quests awards XP to the respective player. Accumulating XP levels up players and builds overall co-op **Synergy** levels.
- **🔥 Daily Logging Streak**: Tracks daily tracking consistency, granting XP multipliers to players who stay active.
- **🏆 Co-Op Leaderboard & Party Stats**: Showcases individual logging statistics, total savings, and contribution ranks.
- **⚡ Weekly Challenges**: Cooperative spending challenges that reward the group when savings goals are met.
- **🏅 Achievements & Titles**: Unlocks badges (e.g., "Budget Warrior", "Ascetic Hero") and dynamic player titles based on financial milestones.

---

## 🚀 Advanced Features

- **🎙️ Voice Expense Input**: Allows natural speech transaction entry (using the Web Speech API) to parse descriptions and amounts on-the-fly (e.g., *"coffee 250"* or *"groceries 1500 at metro"*).
- **🔮 What-If Simulator**: Predicts financial futures by letting players simulate adjustments to budgets, savings rates, and milestone completion dates.
- **📅 Time Machine & Replay**: Navigate across historical months to view changes, compare Month-over-Month (MoM) metrics, and watch an animated replay of cumulative trends.
- **📥 Data Vault**: Support for offline JSON and CSV exports/imports, with built-in multi-step undo and redo capabilities.

---

## 🛠️ Technology Stack

- **Frontend**: Single-file layout using semantic HTML5 and Vanilla CSS (supporting dynamic light/dark modes).
- **Charts**: Interactive data visualization powered by [Chart.js](https://www.chartjs.org/).
- **PWA Capabilities**: Fully offline-functional service worker registered inline via a `Blob` URL and a data-URI manifest.
- **Sync Engine**: Real-time cloud sync with Firebase Firestore and anonymous Authentication. Supports Firestore offline persistence for offline-to-online reconciliation.
- **Audio Effects**: Sound effects synthesised dynamically using the Web Audio API (no external asset downloads required).

---

## 🏁 Getting Started

### 1. Opening the App
Because Quest Ledger is built as a single-page app, you can run it in two ways:
* **Double-click**: Open [index.html](file:///d:/repos/quest-ledger/index.html) directly in any modern web browser.
* **Local Development Server**: To test PWA features and service worker caching properly, run a local server (e.g., using `npx serve` or Live Server extension).

### 2. Configuration & Firebase Sync
Cloud sync is configured by default using Firebase credentials. If you wish to configure your own database:
1. Open [index.html](file:///d:/repos/quest-ledger/index.html).
2. Locate the `firebaseConfig` object inside the `<script>` block.
3. Replace the placeholder fields with your own Firebase/Firestore credentials.
