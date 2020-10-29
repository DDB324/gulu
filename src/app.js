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


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: '你好'
    },
    methods: {
        showToast(position) {
            this.$toast(`今天花了${parseInt((Math.random() * 100).toString())}`, {
                closeButton: {
                    text: '知道了',
                    callback() {
                        console.log('用户说他知道了');
                    }
                },
                // enableHtml: true,
                autoCloseDelay: 500,
                position
            })
        },
        showToastMiddle() {
            this.showToast('middle')
        },
        showToastBottom() {
            this.showToast('bottom')
        },
        showToastTop() {
            this.showToast('top')
        },
    }
})
