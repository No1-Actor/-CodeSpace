// 给banner 接口建立一个接口
// 接口 :3000/banner -> store -> component
// 接口 类java等强类型的接口定义 vuex 使用ts 类型检测
// 模型接口
export interface Banner {
    // 数据表
    pic: string;
    targetId: number;
    targeType: number;
    typeTitle: string;
    bannerId: number;
}
// 跟vuex 一道,把数据严谨再严谨
// let banner:Banner = {
//     pic:'abc'
// }

