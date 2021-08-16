const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'These are great socks'
        }
    }
})
//you have to pass in an object (even if its empty) to the createApp