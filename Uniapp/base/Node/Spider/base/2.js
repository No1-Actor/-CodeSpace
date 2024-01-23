// console.log(process.argv[process.argv.length - 1]);

let player = process.argv[process.argv.length - 1];

// 电脑生成一个
let arr = ['石头', '剪刀', '布'];
let index = Math.floor(Math.random() * 3);
let computer = arr[index];

// 比较
if (player == computer) {
    console.log('平局');
} else if (
    (player == '石头' && computer == '剪刀') ||
    (player == '剪刀' && computer == '布') ||
    (player == '布' && computer == '石头')
) {
    console.log('你赢了');
} else {
    console.log('你输了');
}
