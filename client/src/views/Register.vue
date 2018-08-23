<template>
    <div>
        <h1> Registration</h1>
        <form>
            <input type="text" placeholder="Email" v-model="credentials.email">
            <input type="text" placeholder="Password" v-model="credentials.password">
            <button @click="sendCredentials">Click Me</button>
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
                    password: null
                }
            }
        },
        methods : {
            sendCredentials () {
                authenticationService.register(this.credentials)
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>
