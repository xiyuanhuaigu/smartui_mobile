import { defineStore } from "pinia";

let userstore = defineStore('userstore',{

    state:()=>{
        return {
            user:{
                username:'admin',
                password:'admin'
            }
        }
    }

})


export default userstore