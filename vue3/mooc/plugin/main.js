const app = Vue.createApp({
  data() {
    return {
      msg: 'plugin',
      age: 18,
      name: 'link'
    }
  },
  rules: {
    age: {
      validate: age => age < 10,
      message: 'too young too simple'
    },
    name: {
      validate: name => name.length >5,
      message: 'name is too long'
    }
  },
})

