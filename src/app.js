import Vue from 'vue'
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from './Button-group'
import Input from "./Input";
import Col from "./Col";
import Row from "./Row";


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-col', Col)
Vue.component('g-row', Row)


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: '你好'
    },
})
