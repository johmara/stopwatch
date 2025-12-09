# Multi-Stopwatch Timer

A web-based stopwatch application built with Angular 19 that allows you to manage unlimited stopwatches simultaneously with keyboard shortcuts, drag-and-drop reordering, and manual time editing.

🔗 **Live Demo**: https://johan.martinson.phd/stopwatch/

## Features

### Core Functionality
- **Unlimited Stopwatches**: Create and manage as many stopwatches as you need
- **Custom Names**: Editable names for each stopwatch
- **Time Display Formats**: Toggle between seconds (123.45s) and HH:MM:SS.MS format
- **Click to Start/Stop**: Click the timer to toggle without using buttons
- **Manual Time Editing**: Edit time with separate inputs for hours, minutes, seconds, centiseconds

### Keyboard Shortcuts
- **Space**: Start/Stop all timers simultaneously
- **R**: Relaunch all (clear and restart with one new stopwatch)
- **Custom Shortcuts**: Assign individual keys to each stopwatch

### Organization & Export
- **Drag-and-Drop**: Reorder stopwatches by dragging
- **Shortcut Display**: Shows keyboard shortcuts even in minimal mode
- **CSV Export**: Export all stopwatch data when all timers are stopped
- **Auto-Save**: All data persists to browser localStorage

### UI/UX
- **Light/Dark Theme**: Toggle with button in top-right corner
- **Hide Buttons Mode**: Minimal UI showing only names, times, and shortcuts
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Clean Interface**: No unnecessary icons, focus on functionality

## Usage

### Basic Operations
1. Click "Add Stopwatch" to create a new stopwatch
2. Click the stopwatch name to edit it
3. Click the time to start/stop
4. Click the ✎ icon to manually edit time (click again to save)
5. Click × to remove a stopwatch

### Keyboard Shortcuts
1. Click "Set Key" to assign a custom shortcut
2. Press any key when prompted
3. Use your assigned key to toggle that stopwatch
4. Global shortcuts work from anywhere: Space (Start/Stop All), R (Relaunch)

### Batch Operations
- **Add**: Create new stopwatch
- **Start All**: Start all stopped timers
- **Stop All**: Stop all running timers
- **Relaunch All**: Clear everything and start fresh
- **Clear All**: Remove all stopwatches (when all stopped)
- **Export to CSV**: Download data (when all stopped)

## Development

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

## License

MIT
