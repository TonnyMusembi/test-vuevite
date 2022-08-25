<template>
    <div>
    <form @submit="login">
        <input type="text" placeholder="enter name " v-bind="name"><br><br>
        <input type="text" placeholder="enter password" v-bind="password"><br><br>
        <button type="submit" class="btn btn-primary" v-on:click="login()">Login</button>
        
    </form>
    </div>

    <div>
          <router-link to="/watchexample"> Home</router-link>

    </div>
</template>
<script >
export default {
    data() {
        return {
            name:null,
            password:null,

        }
    },
    



}
methods: {
    // login()
    // {
    //     // console.log("Login fuction called")


    // }
  
    
    
}


</script>