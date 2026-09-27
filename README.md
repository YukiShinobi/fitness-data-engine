# Fitness Data Engine

A small analytics library for fitness data: lifting volume, cardio pace, streaks, moving averages, training load and goal progress.

This repo is intentionally separate from my main fitness product work. I wanted a clean place to model the calculations themselves without UI, auth or product state around them.

## Includes

- lifting volume (`weight × reps`)
- average running pace and pace formatting
- consecutive-day streak calculation
- rolling moving averages
- percentage change
- goal progress helpers
- simple session training-load totals

```js
import { workoutVolume, averagePace, formatPace } from './src/index.js';

console.log(workoutVolume([
  { weight: 80, reps: 8 },
  { weight: 80, reps: 8 },
  { weight: 80, reps: 6 }
]));

console.log(formatPace(averagePace(5, 1500)));
```

Requires Node 20+. No runtime dependencies.
