// 动态规划
// 低买高卖
// 最低价格买入，最高的价格卖出  贪心算法
const maxProfit = function(prices) {
    // 流程 自顶向下 递归  
    // 当天卖 dp[i] = Math.max( price - min, dp[i-1])
    // 自下向上 迭代 dp[i] 最优子结构
        const dp = new Array(prices.length).fill(0) 
        let min = prices[0]
        for (let i = 1; i < prices.length; i++) {
            min = Math.min(prices[i - 1], min) // 取当前股票价格和前一天的最低价格的较小值
            dp[i] = Math.max(dp[i - 1], prices[i] - min) // 取当前最大利润和当前股票价格与前一天最低价格的差值的较大值
        }
        return dp[prices.length - 1] // 返回最后一天的最大利润
    }
    console.log(maxProfit([7,1,5,3,6,4]))