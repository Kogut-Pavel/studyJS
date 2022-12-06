let num = 266219;
let str = '';

str = num.toString().split('');

let res = 1;
for (let i = 0; i < str.length; i++) {
    res *= +str[i];
}

res = res ** 3;
res = res.toString().split('');

console.log(+res[0], +res[1]);