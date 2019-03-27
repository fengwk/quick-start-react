# 工程结构
```
│  .babelrc                         // babel插件配置
│  .editorconfig                    // 用于约定项目格式,需要配合支持改插件的编辑器一同使用,如webstorm
│  .gitignore                       // git忽略配置
│  package.json                     // 用于指定当前项目的版本描述等信息、可执行脚本、依赖库与其版本信息等
│
├─build                             // 配置目录
│      public.ejs                   // 这个文件是html模板,打包后会生成相应的.html文件
│      webpack.config.js            // 通用webpack配置
│      webpack.config.study.js      // 各项目具体的webpack配置,约定使用webpack.config.项目名称.js来命名
│
└─src                               // 源码目录
    └─study                         // study项目的文件写在这个目录下
            index.js                // study项目的入口文件
```

# 启动项目
```
# 需要先下载安装node环境
# http://nodejs.cn/

# 克隆项目
git clone 项目url

# 安装依赖包
npm install

# 运行项目
npm run dev

# 在浏览器中打开
# http://localhost:8888
```
