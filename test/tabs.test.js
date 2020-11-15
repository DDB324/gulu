const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/Tabs/Tabs.vue'
import TabsBody from "../src/Tabs/Tabs-body";
import TabsItem from "../src/Tabs/Tabs-item";
import TabsHead from "../src/Tabs/Tabs-head";
import TabsPane from "../src/Tabs/Tabs-pane";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在', () => {
        expect(Tabs).to.be.ok
    })
    describe('props', () => {
        it('可以接受selected', (done) => {
            Vue.component('g-tabs', Tabs)
            Vue.component('g-tabs-head', TabsHead)
            Vue.component('g-tabs-body', TabsBody)
            Vue.component('g-tabs-item', TabsItem)
            Vue.component('g-tabs-pane', TabsPane)
            let div = document.createElement('div')
            div.innerHTML = `
                <g-tabs selected="news">
                <g-tabs-head>
                    <g-tabs-item name="news">新闻</g-tabs-item>
                    <g-tabs-item name="video">视频</g-tabs-item>
                    <g-tabs-item name="picture">图片</g-tabs-item>
                </g-tabs-head>
                <g-tabs-body>
                    <g-tabs-pane name="news">新闻的资讯</g-tabs-pane>
                    <g-tabs-pane name="video">视频的资讯</g-tabs-pane>
                    <g-tabs-pane name="picture">图片的资讯</g-tabs-pane>
                </g-tabs-body>
            </g-tabs>
            `
            document.body.appendChild(div)
            const vm = new Vue({
                el: div
            })
            vm.$nextTick(() => {
                expect(vm.$el.querySelector(`.tabs-item[data-name = 'news']`).classList.contains('active')).to.be.true
                done()
                vm.$el.remove()
                vm.$destroy()
            })
        })
        it('可以接收direction',()=>{

        })
    })
})
