const a = [1, 2, 3, 4, 5];
const b = [1, 2, 3, 4];

const d = new Set(a);
const e = new Set(b);

console.log([...d].filter((el) => !e.has(el)));
