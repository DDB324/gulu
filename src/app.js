import Vue from 'vue'
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from './Button-group'
import Input from "./Input";
import Col from "./Col";
import Row from "./Row";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import Layout from "./Layout";
import Sider from "./Sider";
import plugin from "./plugin";
import Tabs from "./Tabs";
import TabsHead from "./Tabs-head";
import TabsBody from "./Tabs-body";
import TabsItem from "./Tabs-item";
import TabsPane from "./Tabs-pane";
import Popover from "./Popover";


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


new Vue({
    el: '#app',
    data: {
        selectedTab: 'picture'
    },
    methods: {}
})
