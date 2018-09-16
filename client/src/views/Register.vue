<template>
    <div class="register">
        <div class="left">
            <router-link to="/" class="home">&larr; Go back home</router-link>
        </div>
        <h1 class="heading-1"> Registration</h1>
        <form class="register__form">
            <div class="register__container">
                <input name="full_name" type="text" placeholder="Full Name" class="register__input" v-model="credentials.full_name" autocomplete="off">
                <label for="full_name">Full Name</label>
            </div>
            <div class="register__container">
                <input type="email" class="register__input" name="email" placeholder="Email" v-model="credentials.email" autocomplete="off">
                <label for="email">Email</label>
            </div>
            <div class="register__container">
                <input type="password" name="password" class="register__input" placeholder="Password" v-model="credentials.password">
                <label for="password">Password</label>
            </div>
            <div class="register__container">
                <input type="date" pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))" name="birth_date" class="register__input" placeholder="Birth Date" v-model="credentials.birth_date">
                <label for="birth_date">Date Of Birth</label>
            </div>
            <div v-if="error" class="error" v-html="error"/>
            <div class="succes" v-if="succes">Registration Complete!</div>
            <a  class="register__btn" @click="sendCredentials">Register</a>
            <div style="marginTop: 30px;">
                <router-link to="login" style="textDecoration:none; color:black; fontSize: 16px;">Already have an account?</router-link>

            </div>

        </form>
    </div>
</template>
<script>
import authenticationService from '../services/authenticationService'

export default {

  // aici
  data () {
    return {
      credentials: {
        email: '',
        password: '',
        full_name: '',
        birth_date: ''
      },
      error: null,
      succes: false
    }
  },
  methods: {
    async sendCredentials () {
      try {
        this.error = await authenticationService.register(this.credentials)
       
        if (!this.error) {
          this.credentials.email = ''
          this.credentials.password = ''
          this.credentials.full_name = ''
          this.credentials.birth_date = ''
          this.error = null
          this.succes = true
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style lang="scss" scoped>

    .left{
        text-align: left;
        margin-left: 30px;
    }

    .register {
        font-family: 'Cairo', sans-serif;
        background-image: url('../../public/img/register_bck.jpg');
        background-size: cover;
        height: 100vh;
        margin: 0;
        position: relative;
        padding: 0;
        animation: mainIn 1s ease-in;

        &__form {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }

        &__container {
            text-align: left;
        }

        &__input {
            height: 30px;
            border: 0;
            border-bottom: 1px solid grey;
            margin-bottom: 10px;

            &:focus{
                outline: 0;
            }
        }

&__btn{
            margin-top: 50px;
            font-family: 'Cairo', sans-serif;
            background-color: transparent;
            border: 2px solid grey;
            width: 150px;
            height: 35px;
            border-radius: 1000px;
            color: grey;
            font-weight: 700;
            font-size: 16px;
            cursor: pointer;
    transition: all .5s;
            padding: 3px 30px;

            &:focus{
                outline: none;
            }

         &:hover{
                background-color: grey;
                color: white;
            }
        }
    }

    .heading-1{
        font-family: 'Cairo', sans-serif;
        margin: 0;
        font-size: 60px;
    }

    
    .succes {
        background-color: rgba(119, 255, 115, 0.945);
        border: 2px solid rgb(3, 78, 0);
        color: rgb(3, 78, 0);
        padding: 5px 15px;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    .home{
        text-decoration: none;
        color: black;
        font-size: 20px;
        font-weight: 600;
       margin-right: auto;
    }

  @keyframes mainIn {
    0%{
      transform: translateX(-20px);
      opacity: 0;
    }

    100%{
      transform: translateX(0px);
      opacity: 1;
    }
  }
</style>
