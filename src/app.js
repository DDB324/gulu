import Vue from 'vue'
import Button from "./Button";
import Icon from "./Icon";
import ButtonGroup from './Button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    }
})

