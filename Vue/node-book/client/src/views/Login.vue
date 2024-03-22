<template>
  <div class="login">
    <h1>登录</h1>
    <div class="login-wrapper">
      <div class="avatar">
        <img
          src="https://img0.baidu.com/it/u=3979949991,2513156939&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
          alt=""
        />
      </div>

      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="state.username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="state.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>

    <p class="register" @click="register">新用户?点击这里注册</p>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';  
import { useRouter } from 'vue-router';
import axios from '../assets/api';

const router = useRouter(); // 创建一个路由实例

const state = reactive({ // reactive负责将对象变成响应式数据
  username: '',
  password: '',
})
// const username = ref(''); // ref负责把原始数据变成响应式数据
// const password = ref('');
// console.log('123');
const onSubmit = async() => {
    // 发送请求，将state.username, state.password传给后端
    // console.log('123');
    const res = await axios.post('/login',  {      // 向后端发送请求
        username: state.username,
        password: state.password,
    })
  //  console.log(res, ' /////????');
    // 保存用户信息
    // window.sessionStorage.setItem('jwtToken', res.token); // 保存用户信息到 会话存储空间
    // console.log(res, '/////');
    // router.push('./NoteClass.vue'); // 登录成功后跳转到noteClass
    // const res = await axios.post({ username: username.value, password: password.value });
        // window.localStorage.setItem('jwtToken', res.token);
};

// 跳转到注册界面
const register = () => {
    router.push('/register');
}
</script>

<!-- 私有样式 -->
<style lang="less" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding: 0 0.3rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  h1 {
    height: 0.6933rem;
    text-align: center;
    margin-top: 1.12rem;
    font-size: 0.48rem;
  }
  .login-wrapper {
    width: 7.44rem;
    height: 10.77rem;
    border: 1px solid rgba(187, 187, 187, 1);
    margin: 0 auto;
    margin-top: 1.7rem;
    border-radius: 0.3rem;
    box-shadow: 0 0 0.533rem 0 rgba(170, 170, 170, 1);
    .avatar {
      width: 2.4rem;
      height: 2.4rem;
      overflow: hidden;
      border-radius: 50%;
      margin: 1rem auto 0.77rem;
      img {
        width: 100%;
      }
    }
  }
  .register {
    position: absolute;
    bottom: 30px;
    width: 80%;
    left: 50%;
    text-align: center;
    font-size: 0.374rem;
    transform: translateX(-50%);
    height: 0.6rem;
    line-height: 0.6rem;
    color: rgba(16, 16, 16, 1);
  }
}

</style>

<!-- 全局样式 -->
<style>
.van-cell__title.van-field__label{
    width: 45px;
}
</style>