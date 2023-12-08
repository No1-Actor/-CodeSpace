# vue 网易云音乐

- 界面
    npm init vite 开发脚手架
    :5173
- 后台
    netsea 
    :3000 
- 前后端分离全栈开发
- npm 换源
    npm config set registry https://registry.npmmirror.com
- npm i -D 开发阶段 devDependencies
- tailwindcss 60% css 开发 原子化css开发
    - npm i -D tailwindcss postcss autoprefixer
    - npx tailwindcss init -p 初始化工作
        npx 执行安装或未安装的包
    - 声明开发目录下所有层级中 .vue等格式文件支持tailwindcss
    - tailwind.css
       可以使用tailwind 类名
- 切页面
- 组件化思维
    - 根组件 App.vue
    - layout 组件
        - Menu
- vite.config.js 是 vite 工程化的配置文件
    - alias 短路径
       @ -> ./src 回城