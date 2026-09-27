<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&height=200&text=FITNESS%20DATA%20ENGINE&fontAlignY=38&desc=VOLUME%20%E2%80%A2%20PACE%20%E2%80%A2%20STREAKS&descAlignY=58&color=0:050505,55:202020,100:5a1616&fontColor=f5f5f5&descColor=d4d4d4" width="100%" />

![Analytics](https://img.shields.io/badge/focus-fitness%20analytics-111111?style=for-the-badge)
![Node](https://img.shields.io/badge/Node.js-20%2B-2b2b2b?style=for-the-badge&logo=nodedotjs)
![Tests](https://img.shields.io/badge/tests-node:test-7a1f1f?style=for-the-badge)

**A focused analytics library for fitness calculations without UI or product state around it.**

</div>

---

## Includes

- lifting volume (`weight × reps`)
- running pace calculation and formatting
- consecutive-day streaks
- rolling moving averages
- percentage change
- goal-progress helpers
- session training-load totals
- automated tests

## Why it exists

I wanted the fitness calculations themselves isolated and easy to verify. This repository is separate from my larger fitness-product work and does not share product code with it.

## Example

```js
import { workoutVolume, averagePace, formatPace } from './src/index.js';

console.log(workoutVolume([
  { weight: 80, reps: 8 },
  { weight: 80, reps: 8 },
  { weight: 80, reps: 6 }
]));

console.log(formatPace(averagePace(5, 1500)));
```

## Test

```bash
npm test
```

Requires Node 20+. No runtime dependencies.

---

<div align="center"><sub>YukiShinobi // calculate first, visualise second.</sub></div>
