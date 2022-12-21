const arr = ['43242', '24523', '6435435', '1984370', '4087984', '75765', '0877697'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '2' || arr[i][0] === '4') {
        console.log(arr[i]);
    }
}
// Не получилось вывести двойку
for (let i = 0; i < 100; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            break;
        }
        else if (j === i - 1) {
            console.log(`Делители этого числа: 1 и ${i}`);
        }

    }

}

// С выводом двойки
// let n = 100;
//
// nextPrime:
//     for (let i = 2; i <= n; i++) {
//
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 continue nextPrime;
//             }
//         }
//         console.log(`${i}: Простое число. Делители этого числа: 1 и ${i}`);
//     }