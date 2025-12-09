<div align="center">

# ⏱️ Multi-Stopwatch Timer

**A sleek, powerful stopwatch app with keyboard shortcuts and dark mode**

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge)](https://johan.martinson.phd/stopwatch/)
[![Angular](https://img.shields.io/badge/Angular-19-red?style=for-the-badge&logo=angular)](https://angular.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

[Live Demo](https://johan.martinson.phd/stopwatch/) • [Report Bug](https://github.com/johmara/stopwatch/issues) • [Request Feature](https://github.com/johmara/stopwatch/issues)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🚀 Core Functionality
- ⏱️ **Unlimited Stopwatches** - Create as many as you need
- ✏️ **Custom Names** - Editable names for each timer
- 🔄 **Dual Time Formats** - Toggle between `123.45s` and `HH:MM:SS.MS`
- 🖱️ **Click to Toggle** - Click the timer to start/stop
- ⚙️ **Manual Time Editing** - Precise control with separate inputs

### ⌨️ Keyboard Shortcuts
- `Space` - Start/Stop all timers
- `R` - Relaunch all (fresh start)
- Custom keys for individual timers

</td>
<td width="50%">

### 📊 Organization & Export
- 🔀 **Drag-and-Drop** - Reorder stopwatches easily
- 📥 **CSV Export** - Download data for analysis
- 💾 **Auto-Save** - Never lose your data

### 🎨 UI/UX
- 🌓 **Light/Dark Theme** - System preference + manual toggle
- 👁️ **Hide Buttons Mode** - Minimal, distraction-free UI
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Clean Interface** - Focus on what matters

</td>
</tr>
</table>

---

## 🚦 Quick Start

### Basic Usage

```
1. Click "Add Stopwatch" to create a timer
2. Click the name to edit it
3. Click the time to start/stop
4. Click ✎ to manually edit time
5. Click × to remove
```

### Keyboard Shortcuts

| Action | Key |
|--------|-----|
| Start/Stop All | `Space` |
| Relaunch All | `R` |
| Custom Shortcut | Set in UI |

### Batch Operations

| Button | Action |
|--------|--------|
| **Add** | Create new stopwatch |
| **Start All** | Start all stopped timers |
| **Stop All** | Stop all running timers |
| **Relaunch All** | Clear everything and start fresh |
| **Clear All** | Remove all stopwatches *(when stopped)* |
| **Export to CSV** | Download data *(when stopped)* |

---

## 💻 Development

This project uses Angular 19 with TypeScript strict mode.

### Setup
```bash
npm install
npm start  # Runs dev server at http://localhost:4200
```

### Build
```bash
npm run build       # Production build
npm run watch       # Build with watch mode
```

### Project Structure
```
src/
├── app/
│   ├── app.component.ts    # Main component with stopwatch logic
│   ├── app.component.html  # Template
│   ├── app.component.css   # Component styles
│   └── app.module.ts       # Module configuration
├── styles.css              # Global styles with theme variables
└── index.html              # Entry point
```

### Key Technologies
- **Angular 19**: Module-based architecture (not standalone)
- **TypeScript**: Strict mode with explicit types
- **CSS Variables**: For light/dark theme switching
- **LocalStorage**: For data persistence
- **HTML5 Drag-and-Drop**: For stopwatch reordering

## Deployment

The application automatically deploys to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

- **Live URL**: https://johan.martinson.phd/stopwatch/
- **Base href**: `/stopwatch/` for GitHub Pages routing
- **Build budgets**: 500kb/1mb initial, 20kb/40kb per component style

## Browser Compatibility

Works in all modern browsers with localStorage and CSS custom properties support:
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
