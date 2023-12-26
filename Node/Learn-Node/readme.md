# 模块化
- window: 遵照ECMAScript标准, export || export default 抛出， import 引入
- node: 遵照CommonJS标准, module.exports || exports 抛出, require 引入
  (node 现在也兼容了ECMAScript标准)

# 内置模块
1. 全局的对象: global, __filename, __dirname, process
2. path 
3. fs
4. util
5. https / http
6. child_process (js是单线程的，但node可以开辟多个进程，每个进程跑一个js线程，也同样可以实现多任务并行处理)
  