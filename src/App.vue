<template>
  <button @click="requestData">请求接口</button>
  <div>{{responseData}}</div>
  <div class="chatRoom">
    <div class="title">聊天室</div>
    <div class="chartContent">
      <div class="item other">
        <div class="avatar">客服</div>
        <div class="msg">您好，请问有什么能帮您的吗？</div>
      </div>
      <div class="item self">
        <div class="avatar">我</div>
        <div class="msg">xxxx</div>
      </div>
    </div>
    <div class="footer">
      <input v-model="text" @keyup.enter="sendData" />
      <button class="sendBtn" @click="sendData">发送</button>
    </div>
  </div>
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
      text: ''
    }
  },
  mounted() {
  },
  methods: {
    requestData () {
      axios.get('/functions/test?ID=12345', {}).then((response)=> {
        console.log('请求成功', response);
        this.responseData = response;
      }).catch(function (error) {
        console.log('请求失败', error);
      });
    },
    sendData() {
      if (!this.text.trim()) {
        return;
      }
      console.log(this.text);
      const queryArgs =  {
        msg: this.text,
      }
      axios.post('/functions/chat', queryArgs).then((response)=> {
        console.log('请求成功', response);
      }).catch(function (error) {
        console.log('请求失败', error);
      });
    },
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  /*****浏览器滚动条样式****/
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background: #dddddd;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #d4d4d4;
  }
  ::-webkit-scrollbar-track {
    background: #f8f8f8;
  }
  ::-webkit-scrollbar-track:hover {
    background: #f5f5f5;
  }
  .chatRoom{
    width: 800px;
    /*border: 1px solid #d7d7d7;*/
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    margin: 10% auto 0;
  }
  .chatRoom .title{
    padding: 15px;
    border-bottom: 1px solid #d7d7d7;
  }
  .chatRoom .chartContent{
    padding: 10px;
    background: #f8f8f8;
    max-height: 60vh;
    overflow: auto;
    min-height: 400px;
  }
  .chartContent .item{
    display: flex;
    padding: 10px;
    font-size: 14px;
    flex: 1;
  }
  .chartContent .item .avatar{
    width: 40px;
    height: 40px;
    border: 1px solid #d7d7d7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    background: #f5f8fa;
    flex-shrink: 0;
  }
  .chartContent .item .msg{
    padding: 10px;
    border-radius: 4px;
    /*box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);*/
    filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.1));
    word-break: break-all;
    position: relative;
  }
  .chartContent .item.other .msg{
    margin-left: 15px;
    background: #ffffff;
  }
  .chartContent .item.other .msg:before {
    content: "";
    position: absolute;
    top: 50%;
    left: -15px;
    margin-top: -15px;
    border: 8px solid transparent;
    /*border-right: 15px solid #e0f2ff;*/
    border-right: 8px solid #ffffff;
  }
  .chartContent .item.self{
   flex-direction: row-reverse;
  }
  .chartContent .item.self .msg{
    margin-right: 10px;
    background: #4ed24e;
  }
  .chartContent .item.self .msg:before {
    content: "";
    position: absolute;
    top: 50%;
    right: -15px;
    margin-top: -15px;
    border: 8px solid transparent;
    /*border-right: 15px solid #e0f2ff;*/
    border-left: 8px solid #4ed24e;
  }
  .footer{
    display: flex;
    font-size: 0;
    align-items: center;
  }
  .footer, .footer input{
    height: 40px;
  }
  .footer input{
    width: 90%;
    font-size: 14px;
    line-height: 40px;
    padding: 10px;
    border: none;
    outline: none;
    /*height: 100%;*/
  }
  .sendBtn{
    background: rgba(1, 82, 218, 0.83);
    border: none;
    width: 9%;
    height: 80%;
    color: #ffffff;
    cursor: pointer;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  .sendBtn:hover{
    background: rgba(1, 82, 218, 0.5);
  }

</style>
