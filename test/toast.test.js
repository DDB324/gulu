const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/Toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })

    describe('props', () => {
        const Constructor = Vue.extend(Toast)
        let vm
        it('可以接收autoClose.', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                propsData: {
                    autoClose: 1.5,
                }
            }).$mount(div)
            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
                vm.$el.remove()
                vm.$destroy()
            })
        })
        it('可以接收closeButton.', () => {
            const callback = sinon.fake()
            vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '测试',
                        callback
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.equal('测试')
            closeButton.click()
            expect(callback).to.have.been.called
            vm.$el.remove()
            vm.$destroy()
        })
        it('可以接受enableHtml', () => {
            vm = new Constructor({
                propsData: {
                    enableHtml: true,
                }
            })
            vm.$slots.default = ['<strong id="test">测试</strong>']
            vm.$mount()
            let slot = vm.$el.querySelector('#test')
            expect(slot).to.exist
            vm.$el.remove()
            vm.$destroy()
        })
        it('可以接受position', () => {
            vm = new Constructor({
                propsData: {
                    position: 'middle'
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-middle')).to.equal(true)
            vm.$el.remove()
            vm.$destroy()
        })
    })
})