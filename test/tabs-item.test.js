const expect = chai.expect
import Vue from 'vue'
import TabsItem from "../src/Tabs-item";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
    const Constructor = Vue.extend(TabsItem)
    let vm
    it('存在', () => {
        expect(TabsItem).to.be.ok
    })
    describe('props', () => {
        it('可以接受disabled', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            expect(vm.$el.classList.contains('disabled')).to.be.true;
            const callback = sinon.fake()
            vm.$on('click', callback)
            vm.$el.click()
            expect(callback).to.have.not.been.called
        })
        it('可以接受name',()=>{
            vm = new Constructor({
                propsData:{
                    name:'xxx'
                }
            }).$mount()
            expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
        })
    })
})
