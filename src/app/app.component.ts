import { Component, HostListener, OnInit } from '@angular/core';

interface Stopwatch {
  id: number;
  name: string;
  time: number;
  isRunning: boolean;
  intervalId?: any;
  shortcutKey?: string;
}

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  stopwatches: Stopwatch[] = [
    { id: 1, name: 'Stopwatch 1', time: 0, isRunning: false }
  ];

  editingShortcut: number | null = null;

  ngOnInit() {
    // Load saved stopwatches from localStorage
    const saved = localStorage.getItem('stopwatches');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.stopwatches = parsed.map((sw: Stopwatch) => ({
          ...sw,
          isRunning: false,
          intervalId: undefined
        }));
      } catch (e) {
        console.error('Failed to load stopwatches', e);
      }
    }
  }

  addStopwatch() {
    if (this.stopwatches.length < 20) {
      const newId = this.stopwatches.length > 0 
        ? Math.max(...this.stopwatches.map(sw => sw.id)) + 1 
        : 1;
      this.stopwatches.push({ 
        id: newId, 
        name: `Stopwatch ${newId}`, 
        time: 0, 
        isRunning: false 
      });
      this.saveToLocalStorage();
    }
  }

  removeStopwatch(id: number) {
    const stopwatch = this.stopwatches.find(sw => sw.id === id);
    if (stopwatch?.intervalId) {
      clearInterval(stopwatch.intervalId);
    }
    this.stopwatches = this.stopwatches.filter(sw => sw.id !== id);
    this.saveToLocalStorage();
  }

  toggleStopwatch(id: number) {
    const stopwatch = this.stopwatches.find(sw => sw.id === id);
    if (!stopwatch) return;

    if (stopwatch.isRunning) {
      if (stopwatch.intervalId) {
        clearInterval(stopwatch.intervalId);
      }
      stopwatch.isRunning = false;
      stopwatch.intervalId = undefined;
    } else {
      stopwatch.intervalId = setInterval(() => {
        stopwatch.time += 10;
      }, 10);
      stopwatch.isRunning = true;
    }
  }

  resetStopwatch(id: number) {
    const stopwatch = this.stopwatches.find(sw => sw.id === id);
    if (!stopwatch) return;

    if (stopwatch.intervalId) {
      clearInterval(stopwatch.intervalId);
    }
    
    stopwatch.time = 0;
    stopwatch.isRunning = false;
    stopwatch.intervalId = undefined;
    this.saveToLocalStorage();
  }

  updateName(id: number, name: string) {
    const stopwatch = this.stopwatches.find(sw => sw.id === id);
    if (stopwatch) {
      stopwatch.name = name;
      this.saveToLocalStorage();
    }
  }

  startEditingShortcut(id: number) {
    this.editingShortcut = id;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    // If editing shortcut, capture the key
    if (this.editingShortcut !== null) {
      event.preventDefault();
      const key = event.key.toLowerCase();
      
      const stopwatch = this.stopwatches.find(sw => sw.id === this.editingShortcut);
      if (stopwatch) {
        stopwatch.shortcutKey = key;
        this.saveToLocalStorage();
      }
      
      this.editingShortcut = null;
      return;
    }

    // Check if any stopwatch has this shortcut
    const stopwatch = this.stopwatches.find(sw => sw.shortcutKey === event.key.toLowerCase());
    if (stopwatch) {
      event.preventDefault();
      this.toggleStopwatch(stopwatch.id);
    }
  }

  clearShortcut(id: number) {
    const stopwatch = this.stopwatches.find(sw => sw.id === id);
    if (stopwatch) {
      stopwatch.shortcutKey = undefined;
      this.saveToLocalStorage();
    }
  }

  startAll() {
    this.stopwatches.forEach(sw => {
      if (!sw.isRunning) {
        this.toggleStopwatch(sw.id);
      }
    });
  }

  stopAll() {
    this.stopwatches.forEach(sw => {
      if (sw.isRunning) {
        this.toggleStopwatch(sw.id);
      }
    });
  }

  resetAll() {
    this.stopwatches.forEach(sw => {
      if (sw.intervalId) {
        clearInterval(sw.intervalId);
      }
      sw.time = 0;
      sw.isRunning = false;
      sw.intervalId = undefined;
    });
    this.saveToLocalStorage();
  }

  clearAll() {
    this.stopwatches.forEach(sw => {
      if (sw.intervalId) {
        clearInterval(sw.intervalId);
      }
    });
    this.stopwatches = [];
    this.saveToLocalStorage();
  }

  exportToCSV() {
    const headers = ['Name', 'Time (ms)', 'Time (formatted)', 'Shortcut Key'];
    const rows = this.stopwatches.map(sw => [
      sw.name,
      sw.time.toString(),
      this.formatTime(sw.time),
      sw.shortcutKey || 'None'
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `stopwatches-${new Date().toISOString()}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  }

  formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  }

  private saveToLocalStorage() {
    const toSave = this.stopwatches.map(sw => ({
      id: sw.id,
      name: sw.name,
      time: sw.time,
      isRunning: false,
      shortcutKey: sw.shortcutKey
    }));
    localStorage.setItem('stopwatches', JSON.stringify(toSave));
  }
}
