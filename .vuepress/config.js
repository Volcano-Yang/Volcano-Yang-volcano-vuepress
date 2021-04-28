const moment = require('moment')
module.exports = {
  "title": "杨灿就是杨火山",
  "description": "",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      },
      "socialLinks": [     // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/Volcano-Yang' },
        { icon: 'reco-juejin', link: 'https://www.npmjs.com/~reco_luan' },
        { icon: 'reco-csdn', link: 'https://www.npmjs.com/~reco_luan' },
        { icon: 'reco-zhihu', link: 'https://www.npmjs.com/~reco_luan' },
        { icon: 'reco-wechat', link: 'https://www.npmjs.com/~reco_luan' },
        { icon: 'reco-mail', link: 'https://www.npmjs.com/~reco_luan' },
      ]
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Volcano-Yang",
    "authorAvatar": "/avatar.jpeg",
    "record": "粤ICP备20006742号",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  },
//   plugins: [
//     // 自动生成侧边栏的插件
//     [
//         'vuepress-plugin-auto-sidebar', {
//             collapse: {
//                 open: true
//             }
//         }
//     ],
//     // 文章最后更新时间转换
//     [
//         '@vuepress/last-updated',
//         {
//             transformer: (timestamp, lang) => {
//                 moment.locale(lang)
//                 return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
//             }
//         }
//     ],
//     [
//         "dynamic-title",
//         {
//             // Icon 建议根据自身需求选择
//             showIcon: "/favicon.ico",
//             showText: "",
//             hideIcon: "/failure.ico",
//             hideText: "(●—●)不要走啊，再看看！",
//             recoverTime: 2000
//         }
//     ],
//     // 复制代码功能
//     [
//         "vuepress-plugin-nuggets-style-copy",
//         {
//             copyText: "复制代码",
//             tip: {
//                 content: "复制成功!"
//             }
//         }
//     ],
//     // 音乐播放器
//     [
//         'meting', {
//             meting: {
//                 // 网易
//                 server: "netease",
//                 // 读取歌单列表
//                 type: "playlist",
//                 mid: "网易云歌单id",
//             },
//             // 不配置该项的话不会出现全局播放器
//             aplayer: {
//                 // 吸底模式
//                 fixed: true,
//                 mini: true,
//                 // 自动播放
//                 autoplay: true,
//                 // 歌曲栏折叠
//                 listFolded: true,
//                 // 颜色
//                 theme: '#f9bcdd',
//                 // 播放顺序为随机
//                 order: 'random',
//                 // 初始音量
//                 volume: 0.1,
//                 // 关闭歌词显示
//                 lrcType: 0
//             },
//             mobile: {
//                 // 手机端去掉cover图
//                 cover: false,
//             }
//         }
//     ],
//     // 看板娘
//     [
//         '@vuepress-reco/vuepress-plugin-kan-ban-niang',
//         {
//             clean: true
//         }
//     ]
// ]
}