const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs');

https.get('https://movie.douban.com/top250', (res) => {
    let html = '';

    res.on('data', (chunk) => { // 监听数据读取
        html += chunk;
        })

        res.on('end', () => { // 监听数据读取完毕
            const $ = cheerio.load(html); // 将html字符串转换成可以操作的DOM结构
            let result = []; // 定义一个空数组，用于存放电影数据

            $('li .item').each(function() { // 遍历DOM结构，获取电影数据
                const title = $('.info .title', this).text(); // 获取电影名称
                const star = $('.info .bd .rating_num', this).text(); // 获取电影评分
                const pic = $('.pic img', this).attr('src'); // 获取电影图片属性
                const item = {
                    title,
                    star,
                    pic,
                };

                result.push(item); // 将电影数据添加到数组中
            })
            console.log(result); // 打印电影数据
            fs.writeFile('./list.json', JSON.stringify(result), (err, data) => { // 将电影数据写入文件
                if (err) {
                    throw err;
                } else {
                    console.log('文件写入成功');
                }
            })
        })
    })