const fork = require('child_process').fork;

const child = fork('child.js');  //创建子进程

child.on('message', (msg) => {  //监听子进程发送的消息
    console.log(`来自子进程的消息：${msg}`);
})  

child.send('来自父进程的消息');  //向子进程发送消息`