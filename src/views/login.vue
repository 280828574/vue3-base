<template>
  <div class="login-bg-wrap">
    <div class="main">
      <p class="title tac rk-mb-15">茶卫士后台管理系统</p>

      <el-form ref="formRef" :model="formData" :rules="formRule">
        <el-form-item prop="loginName">
          <el-input class="el-input-wrap" v-model="formData.loginName" placeholder="用户名">
            <template #prepend
              ><el-icon>
                <avatar />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <div class="rk-mb-15"></div>
        <el-form-item prop="psd">
          <el-input class="el-input-wrap" v-model="formData.psd" show-password placeholder="密码">
            <template #prepend
              ><el-icon>
                <lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <div class="rk-mb-15"></div>
        <el-button class="login-btn" type="primary" @click="handleLogin" :loading="isLoading">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script setup>
  import { reactive, ref, unref } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();
  const formRef = ref();

  let formData = reactive({
    loginName: '', // 用户名
    psd: '', // 密码
  });
  let formRule = {
    psd: [
      {
        required: true,
        trigger: 'blur',
        message: '请输入用户名',
      },
    ],
    loginName: [
      {
        required: true,
        trigger: 'blur',
        message: '请输入密码',
      },
    ],
  };
  let isLoading = ref(false);

  // 登录
  const handleLogin = async () => {
    const form = unref(formRef);
    if (!form) return;
    try {
      await form.validate();
      loginApi();
    } catch (err) {}
  };

  // 登录接口
  const loginApi = () => {
    // isLoading.value = true;
    router.push({ path: '/home' });
  };
</script>
<style lang="scss">
  .login-bg-wrap {
    width: 100%;
    height: 100%;
    background: $backgroundMain;
    padding-top: 20%;
    .main {
      width: 500px;
      margin: 0 auto;
      .title {
        color: #fff;
        font-size: 26px;
      }
      .el-input-wrap {
        height: 40px;
        .el-input__inner {
          height: 40px;
        }
      }
      .el-input__inner:focus {
        border-color: transparent;
      }
      .login-btn {
        width: 100%;
        height: 40px;
      }
    }
  }
</style>
