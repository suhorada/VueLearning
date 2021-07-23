export function setLS (key, value) { localStorage.setItem(String(key), JSON.stringify(value)) }
export function getLS (key) { return JSON.parse(localStorage.getItem(String(key))) }
export function removeLS (key) { localStorage.removeItem(key) }
