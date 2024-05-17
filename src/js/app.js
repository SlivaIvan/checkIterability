/* eslint-disable no-console */
export default function canIterate(data) {
  return data?.[Symbol.iterator] instanceof Function;
}

console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate('Netology')); // true
