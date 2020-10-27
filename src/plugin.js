import Toast from './Toast'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default= [message]
            toast.$mount()
            console.log(toast.$slots);
            document.body.appendChild(toast.$el)
        }
    }
};