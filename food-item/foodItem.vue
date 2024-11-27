<template>
    <div v-on:click='countClicks'>
      <h2>{{ name }}</h2>
      <p>{{ message }}</p>
      <p id="red">Click aqui</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: 'Apples',
        message: 'I like apples',
        clicks: 0
      }
    }
  };
  methods: {
    countClicks(); {
        this.clicks++;
    }
  };
  </script>
  
  <style>
  #red {
    font-weight: bold;
    color: rgb(red, green, blue)
  }
</style>