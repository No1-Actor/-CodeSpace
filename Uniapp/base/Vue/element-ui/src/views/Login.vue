<template>
    <div class="login">
        <div class="login-wrap">
            <div class="item">
                <span>账号：</span>
                <input type="text" v-model="account">
            </div>
            <div class="item">
                <span>密码：</span>
                <input type="password" v-model="password" >
            </div>
            <div class="item">
                <button @click="login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                account: 'admin',
                password: '123'
            }   
        },
        created() {
            this.keyUpSubmit();
        },
        methods: {
            keyUpSubmit() {
                document.onkeydown = () => {
                let key = window.event.keyCode;
                if (key === 13) {
                    this.$router.push({name:'home', params: {user: this.account}});
                    }
                };
            },
            login(){
                // 获取用户输入的账号和密码 在发起请求传给后端
                // console.log(this.account, this.password);
                if(this.account === '' || this.password === ''){
                    alert('账号或密码不能为空');
                    return;
                }
                // 用js控制路由跳转
                // 第一种
                // this.$router.push(`/home/${this.account}`);
                // 第二种
                // this.$router.push({path:'/home', query: {user: this.account}});
                // 第三种
                // this.$router.push({name:'home', params: {user: this.account}});
                // 第四种
                this.$router.push({path:'/home', hash: `${this.account}`});


            }
        }
    }
</script>

<style lang="less" scoped>
.login{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bfbfbf;
    .login-wrap{
        width: 400px;
        height: 300px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 100px #fff;
        padding: 20px;
        font-size: 30px;
        font-family: '楷体';
        .item{
            display: flex;
            margin-top: 30px;
            input{
                flex: 1;
                padding: 0 10px;
                font-size: 20px;
                border-radius: 10px;
                border: 1px solid #ccc;
            }
            button{
                font-size: 30px;
                flex: 1;
                border-radius: 100px;
                border: none;
                background-color: rgba(30,144,255);
                color: #fff;
                padding: 5px 0;
                font-family: '楷体';
                cursor: pointer; // 鼠标移上去变成小手
            }
        }
    }
}


</style>