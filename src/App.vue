<template>
  <button @click="requestData">请求接口</button>
  <div>{{responseData}}</div>
</template>

<script>
  import axios from 'axios';

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      responseData: '',
    }
  },
  mounted() {
  },
  methods: {
    requestData () {
      axios.get('/functions/test?ID=12345')
              .then((response)=> {
                console.log('请求成功', response);
                this.responseData = response;
              })
              .catch(function (error) {
                console.log('请求失败', error);
              });
    }
  }
}
</script>

<style>
</style>
