// 贪心 
// 在对问题求解时，总是做出在当前看来是最好的选择。
// 不从整体最优上加以考虑，算法得到的是局部最优解。

function  maxProfit(prices) {
    let min = prices[0]
    let profit = 0
    for (let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i - 1]) {
            profit = Math.max(profit[i] - min, profit) // 求最大利润
        } else {
            min = Math.min(min, prices[i]) // 求最小价格
        }
    }
    return profit
}