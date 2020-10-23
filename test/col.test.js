const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/Col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.be.ok
    })

    // describe('props', () => {
    //     const Constructor = Vue.extend(Col)
    //     let vm
    //     afterEach(() => {
    //         vm.$destroy()
    //     })
    //     it('可以接收span.', () => {
    //         vm = new Constructor({
    //             propsData: {
    //                 span: '24'
    //             }
    //         }).$mount()
    //         const colElement = vm.$el.querySelector('.col')
    //         expect(colElement).to.equal('24')
    //     })
    // })
})