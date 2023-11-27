# 搜索

- 项目亮点
    搜索比较难，可以在面试的时候讲出来
- 全栈
    - 前端  防抖和节流
    - 后端
        - SQL posts LIKE `%${keyword}`
        - 各种数据放入hadoop flink
        - Elastic Search    node
    - AIGC

- 数据?
    - python 爬虫
    - AIGC 生成数据
        get_response
        prompt 电商平台 手机 50 条

## 数据清洗
- pandas 来处理aigc 生成的text 文本
    - split('\n') 按换行符切割
    - pandas 提供了DataFrame 实例
        pd.DataFrame({})  column_name
    - pd.head()
        默认给5条

- 文本 如何转变向量 数学表达 openai 提供embedding 接口
    cosine 值

- openai Completion \ chat \ embedding
- embedding
    openai 的新接口
    查询 keyword + 数据 都进行向量运算
    consine_smilarity 两个向量间的相似度 -> 0 相同, 或相似的
    相反的话 负值