<template>
    <div class="login">
        <div class="left">
            <router-link to="/" class="home">&larr; Go home</router-link>
        </div>
        <div class="acces">
            <img src="../assets/Vector.svg" alt="svg" class="vector">
            <main class="main">
                <h1 class="heading">LOGIN</h1>

                <form class="log-in">
                    <div class="input">
                        <label for="email" class="form__label">Email</label>
                        <input type="text" placeholder="Email" v-model="email" class="form__input" name="email">
                    </div>
                    <div class="input">
                        <label for="password" class="form__label">Password</label>
                        <input type="password" placeholder="Password" v-model="password" class="form__input" name="password">
                    </div>
                    <router-link to="register" style="textDecoration:none; color:black; fontSize: 16px; display: block; marginBottom: 10px;">Don't have an acount?</router-link>

                </form>
                    <div style="textAlign: center;">
                        <div v-if="error" class="error" v-html="error"/>
                    </div>
                    <a class="btn" @click="login"> LOGIN</a>
            </main>

            <div class="pocket"></div>
        </div>
    </div>
</template>

<script>
import authenticationService from '../services/authenticationService'

export default {
  data () {
    return {
      email: null,
      password: null,
      error: null
    }
  },
  methods: {
    async login () {
      const response = await authenticationService.login({email: this.email, password: this.password})

      if (response.error) {
        this.error = response.error
      } else {
        const token = response.token.data.token
        this.$store.dispatch('setToken', token)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .error {
        background-color: rgb(255, 168, 168);
        border: 2px solid rgb(173, 0, 0);
        color: rgb(255, 0, 0);
        padding: 5px 15px;
        border-radius: 10px;
        margin-bottom: 20px;
        width: 70%;
        margin-left: 65px;
    }

     .left{
        text-align: left;
        margin-left: 30px;
    }

    .home {
        text-align: left;
        margin-right: auto;
        text-decoration: none;
        color: black;
        font-size: 20px;
    }
    .login{
        background-color: #327962;
        height: 100vh;
        position: relative;
        animation: enter 1s ease-in;
    }

    .main {
        background-color: #e9e9e9;
        height: 550px;
        width: 500px;
        border-radius: 70px;
        position: absolute;
        left: 50%;
        top: 60%;
        transform: translate(-50%,-50%);
    }

    .vector {
        position: absolute;
        top: -3%;
        left: 18%;
    }

    .pocket {
        height: 510px;
        width: 200px;
        background-color: #175843;
        position: absolute;
        top: 36%;
        right: -5%;
        border-radius: 30px;
    }

    .form {

        &__input{
            height: 40px;
            width: 80%;
            border: none;
            border-radius: 10px;
            padding: 5px 20px;

            &:first-of-type {
                margin-bottom: 50px;
            }

            &:focus {
                outline: none;
            }
        }

        &__label{
            display: block;
            position: absolute;
            top: -24px;
            left: 50px;
        }
    }

    .input {
        text-align: center;
        position: relative;
    }

    .heading {
        margin-bottom: 110px;
        margin-top: 40px;
        font-size: 45px;
    }

    .btn {
        cursor: pointer;
        background-color: #327962;
        padding: 10px 15px;
        margin-top: 10px;
        color: #e9e9e0;
        font-size: 30px;
        margin-bottom: 30px;
    }

    @keyframes enter {
        0% {
            opacity: 0;
            transform: translateX(20px);
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

</style>
