const app = Vue.createApp({
    data() {
        return {
            myAction: 'https://vuejs.org/'
        }
    },
    methods: {
        testAction() {
            this.myAction = 'https://www.raymondcamden.com'
            this.$refs.form.submit() // to vuejs
        },
        testAction1() {
            this.myAction = 'https://www.google.com'
            this.$nextTick(() => {
                this.$refs.form.submit() // to google
            })
        }
    }
})