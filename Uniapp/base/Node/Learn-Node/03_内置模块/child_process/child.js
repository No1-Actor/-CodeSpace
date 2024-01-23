process.on('message', (msg) => {
    console.log(`来自子进程的消息：${msg}`);  //向子进程发送消息
    process.send('hello from child')
})