const https = require('https')

const url = new URL('https://www.fastmock.site/mock/39ac87de3060aa2bb2ba20a0ff375c81/cat-movie/mostLike')

// console.log(url);

const req = https.request(
{
    method: 'GET',
    // port: 80,
    hostname: url.hostname,
    path: url.pathname + url.searchParams,
},
res => {
    let content = ''
    res.on('data', (chunk) => {
        content += chunk
    })
    res.on('end', () => {
        // console.log(content)
        console.log(res.statusCode);
    })
})