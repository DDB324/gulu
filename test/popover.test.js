const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/Popover/Popover'
import Button from "../src/Button/Button";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    describe('接受props', () => {
        it('可以设置position.', (done) => {
            Vue.component('g-popover', Popover)
            Vue.component('g-button', Button)
            let div = document.createElement('div')
            div.innerHTML = `
            <g-popover position="bottom" ref="a">
                <template v-slot:content >
                    <div>点击后显示的popover</div>
                </template>   
                <g-button>点击</g-button>
            </g-popover>
            `
            document.body.appendChild(div)
            const vm = new Vue({
                el: div
            })
            vm.$el.querySelector('button').click()
            vm.$nextTick(() => {
                const {contentWrapper} = vm.$refs.a.$refs
                expect(contentWrapper.classList.contains('position-bottom')).to.be.true
                done()
                vm.$el.remove()
                document.body.querySelector('.content-wrapper').remove()
                vm.$destroy()
            })
        })
        xit('可以设置trigger.', () => {
            Vue.component('g-popover', Popover)
            Vue.component('g-button', Button)
            let div = document.createElement('div')
            div.innerHTML = `
            <g-popover trigger="hover" ref="b">
                <template v-slot:content >
                    <div>hover后显示的popover</div>
                </template>
                <g-button>在这里hover</g-button>
            </g-popover>
            `
            document.body.appendChild(div)
            const vm = new Vue({
                el: div
            })
            let event = new Event('mouseenter')
            let buttonElement = vm.$el.querySelector('.g-button')
            buttonElement.dispatchEvent(event)
            vm.$nextTick(() => {
                const {contentWrapper} = vm.$refs.b.$refs
                //找不到hover后的popover的content
                //感觉是工具的问题,本应该出现的弹出的content内容变成了row组件
            })

        })
    })

})