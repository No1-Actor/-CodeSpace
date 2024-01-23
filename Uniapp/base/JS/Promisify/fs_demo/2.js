// fs 读取文件
// promise + then / async + await 解决方案
const fs = require('fs') // 引入fs模块

function readFileByPromise(filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, 'utf-8', (err, data) => {
			if (err) reject(err)
			resolve(data)
		})
	})
}

(async function() {
	try{
    const f1 = await readFileByPromise('./a.txt')
	const f2 = await readFileByPromise('./b.txt')
	const f3 = await readFileByPromise('./c.txt')
	console.log(f1, f2, f3)
    }catch(e){
        console.log(e);
    }   
    })()
