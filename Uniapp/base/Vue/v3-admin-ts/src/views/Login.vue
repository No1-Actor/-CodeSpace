<template>
    <div class="header">
        <div class="logo">后台管理系统</div>
        <div class="header-right">
            <div class="header-user-icon">
                <div class="btn-bell">

                </div>
                <el-avatar 
                class="user-avatar"
                :size="30"
                :src="imgurl"
                >
                </el-avatar>
                <el-dropdown 
                    class="user-name" 
                    trigger="click"
                    @command="handleCommand"
                >
                    <span class="el-dropdown-link">
                        {{username}}
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <!-- 插槽 slot -->
                    <template #dropdown>
                        <el-dropdown-menu>
                            <a 
                            href="https://github.com/lin-xin/vue-manage-system"
                             target="_blank">
                                <el-dropdown-item>项目仓库</el-dropdown-item>
                            </a>
                            <el-dropdown-item command="user">个人中心</el-dropdown-item>
                            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import imgurl from '../assets/img/img.jpg';
const username = localStorage.getItem('ms_username');
const handleCommand = () => {

}
</script>

<style scoped>

</style>