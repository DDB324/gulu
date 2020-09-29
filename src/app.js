import Vue from 'vue'
import Button from "./Button";

Vue.component('g-button', Button)
console.log(Vue.component)
let vm = new Vue({
    el: '#app',
})

console.log(vm)
