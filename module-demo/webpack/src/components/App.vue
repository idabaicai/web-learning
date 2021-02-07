<template>
    <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
        <button @click="hello">click</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: 'hello vue component',
            count: 0
        }
    },
    methods: {
        hello: function() {
            console.log('vue is fun');
        }
    }
}
</script>
<style scoped>
button {
    width: 30px;
    height: 20px;
    color: pink;
}
</style>