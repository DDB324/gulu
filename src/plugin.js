import Toast from './Toast'


let currentToast

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastOption) {
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast({Vue, propsData: toastOption, message})
        }
    }
};

/* helpers */
function createToast({Vue, propsData, message}) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData})
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}