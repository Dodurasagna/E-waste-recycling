// src/lib/points.ts

export function getPoints(email: string): number {
  const raw = localStorage.getItem('userPointsByEmail');
  if (!raw) return 0;

  const allPoints = JSON.parse(raw);
  return allPoints[email] || 0;
}

export function addPoints(email: string, amount: number): number {
  const raw = localStorage.getItem('userPointsByEmail');
  const allPoints = raw ? JSON.parse(raw) : {};

  allPoints[email] = (allPoints[email] || 0) + amount;
  localStorage.setItem('userPointsByEmail', JSON.stringify(allPoints));
  return allPoints[email];
}
