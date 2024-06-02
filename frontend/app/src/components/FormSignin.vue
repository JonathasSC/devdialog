<!-- eslint-disable -->
<template>
  <div class="form">
    <div class="tab-content">
      <div>
        <h1 class="form__title">Welcome Back!</h1>

        <form class="form__fields" @submit.prevent="SignIn">
          <div class="field-wrap">
            <input
              class="field__input"
              type="email"
              v-model="email"
              required
              autocomplete="off"
              placeholder="Email *"
            />
          </div>

          <div class="field-wrap">
            <input
              class="field__input"
              type="password"
              v-model="password"
              required
              autocomplete="off"
              placeholder="Password *"
            />
          </div>

          <button type="submit" class="form__submit-btn">Sign in</button>

          <span class="form__span">
            Don't have an account?
            <router-link class="form__span__link" to="/signup">
              Sign up
            </router-link>
          </span>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "FormSignin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    SignIn() {
      axios({
        method: "post",
        url: "http://127.0.0.1:5001/devdialog-da654/us-central1/api/auth/login",
        data: {
          email: this.email,
          password: this.password,
        },
      })
        .then((response) => {
          const token: string = response.data.token;
          localStorage.setItem("token", token);
          this.$router.push("/");

          this.$swal({
            icon: "success",
            title: "Welcome!",

            timer: 1500,
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timerProgressBar: true,
          });
        })
        .catch(() => {
          this.$swal({
            icon: "error",
            title: "Failed to login, check the entered data and try again",

            timer: 1500,
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timerProgressBar: true,
          });
        });
    },
  },
});
</script>

<style>
.form {
  width: 32rem;
  padding: 3rem;
  border-radius: 1rem;
  background-color: var(--color-slate-800);
}

.form__title {
  color: var(--color-indigo-50);
  margin-bottom: 4rem;
  font-size: 2.4rem;
  font-weight: bold;
}

.form__tabs {
  display: flex;
  justify-content: center;
}

.form__tabs * {
  width: 50% !important;
}

.form__fields {
  gap: 2rem;
  display: flex;
  flex-direction: column;
}

.field-wrap {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.field__label {
  color: var(--color-indigo-400);
}

.field__input::placeholder {
  color: var(--color-slate-600);
}

.field__input {
  min-width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;
  color: var(--color-slate-50);
  border: 0.1rem var(--color-slate-700) solid;
}

.form__submit-btn {
  width: 100%;
  padding-block: 1rem;

  border-radius: 0.25rem;
  color: var(--color-slate-50) !important;
  background-color: var(--color-indigo-600);
}

.form__submit-btn:hover {
  background-color: var(--color-indigo-500);
}

.form__span {
  color: var(--color-indigo-400);
}

.form__span__link {
  color: var(--color-indigo-300);
}
</style>
