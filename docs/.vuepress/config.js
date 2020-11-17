module.exports = {
    base: '/DuoDuo/',
    title: 'DuoDuo UI', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '一个好用的UI框架',// meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link',
            {rel: 'icon', href: '/D.png'}
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],
    ],
    themeConfig: {
        logo: '/D.png',//网页顶端导航栏左上角的图标
        //顶部导航栏
        nav: [
            //格式一：直接跳转，'/'为不添加路由，跳转至首页
            {text: '主页', link: '/'},

            {text: '文档', link: '/pages/install/README.md'},

            //格式三：跳转至外部网页，需http/https前缀
            {text: 'Github', link: 'https://github.com/DDB324/gulu'},
        ],
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    ['/pages/install/install','安装'],
                    ['/pages/get-started/getStarted','快速上手'],
                ]
            },

            {
                title: '组件',
                collapsable: false,
                children: [
                    ['/pages/components/button','Button-按钮'],
                    ['/pages/components/input','Input-输入框'],
                    ['/pages/components/grid','Grid-栅格'],
                    ['/pages/components/layout','Layout-布局'],
                    ['/pages/components/toast','Toast-弹出提示框'],
                    ['/pages/components/tabs','Tabs-标签'],
                    ['/pages/components/popover','Popover-弹出层'],
                    ['/pages/components/collapse','Collapse-折叠面板'],
                ],
            }
        ]
    }
}