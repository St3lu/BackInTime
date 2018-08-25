import Api from './Api'

export default {
    async register (credentials) {
        try{
            await Api().post('register', credentials)
            return;
        }catch(err){
            return err.response.data.error
        }
    }
}
