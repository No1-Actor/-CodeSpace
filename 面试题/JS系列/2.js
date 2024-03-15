let s = 'abcdefgc  '
let h = '123'

let g = s.concat(h)
let g1 = s.padStart(s, h)

let g2 = s.substring(2, 5)

// let g3 = s.replace('c', '0')
// let g3 = s.replace(/c/g, '0')
// let g3 = s.repeat(2)
// let g3 = s.trim(s, '--')

let g5 = s.split('c')

console.log(s, h, g, g1);
console.log(g2);
// console.log(g3);
console.log(g5);