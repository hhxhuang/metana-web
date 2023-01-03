export function isObjectEmpty(obj) {
  for (const k in obj) return false;
  return true;
}