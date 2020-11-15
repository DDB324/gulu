import Vue from 'vue'
import Button from "./Button/Button";
import Icon from "./Icon/Icon";
import ButtonGroup from './Button/Button-group'
import Input from "./Input/Input";
import Col from "./Grid/Col";
import Row from "./Grid/Row";
import Content from "./Layout/Content";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Layout from "./Layout/Layout";
import Sider from "./Layout/Sider";
import plugin from "./plugin";
import Tabs from "./Tabs/Tabs";
import TabsHead from "./Tabs/Tabs-head";
import TabsBody from "./Tabs/Tabs-body";
import TabsItem from "./Tabs/Tabs-item";
import TabsPane from "./Tabs/Tabs-pane";
import Popover from "./Popover/Popover";
import Collapse from "./Collapse/Collapse";
import CollapseItem from "./Collapse/Collapse-item";


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-col', Col)
Vue.component('g-row', Row)
Vue.component('g-content', Content)
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
Vue.component('g-layout', Layout)
Vue.component('g-sider', Sider)
Vue.use(plugin)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component("g-popover", Popover)
Vue.component("g-collapse", Collapse)
Vue.component("g-collapse-item", CollapseItem)


new Vue({
    el: '#app',
    data() {
        return {
            activeName:['1','2']
        }
    },
    methods: {
    }
})
