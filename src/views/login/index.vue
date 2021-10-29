<template>
  <div class="login-bg-wrap">
    <div class="main">
      <p class="title tac rk-mb-15">欢迎登录本系统</p>

      <el-form ref="formRef" :model="formData" :rules="formRule">
        <el-form-item prop="loginName">
          <el-input v-model="formData.loginName" placeholder="用户名">
            <template #prepend><i class="el-icon-user-solid"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="psd">
          <el-input v-model="formData.psd" show-password placeholder="密码">
            <template #prepend><i class="el-icon-s-goods"></i></template>
          </el-input>
        </el-form-item>
        <el-button class="login-btn" type="primary" @click="handleLogin" :loading="isLoading">登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
  import { onMounted, getCurrentInstance, reactive, ref, unref } from 'vue';
  export default {
    name: 'login',
    setup(pro, content) {
      const formRef = ref();
      onMounted(() => {});
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
        isLoading.value = true;
      };

      return { formData, handleLogin, formRule, formRef, isLoading };
    },
  };
</script>
<style lang="scss" scoped>
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
      /deep/ .el-input__inner:focus {
        border-color: transparent;
      }
      .login-btn {
        width: 100%;
      }
    }
  }
</style>
