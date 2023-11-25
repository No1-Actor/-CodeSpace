// 把金数据的2000 数据 拿到的写法
const getJinData = async () => {
    let FID = 'TM8uOr'
    let res = []
    let count = 50
    let next = 0
    while(count == 50) {
        let url = `https://jinshuju.net/api/v1/forms/${FID}/entries?next=`
        if (next) {
            url = `${url}?next=${next}`
        }
        const rawData = await fetch(url, {
            headers: {
            //    ...
            }
        })
        const data = await rawData.json()
        count = data.count
        res = res.concat(data.data)
    }
}