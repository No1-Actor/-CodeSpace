// commonjs
const game = require('./game.js')

var winCount = 0
// node 内置的process进程对象。document
process.stdin.on('data', (buffer) => {  // 命令行输入的时候
    // console.log(buffer);
    const action = buffer.toString().trim() // buffer.toString()将buffer转换为字符串
    // console.log(action);
    const result = game(action)

    if(result == 1){
        winCount++
        console.log('你赢了，当前得分：' + winCount);
        if(winCount == 3){
            console.log('游戏结束，感谢游玩！')
            process.exit()
        }
    }
})
