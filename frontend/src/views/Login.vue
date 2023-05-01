<template>
  <div class="main__body">
    <div class="containers">
      <h1>Đăng nhập</h1>
      <form>
        <div class="form-controls">
          <input type="email" id="email" placeholder="Email" v-model="email" />
          <span></span>
          <small></small>
        </div>
        <div class="form-controls">
          <input
            type="password"
            id="password"
            placeholder="Password"
            v-model="password"
          />
          <span></span>
          <small></small>
        </div>
        <p class="submit" @click="userLogin()">Login</p>
        <div class="signup_link">
          Bạn chưa có tài khoản? <router-link to="/dangky">Đăng ký</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { swtoast } from "@/mixins/swal.mixin";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async userLogin() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          account: this.email,
          password: this.password,
        }),
      };

      const response = await fetch(
        "http://localhost:3000/login",
        requestOptions
      );
      const data = await response.json();
      if (data.errCode === 0) {
        swtoast.success({
          text: "Đăng nhập thành công",
        });

        this.$router.push({ path: "/admin" });
      } else {
        swtoast.error({
          text: "Tài khoản hoặc mật khẩu không đúng, vui lòng nhập lại!",
        });
      }
    },
  },
};
</script>

<style>
.main__body {
  min-height: calc(100vh - 190px);
}
.containers {
  width: 600px;
  margin: 24px auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 12px 0;
}

.containers h1 {
  text-align: center;
  font-size: 32px;
  padding-top: 20px;
}

.containers form {
  padding: 0 40px;
}

form .form-controls {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 40px 0;
}

.form-controls.success {
  border-bottom-color: #2691d9;
}

.form-controls.error {
  border-bottom-color: #e74c3c;
}

.form-controls input {
  width: 100%;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}

small {
  position: absolute;
  left: 0;
  top: 100%;
  margin-top: 3px;
  color: #e74c3c;
}

.form-controls span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #2691d9;
  transition: 0.3s;
}

.form-controls input:focus ~ span::before {
  width: 100%;
}

.submit {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border: 1px solid;
  background: #2691d9;
  border-radius: 25px;
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  text-align: center;
  line-height: 48px;
  transition: 0.5s;
}

.submit:hover {
  background-color: #08609a;
}

.signup_link {
  margin: 25px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
}

.signup_link a {
  color: #2691d9;
  text-decoration: none;
}

.signup_link a:hover {
  text-decoration: underline;
}
</style>
