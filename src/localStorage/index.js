export function setLS (key, value) {
  localStorage.setItem(String(key), JSON.stringify(value))
}
