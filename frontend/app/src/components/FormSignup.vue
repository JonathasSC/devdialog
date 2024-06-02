<!-- eslint-disable -->
<template>
  <div class="form">
    <div class="tab-content">
      <div>
        <h1 class="form__title">Sign Up for Free</h1>

        <form class="form__fields" @submit.prevent="SignUp">
          <div class="field-wrap">
            <input
              class="field__input"
              v-model="name"
              autocomplete="off"
              type="text"
              required
              placeholder="Name *"
            />
          </div>

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

          <button type="submit" class="form__submit-btn">Sign up</button>

          <span class="form__span">
            Have an account?
            <router-link class="form__span__link" to="/signin">
              Sign in
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
  name: "FormSignup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    SignUp() {
      axios({
        method: "post",
        url: "http://127.0.0.1:5001/devdialog-da654/us-central1/api/users/",
        data: {
          name: this.name,
          email: this.email,
          password: this.password,
        },
      })
        .then(() => {
          this.$swal({
            icon: "success",
            title: "Account created! Please Sign in to continue",

            timer: 1500,
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timerProgressBar: true,
          });
          (this.name = ""), (this.email = ""), (this.password = "");
        })
        .catch((error) => {
          this.$swal({
            icon: "error",
            title: `${error}`,

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
  max-width: 32rem;
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
