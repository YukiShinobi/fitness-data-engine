export function workoutVolume(sets = []) {
  return sets.reduce((sum, set) => sum + Number(set.weight ?? 0) * Number(set.reps ?? 0), 0);
}

export function averagePace(distanceKm, seconds) {
  if (distanceKm <= 0 || seconds <= 0) return null;
  return seconds / distanceKm;
}

export function formatPace(secondsPerKm) {
  if (!Number.isFinite(secondsPerKm)) return '—';
  const minutes = Math.floor(secondsPerKm / 60);
  const seconds = Math.round(secondsPerKm % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}/km`;
}

export function streak(logDates = []) {
  const days = [...new Set(logDates.map(value => new Date(value).toISOString().slice(0, 10)))].sort().reverse();
  if (!days.length) return 0;
  let count = 1;
  for (let i = 1; i < days.length; i += 1) {
    const previous = new Date(`${days[i - 1]}T00:00:00Z`);
    const current = new Date(`${days[i]}T00:00:00Z`);
    if ((previous - current) / 86400000 !== 1) break;
    count += 1;
  }
  return count;
}

export function movingAverage(values, window = 7) {
  return values.map((_, index) => {
    const slice = values.slice(Math.max(0, index - window + 1), index + 1);
    return Number((slice.reduce((a, b) => a + b, 0) / slice.length).toFixed(2));
  });
}

export function percentChange(from, to) {
  if (from === 0) return null;
  return Number((((to - from) / Math.abs(from)) * 100).toFixed(2));
}

export function goalProgress(current, target, direction = 'up') {
  if (direction === 'down') {
    const start = Number(arguments[3] ?? current);
    if (start === target) return 100;
    return Math.max(0, Math.min(100, Math.round(((start - current) / (start - target)) * 100)));
  }
  return target <= 0 ? 0 : Math.max(0, Math.min(100, Math.round((current / target) * 100)));
}

export function trainingLoad(sessions = []) {
  return sessions.reduce((sum, session) => sum + Number(session.minutes ?? 0) * Number(session.intensity ?? 1), 0);
}
