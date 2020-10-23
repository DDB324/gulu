const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/Col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })

    describe('props', () => {
        const Constructor = Vue.extend(Col)
        let vm
        afterEach(() => {
            vm.$el.remove()
            vm.$destroy()
        })
        it('可以接收span.', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    span: '1'
                }
            }).$mount(div)
            expect(vm.$el.classList.contains('col-1')).to.eq(true)
        })
        it('可以接收offset.', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    offset: '1'
                }
            }).$mount(div)
            expect(vm.$el.classList.contains('offset-1')).to.eq(true)
        })
        it('可以接收iPad.', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    iPad: {span:1,offset:1}
                }
            }).$mount(div)
            expect(vm.$el.classList.contains('col-iPad-1' && 'offset-iPad-1')).to.eq(true)
        })
        it('可以接收narrowPc.', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    narrowPc: {span:1,offset:1}
                }
            }).$mount(div)
            expect(vm.$el.classList.contains('col-narrow-pc-1' && 'offset-narrow-pc-1')).to.eq(true)
        })
        it('可以接收pc.', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    pc: {span:1,offset:1}
                }
            }).$mount(div)
            expect(vm.$el.classList.contains('col-pc-1' && 'offset-pc-1')).to.eq(true)
        })
        it('可以接收widePc.', () => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    widePc: {span:1,offset:1}
                }
            }).$mount(div)
            expect(vm.$el.classList.contains('col-wide-pc-1' && 'offset-wide-pc-1')).to.eq(true)
        })
    })
})