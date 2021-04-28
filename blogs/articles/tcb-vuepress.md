本文由贝壳找房的前端工程师刘成帅（Jacob）带来，文中介绍了如何运用云开发CloudBase，免服务器、免域名快速搭建个人站点的方式。一起学习吧~
前言
最近笔者在复习 JavaScript 基础知识，刚看完 《JavaScript 高级程序设计（第四版）》，想再找一些优秀代码库巩固一下学到的内容，自然而然的就想到了 Lodash。

此库在笔者公司使用率极高，因此想深入研究下源码并输出系列分析文章。而线上大多源码分析大多都是自己搭建的文档网站，于是就到了这篇文章的主题，快速搭建一个文档网站。

其实笔者是有一个服务器的，但是服务器确实带宽有限，再加上还得自己配置 NGINX、GitHub Action 以及 https 证书等内容。

很巧看到了云开发 CloudBase 服务，可以快速搭建静态网站，如果你没有域名的话会自动分配一个域名，也可以很方便地申请并配置 https 证书，如果搭配 GitHub Action 使用的话可以说是完全不用考虑服务器维护的内容了。

接下来就来讲一下如何搭建以及部署。

搭建及部署
本文是以 VuePress 为例进行搭建部署，VitePress、Next、Docsify 等部署大同小异。

项目初始化
安装 CLI
npm install -g @cloudbase/cli@latest
初始化一个应用
tcb new cloudbase-test vuepress
使用该 CLI 是需要进行登录的，如果 CLI 检测到你当前没有登录的话会自动打开浏览器跳转到腾讯云登录页面，登录成功后返回命令行，继续下一步操作：

接下来选择你认为合适的一个服务器地点，在这里我选择上海。

图片

接下来会选择关联环境，如果你当前没有环境的话可直接选择「创建新环境」，CLI 会自动打开浏览器跳转到「创建新环境」页面，创建新环境如下图，在这里我选择使用 VuePress 模板进行创建：

图片

选择完成后点击下一步即可：

图片

图片

创建成功后返回命令行，会显示正在初始化环境，稍等几分钟就可以直接创建项目。创建成功后会生成以下目录结构的项目：

├── README.md
├── cloudbaserc.json
├── guides
│   └── README.md
└── package.json
项目部署
安装依赖
npm i
构建部署
npm run deploy
部署成功
执行 npm run deploy 稍等片刻之后即可部署成功，命令行会返回一个访问域名，笔者的为：
https://cloudbase-test-9gccjnk3e393c02a-1256377994.tcloudbaseapp.com/vuepress/ ，点击即可访问示例网站，如下：
图片

到这里为止，其实部署工作就算是结束了，无需自己配置 NGINX 等复杂繁琐的操作，这就是云服务的魅力，同时该服务按量计费，对于笔者来说费用可以说是非常低了。

但是，仅此还不够，我们要配置 GitHub Action 之后，才能算完全放手部署这件事，做到完全自动化，将日常工作精力专注于文档编写就可以了。

GitHub Action 配置
如果初始化了一个项目的话，会看到项目中有一个 cloudbaserc.json 文件，该文件为 CloudBase 配置文件，文件中有一个 envId 配置项，这属于敏感信息，请注意千万不要上传到 GitHub 中，将该配置信息从 cloudbaserc.json 中删除！

既然不能上传的话，我们应该如何配置呢，答案很简单，使用 GitHub secret 即可。需要在 腾讯云控制台 新建秘钥，新建完成后，打开你的 GitHub 仓库进行如下设置：

图片

创建 ENVID、SECRETID、SECRETKEY 三条 secret，其中 ENVID 在 应用列表中可见，配置完成后如下所示：

图片

接下来在项目的 .github/workflows 目录下创建 deploy.yml 文件，内容如下：

name: 自动化部署

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    name: deploy
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Deploy to Tencent CloudBase
        uses: TencentCloudBase/cloudbase-action@v2
        with:
          secretId: ${{ secrets.SECRETID }}
          secretKey: ${{ secrets.SECRETKEY }}
          envId: ${{ secrets.ENVID }}
然后将你的项目代码 push 到 GitHub 就可以完成自动化部署了，之后就可以专心进行文档编写，无需关心服务器维护这样的事情了。

图片

快乐搬砖~
总结
像云开发CloudBase 这样的云服务可以说真的方便了很多，可以直接部署自己的静态博客或者文档等站点，一键部署，无需运维，岂不美哉。

前面说到笔者最近正在写 lodash 源码解析，地址是 lodash.lcs.show。

GitHub 地址为 https://github.com/jacob-lcs/lodash-source-code-analysis，当然还处于刚开始的阶段，大家有兴趣的话欢迎关注~

点击文末阅读原文直达云开发控制台，开始一键部署丰富应用。