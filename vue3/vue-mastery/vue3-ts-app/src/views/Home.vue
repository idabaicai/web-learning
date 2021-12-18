<template>
  <div class="home">
    <h2>{{count}}</h2>
    <div class="person">
      <h2>{{person.name}}</h2>
      <h2>{{person.age}}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import fetchCount from '@/api/fetchCount';

interface Person {
  name: string;
  age: number;
}

const count = ref<number | null>(null);
const person = reactive<Person>({
  name: 'Dabai',
  age: 23,
});
const person2:Person = reactive({
  name: 'AAA',
  age: 22,
});

onMounted(() => {
  fetchCount((number) => {
    count.value = number;
  });
});
</script>
