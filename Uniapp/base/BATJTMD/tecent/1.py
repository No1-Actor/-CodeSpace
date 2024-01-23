import openai
openai.api_key = "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"
COMPLETION_MODEL = "text-davinci-003" #模型常量 达芬奇 完成
# 字符串模版
# 换行
# 描述细节需求
# 分布去执行
# 输出的格式    
prompt = """
Consideration product:工厂现货PVC充气青蛙夜市地摊热卖充气玩具发光娃儿童水上玩具

1.Compse human readable product title used on Amazon in english within 20 words
2.Write 5 selling points for the products in Amazon
3.Evaluat a price range for this product in U.S.

Output the result in json format with three properties called title, selling_points and price_range
"""
# 定义函数
def get_response(prompt):
    completions = openai.Completion.create(
        # 大模型很值钱
        engine = COMPLETION_MODEL, # 模型
        prompt = prompt, # 提示词
        max_tokens = 512, # 算力省点
        n = 1, # 打印1条
        stop = None, # 不停止下来
        temperature = 0.0 # 自由发挥度 0-2 不正常发挥
    )
    print(completions)
    message = completions.choices[0].text #
    return message

print(get_response(prompt))

# {
#     title: "",
#     selling_points: "",
#     price_range: ""
# }