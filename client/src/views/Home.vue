<template>
  <div class="home">
    <div class="menu">
      <router-link to="register" class="registerBtn">Create new account</router-link>

      <input type="email" placeholder="Email" class="input">
      <input type="password" placeholder="Password" class="input">

      <router-link to="login" class="registerBtn log-in">Log In</router-link>
    </div>
    <header class="header">
      backInTime
    </header>

    <div class="ctaBtns">
      <div class="btn-main--1">
        <router-link to="register" class="btn btn--white">Are you new here?</router-link>
      </div>
      <div class="btn-main--2">
        <router-link to="login" class="btn btn--green">Enter your account</router-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @font-face {
  font-family: gloss_and_bloom;
  src: url("../assets/fonts/Gloss_And_Bloom.ttf")
  }

  .home {
    background-image: radial-gradient(rgba(#000, .33), rgba(#000, .38)),url('../assets/landing-bck.jpg');
    height: 100vh;
    background-size: cover;
  }

  .menu {
    height: 70px;
    background-color: #232931;
    display: flex;
    align-items: center;
    animation: menuIn 1s ease-in;
  }

  .header {
    font-family: gloss_and_bloom;
    font-size: 130px;
    color: #4ecca3;
    margin-top: 180px;
    animation: headerIn 1s ease-in;
  }

  .registerBtn {
    &:link,
    &:visited {
      text-decoration: none;
      background-color: #4ecca3;
      color: #393E46;
      padding: 5px 20px 5px 20px;
      font-family: gloss_and_bloom;
      border-radius: 10px;
      transition: all .2s;
      margin-left: 20px;
    }

    &:hover{
      box-shadow: 0 5px 10px rgba(#000, .2);
      transform: translateY(-4px);
    }

    &:active{
      box-shadow: 0 2px 6px rgba(#000, .2);
      transform: translateY(-1px);
    }
  }

  .input {

    height: 60%;
    width: 400px;
    border-radius: 5px;
    border: none;
    padding: 3px 20px;
    color: #eee;

    &:first-of-type{
      margin-right: 50px;
      margin-left: auto;
    }

    &:focus {
      outline: none;
    }

    &::-webkit-input-placeholder {
      font-size: 15px;

    }
  }
  .log-in{
    margin-right: 20px;
  }

  .btn{
    &:link,
    &:visited{
      text-decoration: none;
      font-family: gloss_and_bloom;
      border-radius: 10px;
      padding: 5px 20px 5px 20px;
      font-size: 25px;
    }

      &--white{
        background-color: #eee;
        color: #232931;
      }

      &--green{
        background-color: rgba(#4ECCA3, .57);
        color: #eee;
      }

  }

  .btn-main{

    &--1{
      position: absolute;
      left: 10%;
      top: 100px;

     &:hover{
      box-shadow: 0 5px 10px rgba(#000, .2);
      transform: translateY(-4px);
    }

    &:active{
      box-shadow: 0 2px 6px rgba(#000, .2);
      transform: translateY(-1px);
    }
    }

    &--2{
      position: absolute;
      left: 10%;
      top: 190px;

    &:hover{
      box-shadow: 0 5px 10px rgba(#000, .2);
      transform: translateY(-4px);
    }

    &:active{
      box-shadow: 0 2px 6px rgba(#000, .2);
      transform: translateY(-1px);
    }
    }
  }

  .ctaBtns{
    position: relative;

  }

  @keyframes headerIn {
    0%{
      transform: translateX(-20px);
      opacity: 0;
    }

    100%{
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @keyframes menuIn {
    0%{
      transform: translateY(5px);
      opacity: 0;
    }

    100%{
      transform: translateY(0px);
      opacity: 1;
    }
  }

</style>
