const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/Grid/Row.vue'
import Col from '../src/Grid/Col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })

    describe('props', () => {
        it('可以接受gutter', (done) => {
            Vue.component('g-row', Row)
            Vue.component('g-col', Col)
            let div = document.createElement('div')
            div.innerHTML = `
                   <g-row gutter="20">
                    <g-col span="12">1</g-col>
                    <g-col span="12">2</g-col>
                   </g-row>
             `
            document.body.appendChild(div)
            let vm = new Vue({
                el: div
            })
            setTimeout(() => {
                let row = vm.$el.querySelector('.row')
                expect(getComputedStyle(row).marginLeft).to.eq('-10px')
                expect(getComputedStyle(row).marginRight).to.eq('-10px')
                let cols = vm.$el.querySelectorAll('.col')
                expect(getComputedStyle(cols[0]).paddingRight).to.equal('10px');
                expect(getComputedStyle(cols[0]).paddingLeft).to.equal('10px');
                done()
                vm.$el.remove()
                vm.$destroy()
            }, 0)
        })
        it('可以接受align', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Row)
            const vm = new Constructor({
                propsData: {
                    align: 'center'
                }
            }).$mount(div)
            let row = vm.$el
            expect(getComputedStyle(row).justifyContent).to.eq('center')
            vm.$el.remove()
            vm.$destroy()
        })

    })
})