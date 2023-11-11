global.gc() // 强制执行垃圾回收
console.log(process.memoryUsage());     // 计算node内存占用情况

// {
//     rss: 31879168,
//     heapTotal: 7225344,
//     heapUsed: 4505696,
//     external: 422797,
//     arrayBuffers: 16726
//   }
