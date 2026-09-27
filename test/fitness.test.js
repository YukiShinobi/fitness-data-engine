import test from 'node:test';
import assert from 'node:assert/strict';
import { averagePace, formatPace, movingAverage, streak, workoutVolume } from '../src/index.js';

test('calculates lifting volume', () => {
  assert.equal(workoutVolume([{ weight: 100, reps: 5 }, { weight: 80, reps: 10 }]), 1300);
});

test('formats running pace', () => {
  assert.equal(formatPace(averagePace(5, 1500)), '5:00/km');
});

test('detects a consecutive streak', () => {
  assert.equal(streak(['2026-09-27','2026-09-26','2026-09-25']), 3);
});

test('moving average uses partial windows at the start', () => {
  assert.deepEqual(movingAverage([2, 4, 6, 8], 3), [2, 3, 4, 6]);
});
