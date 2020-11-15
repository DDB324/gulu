module.exports = {
    base:'/gulu/',
    title: 'Gulu UI',
    description: '一个好用的UI框架',
    themeConfig: {
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },

            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/tabs',
                    '/components/popover',
                    '/components/collapse',
                ],
            }
        ]
    }
}