import Vue from 'vue'
import Button from "./Button/Button";
import ButtonGroup from './Button/Button-group'
import Cascader from "./Cascader/Cascader";
import Col from "./Grid/Col";
import Collapse from "./Collapse/Collapse";
import CollapseItem from "./Collapse/Collapse-item";
import Content from "./Layout/Content";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Icon from "./Icon/Icon";
import Input from "./Input/Input";
import Layout from "./Layout/Layout";
import Popover from "./Popover/Popover";
import Row from "./Grid/Row";
import Sider from "./Layout/Sider";
import Tabs from "./Tabs/Tabs";
import TabsBody from "./Tabs/Tabs-body";
import TabsHead from "./Tabs/Tabs-head";
import TabsItem from "./Tabs/Tabs-item";
import TabsPane from "./Tabs/Tabs-pane";
import plugin from "./plugin";


Vue.component("g-cascader", Cascader)
Vue.component("g-collapse", Collapse)
Vue.component("g-collapse-item", CollapseItem)
Vue.component("g-popover", Popover)
Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-col', Col)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-header', Header)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)
Vue.component('g-layout', Layout)
Vue.component('g-row', Row)
Vue.component('g-sider', Sider)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.use(plugin)


new Vue({
    el: '#app',
    data() {
        return {
            source: [
                {
                    name: '江苏',
                    children: [
                        {
                            name: '常州',
                            children: [
                                {name: '武进'},
                                {name: '溧阳'},
                                {name: '新北'},
                            ]
                        },
                        {
                            name: '苏州',
                            children: [
                                {name: '吴中'},
                                {name: '吴江'},
                                {name: '姑苏'},
                            ]
                        }
                    ]
                },
                {
                    name: '浙江',
                    children: [
                        {
                            name: '杭州',
                            children: [
                                {name: '上城'},
                                {name: '下乘'},
                                {name: '江干'},
                            ]
                        },
                        {
                            name: '嘉兴',
                            children: [
                                {name: '南湖'},
                                {name: '秀洲'},
                                {name: '嘉善'},
                            ]
                        }
                    ]
                }
            ]
        }
    },
    methods: {

    }
})
