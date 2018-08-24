<template>
    <div class="register">
        <h1 class="heading-1"> Registration</h1>
        <form class="register__form">
            <div class="register__container">
                <input name="full_name" type="text" placeholder="Full Name" class="register__input" v-model="credentials.full_name">
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
                <input type="date" name="birth_date" class="register__input" placeholder="Birth Date" v-model="credentials.birth_date">
                <label for="birth_date">Date Of Birth</label>
            </div>
            <a class="register__btn" @click="sendCredentials">Register</a>
        </form>
    </div>
</template>
<script>
    import authenticationService from '../services/authenticationService';

    export default {
        data() {
            return {
                credentials : {
                    email : null,
                    password: null,
                    full_name: null,
                    birth_date: null
                }
            }
        },
        methods : {
            sendCredentials () {
                authenticationService.register(this.credentials);
            }
        }
    }
</script>
<style lang="scss" scoped>

    .register {
        font-family: 'Cairo', sans-serif;
        background-image: url('../../public/img/register_bck.jpg');
        background-size: cover;
        height: 100vh;
        margin: 0;
        position: relative;
        padding: 0;

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
            margin-top: 30px;
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
</style>
